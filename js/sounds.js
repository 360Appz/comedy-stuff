// ============================================================
// SOUNDS.JS — Web Audio API procedural sound effects
// All sounds generated in-browser — zero external files
// ============================================================

const SOUNDS = (() => {
  let ctx = null;
  let enabled = true;

  function getCtx() {
    if (!ctx) {
      try {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (_) { return null; }
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function setEnabled(val) { enabled = val; }
  function toggle() { enabled = !enabled; return enabled; }

  // ── Core helpers ─────────────────────────────────────────
  function playTone(freq, type, duration, vol = 0.3, delay = 0, pitchEnd = null) {
    if (!enabled) return;
    const c = getCtx();
    if (!c) return;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, c.currentTime + delay);
    if (pitchEnd) osc.frequency.linearRampToValueAtTime(pitchEnd, c.currentTime + delay + duration);
    gain.gain.setValueAtTime(0, c.currentTime + delay);
    gain.gain.linearRampToValueAtTime(vol, c.currentTime + delay + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + delay + duration);
    osc.start(c.currentTime + delay);
    osc.stop(c.currentTime + delay + duration + 0.01);
  }

  function playNoise(duration, vol = 0.15, delay = 0, hiFreq = 4000) {
    if (!enabled) return;
    const c = getCtx();
    if (!c) return;
    const bufSize = c.sampleRate * duration;
    const buf = c.createBuffer(1, bufSize, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource();
    src.buffer = buf;
    const filter = c.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = hiFreq;
    filter.Q.value = 0.5;
    const gain = c.createGain();
    gain.gain.setValueAtTime(0, c.currentTime + delay);
    gain.gain.linearRampToValueAtTime(vol, c.currentTime + delay + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + delay + duration);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(c.destination);
    src.start(c.currentTime + delay);
    src.stop(c.currentTime + delay + duration + 0.01);
  }

  // ── Sound effects ─────────────────────────────────────────

  /** Short bright click */
  function click() {
    playTone(800, 'sine', 0.06, 0.25);
    playTone(1200, 'sine', 0.03, 0.1, 0.01);
  }

  /** Subtle hover beep */
  function hover() {
    playTone(600, 'sine', 0.04, 0.08);
  }

  /** 3-note success arpeggio (C-E-G) */
  function success() {
    playTone(523.25, 'sine', 0.12, 0.3, 0.0);   // C5
    playTone(659.25, 'sine', 0.12, 0.3, 0.12);   // E5
    playTone(783.99, 'sine', 0.18, 0.35, 0.24);  // G5
    playNoise(0.08, 0.05, 0.24, 6000);
  }

  /** Error buzz */
  function error() {
    playTone(200, 'sawtooth', 0.08, 0.25);
    playTone(150, 'sawtooth', 0.12, 0.25, 0.06);
    playNoise(0.1, 0.1, 0, 500);
  }

  /** Card flip whoosh */
  function flip() {
    playNoise(0.18, 0.2, 0, 3000);
    playTone(400, 'sine', 0.15, 0.1, 0, 200);
  }

  /** Timer tick */
  function tick() {
    playTone(700, 'square', 0.015, 0.15);
  }

  /** Urgent tick (last 5s) */
  function urgentTick() {
    playTone(900, 'square', 0.02, 0.2);
  }

  /** Level up chord */
  function levelUp() {
    [261.63, 329.63, 392.00, 523.25].forEach((f, i) => {
      playTone(f, 'sine', 0.4, 0.25, i * 0.08);
    });
    playNoise(0.3, 0.08, 0.3, 8000);
  }

  /** Reveal whoosh */
  function reveal() {
    playNoise(0.15, 0.18, 0, 5000);
    playTone(300, 'sine', 0.2, 0.15, 0.05, 800);
  }

  /** Carousel swipe */
  function swipe() {
    playNoise(0.1, 0.12, 0, 4000);
    playTone(500, 'sine', 0.08, 0.1, 0.02, 300);
  }

  /** Copy to clipboard ding */
  function copy() {
    playTone(880, 'sine', 0.08, 0.2);
    playTone(1100, 'sine', 0.1, 0.2, 0.07);
  }

  /** Game over */
  function gameOver() {
    playTone(392, 'sine', 0.15, 0.3);
    playTone(349, 'sine', 0.15, 0.3, 0.15);
    playTone(261, 'sine', 0.35, 0.4, 0.3);
  }

  /** Streak bonus */
  function streakBonus() {
    [523, 659, 784, 1047].forEach((f, i) => {
      playTone(f, 'sine', 0.1, 0.3, i * 0.07);
    });
    playNoise(0.2, 0.1, 0.28, 10000);
  }

  return {
    click, hover, success, error, flip, tick, urgentTick,
    levelUp, reveal, swipe, copy, gameOver, streakBonus,
    setEnabled, toggle
  };
})();
