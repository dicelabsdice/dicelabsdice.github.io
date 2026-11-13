export const WIDTH = 576;
export const HEIGHT = 360;
const ink = '#111214';
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
const pick = (items, random) => items[Math.floor(random() * items.length)];
const rect = (ctx, x, y, w, h, color = ink) => { ctx.fillStyle = color; ctx.fillRect(x, y, w, h); };
const circle = (ctx, x, y, r, color = ink) => { ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); };
const text = (ctx, value, x, y, size = 16) => { ctx.fillStyle = ink; ctx.font = `bold ${size}px monospace`; ctx.textAlign = 'center'; ctx.fillText(value, x, y); };
const ballHits = (ball, box) => Math.hypot(ball.x - clamp(ball.x, box.x, box.x + box.w), ball.y - clamp(ball.y, box.y, box.y + box.h)) <= ball.r;

export function createSnake(random = Math.random) {
  const cols = WIDTH / 24, rows = HEIGHT / 24;
  const state = { score: 0, outcome: null, body: [{ x: 8, y: 7 }, { x: 7, y: 7 }, { x: 6, y: 7 }], direction: { x: 1, y: 0 }, next: { x: 1, y: 0 }, food: null, elapsed: 0, queued: false };
  const directions = { left: { x: -1, y: 0 }, right: { x: 1, y: 0 }, up: { x: 0, y: -1 }, down: { x: 0, y: 1 } };
  const placeFood = () => {
    const free = [];
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) if (!state.body.some(p => p.x === x && p.y === y)) free.push({ x, y });
    state.food = free.length ? pick(free, random) : null;
    if (!free.length) state.outcome = 'win';
  };
  placeFood();
  return {
    state,
    press(action) {
      const next = directions[action];
      if (next && !state.queued && next.x !== -state.direction.x && next.y !== -state.direction.y) { state.next = next; state.queued = true; }
    },
    step(dt) {
      if (state.outcome) return;
      state.elapsed += dt;
      const period = Math.max(0.085, 0.17 - state.score * 0.0008);
      while (state.elapsed >= period && !state.outcome) {
        state.elapsed -= period;
        state.direction = state.next;
        state.queued = false;
        const head = { x: state.body[0].x + state.direction.x, y: state.body[0].y + state.direction.y };
        const eating = head.x === state.food.x && head.y === state.food.y;
        const occupied = eating ? state.body : state.body.slice(0, -1);
        if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows || occupied.some(p => p.x === head.x && p.y === head.y)) { state.outcome = 'lose'; return; }
        state.body.unshift(head);
        if (eating) { state.score += 10; placeFood(); } else state.body.pop();
      }
    },
    draw(ctx) {
      for (let x = 0; x <= WIDTH; x += 24) rect(ctx, x, 0, 1, HEIGHT, '#eeeeee');
      for (let y = 0; y <= HEIGHT; y += 24) rect(ctx, 0, y, WIDTH, 1, '#eeeeee');
      state.body.forEach((p, i) => rect(ctx, p.x * 24 + 2, p.y * 24 + 2, 20, 20, i ? '#55575b' : ink));
      if (state.food) { circle(ctx, state.food.x * 24 + 12, state.food.y * 24 + 12, 8); circle(ctx, state.food.x * 24 + 12, state.food.y * 24 + 12, 3, '#fff'); }
    }
  };
}

