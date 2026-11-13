const tunes = {
  eat: [[740, 0, .07], [1110, .065, .09]],
  brick: [[880, 0, .055], [1320, .045, .065]],
  bug: [[440, 0, .06, 'square', 220], [880, .05, .07]],
  point: [[660, 0, .08], [990, .07, .1]],
  reveal: [[620, 0, .065, 'triangle'], [830, .05, .075, 'triangle']],
  flag: [[520, 0, .045, 'triangle']],
  flap: [[360, 0, .055, 'triangle', 540]],
  hurt: [[220, 0, .1, 'triangle', 110]],
  win: [[523, 0, .1], [659, .1, .1], [784, .2, .16]],
  lose: [[294, 0, .12, 'triangle'], [147, .12, .2, 'triangle', 98]]
};

// Short synthesized effects: no downloads, music loop, or audio before a gesture.
export function createArcadeSound(host = globalThis) {
  const Context = host.AudioContext || host.webkitAudioContext;
  let context, master, enabled = true;
  const voices = new Set(), lastPlayed = new Map();
  try { enabled = host.localStorage.getItem('dice-labs-arcade-sound') !== 'off'; } catch {}

  function stop() {
    for (const voice of voices) { try { voice.stop(); } catch {} }
    voices.clear(); lastPlayed.clear();
  }

  function unlock() {
    if (!enabled || !Context) return;
    try {
      if (!context) {
        context = new Context(); master = context.createGain();
        master.gain.value = .2; master.connect(context.destination);
      }
      if (context.state === 'suspended') context.resume().catch(() => {});
    } catch { context = null; }
  }

  return {
    get supported() { return Boolean(Context); },
    get enabled() { return enabled; },
    unlock, stop,
    setEnabled(value) {
      enabled = Boolean(value);
      try { host.localStorage.setItem('dice-labs-arcade-sound', enabled ? 'on' : 'off'); } catch {}
      if (enabled) unlock(); else stop();
    },
    play(name) {
      if (!enabled || !context || context.state !== 'running' || host.document?.hidden || !tunes[name]) return;
      const now = context.currentTime;
      if (now - (lastPlayed.get(name) ?? -Infinity) < (name === 'flap' ? .16 : .08)) return;
      if (name === 'win' || name === 'lose') stop();
      if (voices.size + tunes[name].length > 6) return;
      lastPlayed.set(name, now);
      for (const [frequency, delay, duration, type = 'square', endFrequency] of tunes[name]) {
        const oscillator = context.createOscillator(), envelope = context.createGain();
        const start = now + .005 + delay, end = start + duration;
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, start);
        if (endFrequency) oscillator.frequency.exponentialRampToValueAtTime(endFrequency, end);
        envelope.gain.setValueAtTime(.0001, start);
        envelope.gain.exponentialRampToValueAtTime(.08, start + .005);
        envelope.gain.exponentialRampToValueAtTime(.0001, end);
        oscillator.connect(envelope); envelope.connect(master);
        voices.add(oscillator);
        oscillator.onended = () => { voices.delete(oscillator); oscillator.disconnect(); envelope.disconnect(); };
        oscillator.start(start); oscillator.stop(end + .005);
      }
    }
  };
}

// Observe state changes once, not each rendered frame or each cell in a flood fill.
export function createGameFeedback(sound) {
  let watched = null, previous = null;
  const snapshot = state => ({ score: state.score, lives: state.lives, opponent: state.opponent, flags: state.flags?.size, outcome: state.outcome });
  return (game, id) => {
    const next = snapshot(game.state);
    if (game === watched && previous) {
      if (next.outcome && next.outcome !== previous.outcome) sound.play(next.outcome === 'win' ? 'win' : 'lose');
      else if (next.lives < previous.lives || next.opponent > previous.opponent) sound.play('hurt');
      else if (next.score > previous.score) sound.play(({ snake: 'eat', breakout: 'brick', invaders: 'bug', mines: 'reveal' })[id] || 'point');
      else if (next.flags !== previous.flags) sound.play('flag');
    }
    watched = game; previous = next;
  };
}
