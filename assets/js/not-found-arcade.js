import { games, WIDTH, HEIGHT } from '/assets/js/not-found-games.js?v=20261113-geometry1';

const launcher = document.querySelector('.action-play');
const dialog = document.querySelector('#arcade');
const canvas = dialog.querySelector('canvas');
const ctx = canvas.getContext('2d');
if (ctx && typeof dialog.showModal === 'function') setupArcade();

function setupArcade() {
  const board = dialog.querySelector('.game-board');
  // Older cached markup can briefly coexist with the shared assets during deploys.
  const surface = dialog.querySelector('.game-surface') || canvas;
  const message = dialog.querySelector('.stage-message');
  const rolling = dialog.querySelector('.dice-roll');
  const die = rolling.querySelector('.mini-die');
  const title = dialog.querySelector('#game-title');
  const hint = dialog.querySelector('#game-hint');
  const touchHint = dialog.querySelector('#game-touch');
  const status = dialog.querySelector('.game-status');
  const score = dialog.querySelector('.game-score');
  const startButton = dialog.querySelector('.game-start');
  const restartButton = dialog.querySelector('.game-restart');
  const randomButton = dialog.querySelector('.game-random');
  const keyboard = new Set();
  const pointers = new Map();
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let game = null, selected = null, phase = 'closed';
  let frame = 0, previous = 0, accumulated = 0, rollTimeout = 0, rollInterval = 0;
  let rollVersion = 0, ratio = 1;
  let gesture = null, holdTimeout = 0, lastTouch = -Infinity;

  const setText = (node, value) => { if (node.textContent !== value) node.textContent = value; };
  const clearInput = () => { keyboard.clear(); pointers.clear(); clearTimeout(holdTimeout); gesture = null; };
  const stopFrame = () => { cancelAnimationFrame(frame); frame = 0; accumulated = 0; };
  const stopRoll = () => { clearTimeout(rollTimeout); clearInterval(rollInterval); rollVersion++; };
  const setStartLabel = label => {
    setText(startButton.querySelector('span'), label);
    startButton.querySelector('path').setAttribute('d', label === 'Pause' ? 'M7 5h3v14H7ZM14 5h3v14h-3Z' : 'm8 5 11 7-11 7Z');
  };

  function draw() {
    ctx.save();
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, WIDTH, HEIGHT);
    game?.draw(ctx);
    ctx.restore();
    if (game) {
      const s = game.state;
      let detail = `Score ${s.score}`;
      if (selected.id === 'pong') detail = `You ${s.score} : ${s.opponent} CPU`;
      else if (selected.id === 'mines') detail = `${s.score}/40 safe | ${s.flags.size}/8 flags`;
      else if (s.lives !== undefined) detail += ` | ${s.lives} lives`;
      setText(score, detail);
    }
  }

  function resize() {
    if (!dialog.open) return;
    // Reserve room for the permanent outline, independently of keyboard focus.
    const scale = Math.max(1 / WIDTH, Math.min((board.clientWidth - 4) / WIDTH, (board.clientHeight - 4) / HEIGHT));
    surface.style.width = canvas.style.width = `${WIDTH * scale}px`;
    surface.style.height = canvas.style.height = `${HEIGHT * scale}px`;
    ratio = Math.max(0.1, scale * Math.min(window.devicePixelRatio || 1, 2));
    canvas.width = Math.round(WIDTH * ratio); canvas.height = Math.round(HEIGHT * ratio);
    draw();
  }
  new ResizeObserver(resize).observe(board);

  function showMessage(heading, detail) {
    message.hidden = false;
    message.querySelector('strong').textContent = heading;
    message.querySelector('span').textContent = detail;
  }

  function finishIfNeeded() {
    if (!game?.state.outcome) return false;
    phase = 'ended'; stopFrame(); clearInput();
    const won = game.state.outcome === 'win';
    showMessage(won ? 'You win!' : 'Game over', 'Play again, or roll the dice.');
    setText(status, won ? 'You win!' : 'Game over');
    setStartLabel('Play again');
    draw();
    return true;
  }

  function tick(now) {
    if (phase !== 'playing' || !dialog.open) return;
    // A fixed timestep keeps collisions and speed consistent on high-refresh phones.
    accumulated += Math.min((now - previous) / 1000, 0.05);
    previous = now;
    const held = new Set([...keyboard, ...pointers.values()]);
    while (accumulated >= 1 / 120 && !game.state.outcome) { game.step(1 / 120, held); accumulated -= 1 / 120; }
    draw();
    if (!finishIfNeeded()) frame = requestAnimationFrame(tick);
  }

  function start() {
    if (!game || phase === 'rolling' || phase === 'closed' || phase === 'playing') return;
    if (phase === 'ended') game = selected.create();
    const fresh = phase === 'ready' || phase === 'ended';
    phase = 'playing'; message.hidden = true;
    setStartLabel('Pause'); setText(status, 'Playing');
    if (fresh && selected.id === 'flappy') game.press('action');
    previous = performance.now(); accumulated = 0;
    if (selected.id !== 'mines') frame = requestAnimationFrame(tick);
    draw();
  }

  function pause() {
    if (phase !== 'playing') return;
    phase = 'paused'; stopFrame(); clearInput();
    showMessage('Paused', 'Press Resume or P.');
    setStartLabel('Resume'); setText(status, 'Paused');
  }

  function send(action) {
    if (!game || phase === 'rolling' || phase === 'closed' || phase === 'ended') return;
    if (action !== 'flag' && action !== 'flag-cell' && phase !== 'playing') start();
    game.press?.(action);
    draw(); finishIfNeeded();
  }

  function chooseGame() {
    stopFrame(); stopRoll(); clearInput();
    const version = rollVersion;
    phase = 'rolling'; game = null; selected = null;
    delete dialog.dataset.game;
    rolling.hidden = false; message.hidden = true;
    title.textContent = 'Rolling the dice...'; hint.textContent = 'Choosing your controls...'; touchHint.textContent = '';
    setStartLabel('Play');
    setText(status, 'Choosing a game.'); setText(score, '');
    startButton.disabled = restartButton.disabled = randomButton.disabled = true;
    die.style.animation = 'none'; void die.offsetWidth; die.style.animation = '';
    const index = Math.floor(Math.random() * games.length);
    const complete = () => {
      clearInterval(rollInterval);
      if (!dialog.open || version !== rollVersion) return;
      die.dataset.face = String(index + 1);
      selected = games[index]; game = selected.create(); phase = 'ready';
      dialog.dataset.game = selected.id;
      title.textContent = `${index + 1} / ${selected.name}`;
      hint.textContent = `${selected.hint} \u00b7 P pause`;
      touchHint.textContent = selected.touch;
      canvas.setAttribute('aria-label', `${selected.name} game board`);
      rolling.hidden = true;
      showMessage('Ready?', 'Press Play to begin.');
      setText(status, 'Ready'); setStartLabel('Play');
      startButton.disabled = restartButton.disabled = randomButton.disabled = false;
      resize();
    };
    resize();
    if (reduced.matches) complete();
    else {
      rollInterval = setInterval(() => { die.dataset.face = String(1 + Math.floor(Math.random() * 6)); }, 90);
      rollTimeout = setTimeout(complete, 1000);
    }
  }

  launcher.hidden = false;
  launcher.addEventListener('click', () => {
    dialog.showModal(); document.body.classList.add('arcade-open'); chooseGame();
  });
  dialog.querySelector('.game-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    stopFrame(); stopRoll(); clearInput(); phase = 'closed'; game = null;
    document.body.classList.remove('arcade-open'); launcher.focus({ preventScroll: true });
  });
  startButton.addEventListener('click', () => {
    if (phase === 'playing') pause(); else { start(); canvas.focus({ preventScroll: true }); }
  });
  restartButton.addEventListener('click', () => {
    if (!selected || phase === 'rolling') return;
    stopFrame(); clearInput(); game = selected.create(); phase = 'ready'; start(); canvas.focus({ preventScroll: true });
  });
  randomButton.addEventListener('click', chooseGame);

  const keys = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down', a: 'left', d: 'right', w: 'up', s: 'down', ' ': 'action', Enter: 'action', f: 'flag-cell' };
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') return;
    if (event.key.toLowerCase() === 'p') { event.preventDefault(); if (phase === 'playing') pause(); else if (phase === 'paused') start(); return; }
    const action = keys[event.key] || keys[event.key.toLowerCase()];
    if (!action || (event.target.tagName === 'BUTTON' && (event.key === ' ' || event.key === 'Enter'))) return;
    event.preventDefault(); keyboard.add(action);
    if (!event.repeat || (selected?.id === 'mines' && action !== 'action' && action !== 'flag-cell')) send(action);
  });
  dialog.addEventListener('keyup', event => { const action = keys[event.key] || keys[event.key.toLowerCase()]; if (action) keyboard.delete(action); });

  const point = event => {
    const box = canvas.getBoundingClientRect();
    return [(event.clientX - box.left) * WIDTH / box.width, (event.clientY - box.top) * HEIGHT / box.height];
  };
  canvas.addEventListener('pointerdown', event => {
    if (event.button !== 0 || !game || phase === 'ended' || phase === 'rolling') return;
    if (gesture && gesture.id !== event.pointerId) return;
    if (event.pointerType !== 'mouse') lastTouch = performance.now();
    event.preventDefault(); canvas.setPointerCapture(event.pointerId); canvas.focus({ preventScroll: true });
    start();
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false, flagged: false };
    if (selected.id === 'mines' && event.pointerType !== 'mouse') {
      // Delay a touch reveal so a long press can flag without opening the cell first.
      const current = gesture, position = point(event);
      holdTimeout = setTimeout(() => {
        if (gesture !== current || current.moved || phase !== 'playing') return;
        current.flagged = true; game.point(...position, 'flag'); draw();
      }, 450);
    } else {
      if (selected.id === 'invaders') pointers.set(event.pointerId, 'action');
      game.point?.(...point(event), 'down'); draw(); finishIfNeeded();
    }
  });
  canvas.addEventListener('pointermove', event => {
    if (phase !== 'playing' || (event.pointerType !== 'mouse' && !canvas.hasPointerCapture(event.pointerId))) return;
    if (gesture?.id === event.pointerId) {
      const dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
      if (Math.hypot(dx, dy) >= 12) {
        gesture.moved = true; clearTimeout(holdTimeout);
        if (selected.id === 'snake') {
          send(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'));
          if (gesture) { gesture.x = event.clientX; gesture.y = event.clientY; }
        }
      }
    }
    game.point?.(...point(event), 'move'); draw();
  });
  const releasePointer = event => {
    pointers.delete(event.pointerId);
    if (gesture?.id !== event.pointerId) return;
    const current = gesture; gesture = null; clearTimeout(holdTimeout);
    if (event.type === 'pointerup' && selected?.id === 'mines' && event.pointerType !== 'mouse' && !current.moved && !current.flagged && phase === 'playing') {
      game.point(...point(event), 'down'); draw(); finishIfNeeded();
    }
  };
  canvas.addEventListener('pointerup', releasePointer);
  canvas.addEventListener('pointercancel', releasePointer);
  canvas.addEventListener('lostpointercapture', releasePointer);
  canvas.addEventListener('contextmenu', event => {
    if (selected?.id !== 'mines' || !game || phase === 'ended') return;
    event.preventDefault();
    // Touch flags are handled by the long press, not a second context-menu event.
    if (performance.now() - lastTouch < 1200 || ('pointerType' in event && event.pointerType && event.pointerType !== 'mouse')) return;
    start(); game.point?.(...point(event), 'flag'); draw();
  });
  window.addEventListener('blur', pause);
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
}