export function createBreakout() {
  const state = { score: 0, outcome: null, lives: 3, paddle: { x: WIDTH / 2 - 44, y: 334, w: 88, h: 8 }, ball: { x: WIDTH / 2, y: 300, vx: 140, vy: -190, r: 5 }, target: null, bricks: [] };
  for (let row = 0; row < 4; row++) for (let col = 0; col < 8; col++) state.bricks.push({ x: (WIDTH - 442) / 2 + col * 56, y: 36 + row * 25, w: 50, h: 18 });
  const resetBall = () => { Object.assign(state.ball, { x: state.paddle.x + 44, y: 300, vx: 140, vy: -190 }); };
  return {
    state,
    press(action) { if (action === 'left' || action === 'right') { state.target = null; state.paddle.x = clamp(state.paddle.x + (action === 'left' ? -14 : 14), 0, WIDTH - state.paddle.w); } },
    point(x) { state.target = clamp(x - state.paddle.w / 2, 0, WIDTH - state.paddle.w); },
    step(dt, held = new Set()) {
      if (state.outcome) return;
      const p = state.paddle, b = state.ball;
      if (held.has('left') || held.has('right')) { state.target = null; p.x += ((held.has('right') ? 1 : 0) - (held.has('left') ? 1 : 0)) * 330 * dt; }
      else if (state.target !== null) p.x = state.target;
      p.x = clamp(p.x, 0, WIDTH - p.w);
      const oldX = b.x, oldY = b.y;
      b.x += b.vx * dt; b.y += b.vy * dt;
      if (b.x < b.r) { b.x = b.r; b.vx = Math.abs(b.vx); }
      if (b.x > WIDTH - b.r) { b.x = WIDTH - b.r; b.vx = -Math.abs(b.vx); }
      if (b.y < b.r) { b.y = b.r; b.vy = Math.abs(b.vy); }
      if (b.vy > 0 && ballHits(b, p)) {
        b.y = p.y - b.r;
        b.vx = ((b.x - p.x) / p.w - 0.5) * 330;
        b.vy = -Math.sqrt(Math.max(220 * 220 - b.vx * b.vx, 150 * 150));
      }
      const index = state.bricks.findIndex(brick => ballHits(b, brick));
      if (index >= 0) {
        const brick = state.bricks[index];
        if (oldY + b.r <= brick.y || oldY - b.r >= brick.y + brick.h) b.vy *= -1;
        else if (oldX + b.r <= brick.x || oldX - b.r >= brick.x + brick.w) b.vx *= -1;
        else b.vy *= -1;
        state.bricks.splice(index, 1); state.score += 10;
      }
      if (!state.bricks.length) state.outcome = 'win';
      else if (b.y > HEIGHT + b.r) { state.lives--; if (!state.lives) state.outcome = 'lose'; else resetBall(); }
    },
    draw(ctx) {
      state.bricks.forEach(b => rect(ctx, b.x, b.y, b.w, b.h, b.y < 70 ? ink : '#77797c'));
      const p = state.paddle; rect(ctx, p.x, p.y, p.w, p.h);
      circle(ctx, state.ball.x, state.ball.y, state.ball.r);
      for (let i = 0; i < state.lives; i++) circle(ctx, WIDTH - 18 - i * 14, 16, 3);
    }
  };
}

