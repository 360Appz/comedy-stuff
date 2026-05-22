// ============================================================
// ENGINE.JS — Game Logic, Daily Seed, Shuffle, Quiz State
// ============================================================

const ENGINE = (() => {
  // ── Seeded random (Mulberry32) ──────────────────────────
  function seededRandom(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  // ── Date / Hour seeds ────────────────────────────────────
  function getDailyKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  }
  function getHourlyKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${d.getHours()}`;
  }
  function getDailySeed() { return hashString(getDailyKey()); }
  function getHourlySeed() { return hashString(getHourlyKey()); }

  // ── Shuffle with seed ────────────────────────────────────
  function shuffleWithSeed(arr, seed) {
    const rng = seededRandom(seed);
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── Daily quote ──────────────────────────────────────────
  function getDailyQuote() {
    const pool = shuffleWithSeed(QUOTES_POOL, getDailySeed());
    return pool[0];
  }

  // ── Hourly quote (for ticker variety) ───────────────────
  function getHourlyQuote() {
    const pool = shuffleWithSeed(QUOTES_POOL, getHourlySeed());
    return pool[1] || pool[0];
  }

  // ── Daily question ───────────────────────────────────────
  function getDailyQuestion() {
    const pool = shuffleWithSeed(QOTD_POOL, getDailySeed() + 1);
    return pool[0];
  }

  // ── Rapid fire cards (shuffled hourly) ──────────────────
  function getShuffledRapidFire() {
    return shuffleWithSeed(RAPID_FIRE_CARDS, getHourlySeed() + 42);
  }

  // ── Ticker quotes (shuffled hourly, 20 items) ────────────
  function getTickerQuotes() {
    const all = shuffleWithSeed(QUOTES_POOL, getHourlySeed() + 99);
    return all.slice(0, 20);
  }

  // ── Hourly theme (6 themes rotating) ────────────────────
  const THEMES = [
    { accent1: '#C8FF00', accent2: '#FF1F6D', accent3: '#0055FF', name: 'Nuclear Lime' },
    { accent1: '#0055FF', accent2: '#FF5C00', accent3: '#C8FF00', name: 'Blueprint Fire' },
    { accent1: '#9D00FF', accent2: '#C8FF00', accent3: '#FF1F6D', name: 'Ultra Violet' },
    { accent1: '#FF1F6D', accent2: '#0055FF', accent3: '#FFE500', name: 'Hot Code' },
    { accent1: '#FF5C00', accent2: '#9D00FF', accent3: '#C8FF00', name: 'Inferno Mode' },
    { accent1: '#FFE500', accent2: '#FF1F6D', accent3: '#0055FF', name: 'Golden Hour' }
  ];

  function getHourlyTheme() {
    const hour = new Date().getHours();
    return THEMES[Math.floor(hour / 4) % THEMES.length];
  }

  function applyHourlyTheme() {
    const t = getHourlyTheme();
    const root = document.documentElement;
    root.style.setProperty('--accent1', t.accent1);
    root.style.setProperty('--accent2', t.accent2);
    root.style.setProperty('--accent3', t.accent3);
    return t;
  }

  // ── Score / localStorage state ───────────────────────────
  const STORE_KEY = 'comedyPlaybook_v1';

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || {
        totalScore: 0,
        streak: 0,
        lastPlayed: null,
        highScore: 0,
        gamesPlayed: 0,
        dailyDone: null
      };
    } catch { return { totalScore: 0, streak: 0, lastPlayed: null, highScore: 0, gamesPlayed: 0, dailyDone: null }; }
  }

  function saveState(s) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch (_) {}
  }

  function addScore(pts) {
    const s = loadState();
    s.totalScore += pts;
    if (s.totalScore > s.highScore) s.highScore = s.totalScore;
    saveState(s);
    return s;
  }

  function recordGame(score) {
    const s = loadState();
    const today = getDailyKey();
    if (s.lastPlayed === today) {
      s.streak = s.streak;
    } else {
      const yesterday = (() => {
        const d = new Date(); d.setDate(d.getDate() - 1);
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
      })();
      s.streak = (s.lastPlayed === yesterday) ? s.streak + 1 : 1;
    }
    s.lastPlayed = today;
    s.gamesPlayed += 1;
    s.totalScore += score;
    if (s.totalScore > s.highScore) s.highScore = s.totalScore;
    saveState(s);
    return s;
  }

  function markDailyDone() {
    const s = loadState();
    s.dailyDone = getDailyKey();
    saveState(s);
  }

  function isDailyDone() {
    const s = loadState();
    return s.dailyDone === getDailyKey();
  }

  // ── Quiz game state ──────────────────────────────────────
  let _gameState = null;

  function startGame(mode = 'rapid-fire') {
    const cards = getShuffledRapidFire();
    _gameState = {
      mode,
      cards: cards.slice(0, 15),
      current: 0,
      score: 0,
      startTime: Date.now(),
      revealed: false,
      answers: []
    };
    return _gameState;
  }

  function getGameState() { return _gameState; }

  function revealAnswer() {
    if (!_gameState) return null;
    _gameState.revealed = true;
    return _gameState.cards[_gameState.current];
  }

  function markAnswer(correct) {
    if (!_gameState) return null;
    const pts = correct ? 100 : 0;
    _gameState.score += pts;
    _gameState.answers.push({ correct, card: _gameState.cards[_gameState.current] });
    _gameState.revealed = false;
    _gameState.current += 1;
    return _gameState;
  }

  function endGame() {
    if (!_gameState) return null;
    const result = recordGame(_gameState.score);
    const g = { ..._gameState, state: result };
    _gameState = null;
    return g;
  }

  function isGameOver() {
    return !_gameState || _gameState.current >= _gameState.cards.length;
  }

  // ── Countdown to next refresh ────────────────────────────
  function msToMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return midnight - now;
  }

  function msToNextHour() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(now.getHours() + 1, 0, 0, 0);
    return next - now;
  }

  function formatCountdown(ms) {
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  // ── Module for all chapters by category ─────────────────
  function getChaptersByColor(color) {
    return PLAYBOOK_CHAPTERS.filter(c => c.color === color);
  }

  function searchContent(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const results = [];
    QUOTES_POOL.forEach(item => {
      if (item.text.toLowerCase().includes(q)) results.push({ type: 'quote', item });
    });
    RAPID_FIRE_CARDS.forEach(card => {
      if (card.q.toLowerCase().includes(q) || card.a.toLowerCase().includes(q))
        results.push({ type: 'quiz', item: card });
    });
    return results.slice(0, 20);
  }

  // ── Utility ──────────────────────────────────────────────
  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function pickSeeded(arr, seed) {
    const rng = seededRandom(seed);
    return arr[Math.floor(rng() * arr.length)];
  }

  // ── Public API ───────────────────────────────────────────
  return {
    getDailyQuote,
    getHourlyQuote,
    getDailyQuestion,
    getShuffledRapidFire,
    getTickerQuotes,
    getHourlyTheme,
    applyHourlyTheme,
    loadState,
    addScore,
    recordGame,
    markDailyDone,
    isDailyDone,
    startGame,
    getGameState,
    revealAnswer,
    markAnswer,
    endGame,
    isGameOver,
    msToMidnight,
    msToNextHour,
    formatCountdown,
    shuffleWithSeed,
    getDailySeed,
    getHourlySeed,
    searchContent,
    pickRandom,
    pickSeeded,
    getChaptersByColor,
    THEMES
  };
})();