export function createInvaders(random = Math.random) {
  const state = { score: 0, outcome: null, lives: 3, x: WIDTH / 2, enemies: [], bullets: [], shots: [], direction: 1, cooldown: 0, enemyTimer: 1.1, shield: 0 };
  for (let row = 0; row < 4; row++) for (let col = 0; col < 7; col++) state.enemies.push({ x: (WIDTH - 480) / 2 + 52 + col * 52, y: 32 + row * 32 });
  const fire = () => { if (state.cooldown <= 0) { state.bullets.push({ x: state.x, y: 316 }); state.cooldown = 0.23; } };
  return {
    state,
    press(action) {
      if (action === 'action') fire();
      else if (action === 'left' || action === 'right') state.x = clamp(state.x + (action === 'left' ? -12 : 12), 16, WIDTH - 16);
    },
    point(x, y, kind) { state.x = clamp(x, 16, WIDTH - 16); if (kind === 'down') fire(); },
    step(dt, held = new Set()) {
      if (state.outcome) return;
      state.cooldown -= dt; state.shield = Math.max(0, state.shield - dt);
      state.x = clamp(state.x + ((held.has('right') ? 1 : 0) - (held.has('left') ? 1 : 0)) * 240 * dt, 16, WIDTH - 16);
      if (held.has('action')) fire();
      const speed = 22 + (28 - state.enemies.length) * 2;
      state.enemies.forEach(e => { e.x += state.direction * speed * dt; });
      if (state.enemies.some(e => e.x < 16 || e.x > WIDTH - 40)) { state.direction *= -1; state.enemies.forEach(e => { e.x = clamp(e.x, 16, WIDTH - 40); e.y += 12; }); }
      state.bullets.forEach(b => { b.y -= 330 * dt; });
      state.shots.forEach(b => { b.y += 135 * dt; });
      for (const b of state.bullets) {
        const index = state.enemies.findIndex(e => b.x >= e.x - 2 && b.x <= e.x + 26 && b.y >= e.y - 4 && b.y <= e.y + 20);
        if (index >= 0) { state.enemies.splice(index, 1); b.y = -100; state.score += 10; }
      }
      state.enemyTimer -= dt;
      if (state.enemyTimer <= 0 && state.enemies.length) { const e = pick(state.enemies, random); state.shots.push({ x: e.x + 12, y: e.y + 20 }); state.enemyTimer = 0.8 + random() * 0.7; }
      for (const b of state.shots) if (Math.abs(b.x - state.x) < 14 && b.y > 314 && b.y < 342 && !state.shield) { state.lives--; state.shield = 1.2; b.y = HEIGHT + 20; }
      state.bullets = state.bullets.filter(b => b.y > -10);
      state.shots = state.shots.filter(b => b.y < HEIGHT + 10);
      if (!state.enemies.length) state.outcome = 'win';
      else if (!state.lives || state.enemies.some(e => e.y >= 292)) state.outcome = 'lose';
    },
    draw(ctx) {
      const bug = ['00100100', '00011000', '01111110', '11011011', '01111110', '10100101'];
      for (const e of state.enemies) bug.forEach((row, y) => [...row].forEach((pixel, x) => { if (pixel === '1') rect(ctx, e.x + x * 3, e.y + y * 3, 3, 3); }));
      state.bullets.forEach(b => rect(ctx, b.x - 1.5, b.y, 3, 10));
      state.shots.forEach(b => rect(ctx, b.x - 2, b.y, 4, 7, '#777'));
      const color = state.shield ? '#999' : ink;
      rect(ctx, state.x - 14, 328, 28, 8, color); rect(ctx, state.x - 9, 321, 18, 7, color); rect(ctx, state.x - 3, 315, 6, 6, color);
      for (let i = 0; i < state.lives; i++) circle(ctx, WIDTH - 18 - i * 14, HEIGHT - 10, 3);
    }
  };
}

export function createFlappy(random = Math.random) {
  const state = { score: 0, outcome: null, y: 180, vy: 0, pipes: [], timer: 0.3 };
  return {
    state,
    press(action) { if (action === 'action' || action === 'up') state.vy = -220; },
    point(x, y, kind) { if (kind === 'down') state.vy = -220; },
    step(dt) {
      if (state.outcome) return;
      state.vy += 580 * dt; state.y += state.vy * dt;
      state.timer -= dt;
      if (state.timer <= 0) { state.pipes.push({ x: WIDTH + 20, middle: 110 + random() * 135, counted: false }); state.timer = 1.7; }
      for (const pipe of state.pipes) {
        pipe.x -= 115 * dt;
        if (pipe.x + 48 < 110 && !pipe.counted) { pipe.counted = true; state.score++; }
        if (pipe.x < 130 && pipe.x + 48 > 110 && (state.y - 10 < pipe.middle - 64 || state.y + 10 > pipe.middle + 64)) state.outcome = 'lose';
      }
      state.pipes = state.pipes.filter(p => p.x > -60);
      if (state.y < 10 || state.y > 334) state.outcome = 'lose';
    },
    draw(ctx) {
      state.pipes.forEach(p => { rect(ctx, p.x, 0, 48, p.middle - 64, '#37393c'); rect(ctx, p.x, p.middle + 64, 48, HEIGHT - p.middle - 64, '#37393c'); });
      rect(ctx, 0, 344, WIDTH, 2, '#999');
      rect(ctx, 110, state.y - 9, 21, 18); rect(ctx, 131, state.y - 2, 6, 5); rect(ctx, 123, state.y - 5, 4, 4, '#fff');
      rect(ctx, 106, state.y + 1, 9, 5, '#777');
    }
  };
}

export function createPong(random = Math.random) {
  const state = { score: 0, opponent: 0, outcome: null, y: 144, ai: 148, target: null, time: 0, ball: { x: WIDTH / 2, y: 180, vx: -190, vy: 100, r: 5 } };
  const serve = direction => { Object.assign(state.ball, { x: WIDTH / 2, y: 180, vx: direction * 190, vy: (random() < 0.5 ? -1 : 1) * 100 }); };
  return {
    state,
    press(action) { if (action === 'up' || action === 'down') { state.target = null; state.y = clamp(state.y + (action === 'up' ? -14 : 14), 0, HEIGHT - 72); } },
    point(x, y) { state.target = clamp(y - 36, 0, HEIGHT - 72); },
    step(dt, held = new Set()) {
      if (state.outcome) return;
      state.time += dt;
      if (held.has('up') || held.has('down')) { state.target = null; state.y += ((held.has('down') ? 1 : 0) - (held.has('up') ? 1 : 0)) * 300 * dt; }
      else if (state.target !== null) state.y = state.target;
      state.y = clamp(state.y, 0, HEIGHT - 72);
      const b = state.ball;
      const target = b.vx > 0 ? b.y - 32 + Math.sin(state.time * 1.7) * 24 : 148;
      state.ai = clamp(state.ai + clamp(target - state.ai, -155 * dt, 155 * dt), 0, HEIGHT - 64);
      b.x += b.vx * dt; b.y += b.vy * dt;
      if (b.y < b.r) { b.y = b.r; b.vy = Math.abs(b.vy); }
      if (b.y > HEIGHT - b.r) { b.y = HEIGHT - b.r; b.vy = -Math.abs(b.vy); }
      if (b.vx < 0 && ballHits(b, { x: 20, y: state.y, w: 9, h: 72 })) { b.x = 34; b.vx = Math.min(310, Math.abs(b.vx) * 1.04); b.vy = ((b.y - state.y) / 72 - 0.5) * 380; }
      if (b.vx > 0 && ballHits(b, { x: WIDTH - 29, y: state.ai, w: 9, h: 64 })) { b.x = WIDTH - 34; b.vx = -Math.min(310, Math.abs(b.vx) * 1.04); b.vy = ((b.y - state.ai) / 64 - 0.5) * 330; }
      if (b.x < -10) { state.opponent++; serve(-1); }
      if (b.x > WIDTH + 10) { state.score++; serve(1); }
      if (state.score === 5) state.outcome = 'win';
      if (state.opponent === 5) state.outcome = 'lose';
    },
    draw(ctx) {
      for (let y = 0; y < HEIGHT; y += 20) rect(ctx, WIDTH / 2 - 1, y, 2, 10, '#ddd');
      text(ctx, state.score, WIDTH / 2 - 35, 30, 22); text(ctx, state.opponent, WIDTH / 2 + 35, 30, 22);
      rect(ctx, 20, state.y, 9, 72); rect(ctx, WIDTH - 29, state.ai, 9, 64, '#777'); circle(ctx, state.ball.x, state.ball.y, state.ball.r);
    }
  };
}

export function createMines(random = Math.random) {
  const cols = 8, rows = 6, count = 8, size = 48, left = (WIDTH - cols * size) / 2, top = 36;
  const state = { score: 0, outcome: null, mines: new Set(), revealed: new Set(), flags: new Set(), seeded: false, cursor: 19, flagMode: false };
  const neighbors = index => {
    const out = [], x = index % cols, y = Math.floor(index / cols);
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if ((dx || dy) && x + dx >= 0 && x + dx < cols && y + dy >= 0 && y + dy < rows) out.push((y + dy) * cols + x + dx);
    return out;
  };
  const number = index => neighbors(index).filter(n => state.mines.has(n)).length;
  const seed = index => {
    const excluded = new Set([index, ...neighbors(index)]);
    const available = Array.from({ length: cols * rows }, (_, i) => i).filter(i => !excluded.has(i));
    for (let i = 0; i < count; i++) { const pos = Math.floor(random() * available.length); state.mines.add(available.splice(pos, 1)[0]); }
    state.seeded = true;
  };
  const flag = index => { if (!state.revealed.has(index)) { if (state.flags.has(index)) state.flags.delete(index); else if (state.flags.size < count) state.flags.add(index); } };
  const reveal = index => {
    if (state.flags.has(index) || state.revealed.has(index)) return;
    if (!state.seeded) seed(index);
    if (state.mines.has(index)) { state.outcome = 'lose'; return; }
    const queue = [index];
    while (queue.length) {
      const cell = queue.pop();
      if (state.revealed.has(cell) || state.flags.has(cell)) continue;
      state.revealed.add(cell);
      if (number(cell) === 0) neighbors(cell).forEach(n => { if (!state.mines.has(n)) queue.push(n); });
    }
    state.score = state.revealed.size;
    if (state.score === cols * rows - count) state.outcome = 'win';
  };
  return {
    state,
    step() {},
    press(action) {
      if (state.outcome) return;
      if (action === 'flag') state.flagMode = !state.flagMode;
      else if (action === 'flag-cell') flag(state.cursor);
      else if (action === 'action') { if (state.flagMode) flag(state.cursor); else reveal(state.cursor); }
      else {
        const x = state.cursor % cols, y = Math.floor(state.cursor / cols);
        if (action === 'left' && x > 0) state.cursor--;
        if (action === 'right' && x < cols - 1) state.cursor++;
        if (action === 'up' && y > 0) state.cursor -= cols;
        if (action === 'down' && y < rows - 1) state.cursor += cols;
      }
    },
    point(x, y, kind) {
      if (state.outcome || (kind !== 'down' && kind !== 'flag')) return;
      const col = Math.floor((x - left) / size), row = Math.floor((y - top) / size);
      if (col < 0 || col >= cols || row < 0 || row >= rows) return;
      state.cursor = row * cols + col;
      if (kind === 'flag' || state.flagMode) flag(state.cursor); else reveal(state.cursor);
    },
    draw(ctx) {
      for (let i = 0; i < cols * rows; i++) {
        const x = left + (i % cols) * size, y = top + Math.floor(i / cols) * size;
        rect(ctx, x + 1, y + 1, size - 2, size - 2, state.revealed.has(i) ? '#e2e3e4' : '#f9f9f9');
        ctx.strokeStyle = '#bfc1c4'; ctx.lineWidth = 1; ctx.strokeRect(x + 1, y + 1, size - 2, size - 2);
        if (state.outcome === 'lose' && state.mines.has(i)) { circle(ctx, x + 24, y + 24, 8); rect(ctx, x + 23, y + 12, 2, 24); rect(ctx, x + 12, y + 23, 24, 2); }
        else if (state.flags.has(i)) { rect(ctx, x + 17, y + 12, 2, 25); ctx.fillStyle = ink; ctx.beginPath(); ctx.moveTo(x + 19, y + 12); ctx.lineTo(x + 34, y + 19); ctx.lineTo(x + 19, y + 25); ctx.fill(); }
        else if (state.revealed.has(i) && number(i)) text(ctx, number(i), x + 24, y + 31, 22);
        if (i === state.cursor) { ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.strokeRect(x + 5, y + 5, size - 10, size - 10); }
      }
    }
  };
}

export const games = [
  { id: 'snake', name: 'Snake', hint: 'Arrow keys / WASD', touch: 'Swipe to steer', create: createSnake },
  { id: 'breakout', name: 'Breakout', hint: 'Left / Right / A / D', touch: 'Drag to move', create: createBreakout },
  { id: 'invaders', name: 'Bug Invaders', hint: 'Left / Right / A / D + Space to fire', touch: 'Drag to move; hold to fire', create: createInvaders },
  { id: 'flappy', name: 'Flappy Bird', hint: 'Space / Up / W to flap', touch: 'Tap to flap', create: createFlappy },
  { id: 'pong', name: 'Pong', hint: 'Up / Down / W / S', touch: 'Drag to move', create: createPong },
  { id: 'mines', name: 'Minesweeper', hint: 'Arrows / WASD + Enter to reveal + F to flag', touch: 'Tap to reveal; hold to flag', create: createMines }
];
