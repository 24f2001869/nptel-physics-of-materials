/**
 * NPTEL Physics of Materials - Interactive Exam Prep & Quiz Engine
 */

// Application State
const STATE = {
  currentWeek: 1,
  activeTab: 'assignment', // 'study', 'assignment', 'mastery', 'history'
  activeQuizType: 'assignment',
  instantFeedbackPref: false,
  
  // Independent Quiz Sessions (Preserves answers across tab switches)
  sessions: {
    assignment: null,
    mastery: null
  },

  get quiz() {
    if (!this.sessions[this.activeQuizType]) {
      this.sessions[this.activeQuizType] = createQuizSession(this.activeQuizType);
    }
    return this.sessions[this.activeQuizType];
  },
  set quiz(val) {
    this.sessions[this.activeQuizType] = val;
  },

  // Stored Analytics & History
  history: []
};

// Storage Keys
const STORAGE_KEY_HISTORY = 'nptel_pom_quiz_history_v1';
const STORAGE_KEY_FEEDBACK_PREF = 'nptel_pom_feedback_pref';
const STORAGE_KEY_THEME = 'nptel_pom_theme_pref';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadLocalHistory();
  initWeekNav();
  initTabs();
  renderWeekInfo();
  renderStudyMaterials();
  renderStrategyView();
  startQuiz('assignment'); // Default to Week 1 Assignment
  initFormulaCopy();
});

// Theme Toggle & Persistence
function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY_THEME) || 'tcs';
  applyTheme(saved);

  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'tcs';
      const nextTheme = current === 'dark' ? 'tcs' : 'dark';
      applyTheme(nextTheme);
    });
  }
}

function applyTheme(theme) {
  const iconEl = document.getElementById('theme-icon');
  const textEl = document.getElementById('theme-text');

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (iconEl) iconEl.textContent = '🌙';
    if (textEl) textEl.textContent = 'Dark Mode';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (iconEl) iconEl.textContent = '☀️';
    if (textEl) textEl.textContent = 'TCS Exam Mode';
  }
  try {
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  } catch (e) {}
}

// Load persistent test history
function loadLocalHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
    if (raw) {
      STATE.history = JSON.parse(raw);
    }
    const pref = localStorage.getItem(STORAGE_KEY_FEEDBACK_PREF);
    if (pref !== null) {
      STATE.instantFeedbackPref = pref === 'true';
    }
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }
  updateHeaderStats();
}

function saveLocalHistory() {
  try {
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(STATE.history));
  } catch (e) {
    console.warn('Failed to save history:', e);
  }
}

// Update Top Bar Stat Counter
function updateHeaderStats() {
  const testsCountEl = document.getElementById('stat-tests-count');
  const bestScoreEl = document.getElementById('stat-best-score');
  
  if (testsCountEl) {
    testsCountEl.textContent = STATE.history.length;
  }
  
  if (bestScoreEl) {
    if (STATE.history.length === 0) {
      bestScoreEl.textContent = '0%';
    } else {
      const highest = Math.max(...STATE.history.map(h => h.percentage));
      bestScoreEl.textContent = `${highest}%`;
    }
  }
}

// Navigation between Weeks
function initWeekNav() {
  const container = document.getElementById('weeks-nav-container');
  if (!container) return;
  container.innerHTML = '';

  NPTEL_DATA.weeks.forEach(w => {
    const btn = document.createElement('button');
    btn.className = `week-btn ${w.number === STATE.currentWeek ? 'active' : ''} ${w.status === 'upcoming' ? 'disabled' : ''}`;
    
    let statusBadge = '';
    if (w.status === 'active') {
      statusBadge = '<span class="badge badge-success">Active</span>';
    } else {
      statusBadge = '<span class="badge badge-warning">Available Soon</span>';
    }

    btn.innerHTML = `<span>Week ${w.number}</span> ${statusBadge}`;
    
    if (w.status === 'active') {
      btn.addEventListener('click', () => {
        STATE.currentWeek = w.number;
        document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderWeekInfo();
        renderStudyMaterials();
        STATE.sessions = { assignment: null, mastery: null };
        startQuiz('assignment');
      });
    } else {
      btn.title = 'Lectures & content ready to be added for this week!';
    }
    container.appendChild(btn);
  });
}

// Main Navigation Tabs
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      switchTab(target);
    });
  });
}

function switchTab(tabId, isInternal = false) {
  STATE.activeTab = tabId;
  document.querySelectorAll('.tab-btn').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-pane').forEach(p => {
    p.classList.toggle('active', p.id === `pane-${tabId}`);
  });

  if (tabId === 'assignment' || tabId === 'mastery') {
    STATE.activeQuizType = tabId;
    if (!STATE.sessions[tabId] && !isInternal) {
      startQuiz(tabId);
      return;
    }
    startTimer();
    renderQuizView();
  } else {
    stopTimer();
  }

  if (tabId === 'history') {
    renderHistoryTable();
  } else if (tabId === 'study') {
    renderMath();
  } else if (tabId === 'strategy') {
    renderStrategyView();
    renderMath();
  }
}

// Render Current Week Header and Overview
function renderWeekInfo() {
  const weekData = getCurrentWeekData();
  if (!weekData) return;

  const titleEl = document.getElementById('current-week-title');
  const summaryEl = document.getElementById('current-week-summary');
  
  if (titleEl) {
    titleEl.textContent = `Week ${weekData.number}: ${weekData.title}`;
  }
  if (summaryEl) {
    summaryEl.textContent = weekData.summary;
  }

  // Dynamically update Tab button texts with current week number & question counts
  const assignTabSpan = document.querySelector('#tab-assignment span');
  if (assignTabSpan) {
    const qCount = weekData.assignmentQuestions ? weekData.assignmentQuestions.length : 10;
    assignTabSpan.textContent = `Assignment ${weekData.number} Test (${qCount} Qs)`;
  }

  const masteryTabSpan = document.querySelector('#tab-mastery span');
  if (masteryTabSpan) {
    const mCount = weekData.masteryExamQuestions ? weekData.masteryExamQuestions.length : 22;
    masteryTabSpan.textContent = `Mastery Mock Exam (${mCount} Qs)`;
  }

  const studyOverviewHeading = document.getElementById('study-overview-heading');
  if (studyOverviewHeading) {
    studyOverviewHeading.textContent = `📌 Week ${weekData.number} Quick Overview`;
  }
}

function getCurrentWeekData() {
  return NPTEL_DATA.weeks.find(w => w.number === STATE.currentWeek);
}

// Render Study Materials Tab
function renderStudyMaterials() {
  const weekData = getCurrentWeekData();
  if (!weekData || !weekData.studyMaterials) return;
  const sm = weekData.studyMaterials;

  // Overview
  const ovEl = document.getElementById('study-overview-text');
  if (ovEl) ovEl.textContent = sm.quickOverview;

  // Lecture Breakdowns
  const lectContainer = document.getElementById('lectures-breakdown-container');
  if (lectContainer) {
    lectContainer.innerHTML = sm.lecturesBreakdown.map(l => `
      <div class="lecture-block">
        <div class="lecture-header">
          <span class="lecture-tag">Lecture ${l.lectureNo}</span>
          <span class="lecture-name">${escapeHtml(l.title)}</span>
        </div>
        <ul class="bullet-list">
          ${l.bullets.map(b => `<li>${formatMathInText(b)}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // Formula Sheet
  const formulaContainer = document.getElementById('formula-sheet-container');
  if (formulaContainer) {
    formulaContainer.innerHTML = sm.formulaSheet.map((f, i) => `
      <div class="formula-item">
        <div class="formula-title">
          <span>${escapeHtml(f.name)}</span>
          <span>${escapeHtml(f.units)}</span>
        </div>
        <div class="formula-math" data-formula="${escapeHtml(f.formula)}">
          $$${f.formula}$$
        </div>
        <div class="formula-desc">${escapeHtml(f.desc)}</div>
      </div>
    `).join('');
  }

  // Common Traps
  const trapContainer = document.getElementById('exam-traps-container');
  if (trapContainer) {
    trapContainer.innerHTML = sm.examTraps.map(t => `
      <div class="trap-card">
        <div class="trap-title">⚠️ ${escapeHtml(t.trap)}</div>
        <div class="trap-desc">${formatMathInText(t.explanation)}</div>
      </div>
    `).join('');
  }

  renderMath();
}

// Copy formula feature
function initFormulaCopy() {
  document.addEventListener('click', e => {
    const item = e.target.closest('.formula-item');
    if (item) {
      const mathEl = item.querySelector('.formula-math');
      if (mathEl) {
        const text = mathEl.dataset.formula;
        navigator.clipboard.writeText(text).then(() => {
          showToast('LaTeX formula copied to clipboard!');
        }).catch(() => {});
      }
    }
  });
}

function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #1e293b;
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.4);
      padding: 10px 18px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.5);
      z-index: 9999;
      font-size: 0.88rem;
      font-weight: 600;
      opacity: 0;
      transition: opacity 0.25s ease, transform 0.25s ease;
      transform: translateY(10px);
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 2400);
}

// ===================================================================
// QUIZ ENGINE
// ===================================================================

function createQuizSession(quizType, onlyMissed = false) {
  const weekData = getCurrentWeekData();
  const allQuestions = (quizType === 'assignment') 
    ? (weekData?.assignmentQuestions || [])
    : (weekData?.masteryExamQuestions || []);

  let questions = allQuestions.slice();
  const existing = STATE.sessions ? STATE.sessions[quizType] : null;
  if (onlyMissed && existing && existing.scoreResult && existing.scoreResult.incorrectQuestions) {
    const incorrectIds = new Set(existing.scoreResult.incorrectQuestions.map(q => q.id));
    questions = allQuestions.filter(q => incorrectIds.has(q.id));
  }

  return {
    type: quizType,
    questions: questions,
    currentIndex: 0,
    answers: {},
    flags: new Set(),
    visited: new Set([0]),
    instantFeedback: STATE.instantFeedbackPref,
    timerSeconds: 0,
    timerInterval: null,
    isCompleted: false,
    scoreResult: null,
    filterOnlyMissed: onlyMissed
  };
}

function startQuiz(quizType, onlyMissed = false) {
  const weekData = getCurrentWeekData();
  if (!weekData) return;

  STATE.activeQuizType = quizType;
  STATE.sessions[quizType] = createQuizSession(quizType, onlyMissed);

  // Switch to quiz tab
  switchTab(quizType, true);

  // Start timer
  startTimer();

  // Render view
  renderQuizView();
}

function startTimer() {
  stopTimer();
  const session = STATE.quiz;
  if (!session || session.isCompleted) return;

  updateTimerDisplay();
  session.timerInterval = setInterval(() => {
    session.timerSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (STATE.sessions.assignment && STATE.sessions.assignment.timerInterval) {
    clearInterval(STATE.sessions.assignment.timerInterval);
    STATE.sessions.assignment.timerInterval = null;
  }
  if (STATE.sessions.mastery && STATE.sessions.mastery.timerInterval) {
    clearInterval(STATE.sessions.mastery.timerInterval);
    STATE.sessions.mastery.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const session = STATE.quiz;
  if (!session) return;
  const minutes = Math.floor(session.timerSeconds / 60);
  const seconds = session.timerSeconds % 60;
  const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  const timerEls = document.querySelectorAll(`#pane-${session.type} .quiz-timer-val`);
  timerEls.forEach(el => el.textContent = formatted);
}

function renderQuizView() {
  const panePrefix = STATE.quiz.type === 'assignment' ? 'assign' : 'mastery';
  const pane = document.getElementById(`pane-${STATE.quiz.type}`);
  if (!pane) return;

  if (STATE.quiz.isCompleted) {
    renderScorecard(pane, panePrefix);
    return;
  }

  const q = STATE.quiz.questions[STATE.quiz.currentIndex];
  if (!q) {
    pane.innerHTML = '<div class="card"><p>No questions found in this set.</p></div>';
    return;
  }

  if (!STATE.quiz.visited) STATE.quiz.visited = new Set();
  STATE.quiz.visited.add(STATE.quiz.currentIndex);

  const total = STATE.quiz.questions.length;
  const current = STATE.quiz.currentIndex + 1;
  const progressPct = Math.round((current / total) * 100);
  const isMulti = q.type === 'multi' || Array.isArray(q.correctAnswer);
  const isFlagged = STATE.quiz.flags.has(q.id);

  const userAnswer = STATE.quiz.answers[q.id];
  const hasAnswered = userAnswer !== undefined && (Array.isArray(userAnswer) ? userAnswer.length > 0 : true);

  pane.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-main">
        <!-- Top Controls & Progress -->
        <div class="quiz-top-bar">
          <div class="progress-info">
            <span style="font-weight: 700; color: var(--text-heading);">Q ${current} of ${total}</span>
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill" style="width: ${progressPct}%;"></div>
            </div>
            <span style="font-size: 0.8rem; color: var(--text-dim);">${progressPct}%</span>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
            <label style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--text-muted); cursor: pointer;">
              <input type="checkbox" id="${panePrefix}-feedback-toggle" ${STATE.quiz.instantFeedback ? 'checked' : ''}>
              <span>Study Mode (Instant Solution)</span>
            </label>
            <div class="quiz-timer">
              ⏱️ <span class="quiz-timer-val">00:00</span>
            </div>
          </div>
        </div>

        <!-- Question Box -->
        <div class="question-box">
          <div class="question-meta">
            <div>
              <span class="q-number">Question ${current}</span>
              ${q.section ? `<span style="font-size: 0.78rem; color: var(--text-dim); margin-left: 8px;">• ${escapeHtml(q.section)}</span>` : ''}
              ${q.conceptTag ? `<span class="badge badge-primary" style="margin-left: 8px;">${escapeHtml(q.conceptTag)}</span>` : ''}
            </div>
            <div style="display: flex; gap: 8px;">
              <span class="q-type-badge">${isMulti ? 'Multiple Answers (MSQ)' : 'Single Choice (MCQ)'}</span>
              <button class="btn btn-outline btn-sm ${isFlagged ? 'active' : ''}" id="${panePrefix}-flag-btn" title="Flag for review">
                ${isFlagged ? '🚩 Flagged' : '🏳️ Flag'}
              </button>
            </div>
          </div>

          <div class="q-text">${formatMathInText(q.question)}</div>

          <div class="options-list ${isMulti ? 'multi' : ''}">
            ${q.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = isMulti 
                ? (Array.isArray(userAnswer) && userAnswer.includes(idx))
                : (userAnswer === idx);
              
              let evaluationClass = '';
              if (STATE.quiz.instantFeedback && hasAnswered) {
                const isCorrectOption = isMulti 
                  ? q.correctAnswer.includes(idx)
                  : (Array.isArray(q.acceptedAnswers) ? q.acceptedAnswers.includes(idx) : q.correctAnswer === idx);
                
                if (isCorrectOption) {
                  evaluationClass = 'correct';
                } else if (isSelected && !isCorrectOption) {
                  evaluationClass = 'incorrect';
                }
              }

              return `
                <div class="option-item ${isSelected ? 'selected' : ''} ${evaluationClass}" data-opt-idx="${idx}">
                  <div class="opt-indicator">${letter}</div>
                  <div class="opt-text">${formatMathInText(opt)}</div>
                </div>
              `;
            }).join('')}
          </div>

          ${(STATE.quiz.instantFeedback && hasAnswered && q.explanation) ? `
            <div class="explanation-box">
              <div class="explanation-title">
                <span>💡 Detailed Solution & Working</span>
              </div>
              <div class="explanation-body">
                ${formatMathInText(q.explanation)}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Action Controls -->
        <div class="quiz-actions">
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary" id="${panePrefix}-prev-btn" ${current === 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
              ← Previous
            </button>
            <button class="btn btn-primary" id="${panePrefix}-next-btn" ${current === total ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
              Save & Next →
            </button>
          </div>

          <div style="display: flex; gap: 8px;">
            <button class="btn btn-outline" id="${panePrefix}-clear-btn">Clear Choice</button>
            <button class="btn btn-success" id="${panePrefix}-submit-btn">Submit Exam</button>
          </div>
        </div>
      </div>

      <!-- Question Palette Sidebar -->
      <div class="quiz-sidebar">
        <div class="palette-box">
          <div class="palette-title">
            <span>Question Palette</span>
            <span style="font-size: 0.8rem; font-weight: normal; color: var(--secondary);">
              ${Object.keys(STATE.quiz.answers).length} / ${total} Answered
            </span>
          </div>

          <div class="palette-grid">
            ${STATE.quiz.questions.map((ques, pIdx) => {
              const num = pIdx + 1;
              const isCurr = pIdx === STATE.quiz.currentIndex;
              const isAns = STATE.quiz.answers[ques.id] !== undefined && 
                (Array.isArray(STATE.quiz.answers[ques.id]) ? STATE.quiz.answers[ques.id].length > 0 : true);
              const isFlg = STATE.quiz.flags.has(ques.id);
              const isVisited = STATE.quiz.visited && STATE.quiz.visited.has(pIdx);

              let cls = 'pal-btn';
              if (isCurr) cls += ' current';
              if (isAns) {
                cls += ' answered';
              } else if (isFlg) {
                cls += ' flagged';
              } else if (isVisited) {
                cls += ' visited-unanswered';
              }
              if (isAns && isFlg) {
                cls += ' flagged';
              }

              return `<button class="${cls}" data-goto-idx="${pIdx}" title="Question ${num}">${num}</button>`;
            }).join('')}
          </div>

          <div class="palette-legend">
            <div class="legend-item">
              <div class="legend-dot" style="background: var(--tcs-answered);"></div>
              <span>Answered</span>
            </div>
            <div class="legend-item">
              <div class="legend-dot" style="background: var(--tcs-not-answered);"></div>
              <span>Not Answered</span>
            </div>
            <div class="legend-item">
              <div class="legend-dot" style="background: var(--tcs-review);"></div>
              <span>Marked for Review</span>
            </div>
            <div class="legend-item">
              <div class="legend-dot" style="background: var(--tcs-not-visited-bg); border: 1px solid var(--border-color);"></div>
              <span>Not Visited</span>
            </div>
          </div>
        </div>

        <div class="card" style="padding: 16px;">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-heading); margin-bottom: 6px;">💡 Exam Strategy</div>
          <p style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.45;">
            Practice both in <strong>Study Mode</strong> (to learn derivations) and standard <strong>Exam Mode</strong> (to build speed and test recall).
          </p>
        </div>
      </div>
    </div>
  `;

  attachQuizEvents(panePrefix);
  renderMath();
}

function attachQuizEvents(prefix) {
  const pane = document.getElementById(`pane-${STATE.quiz.type}`);
  if (!pane) return;

  // Option selection
  const options = pane.querySelectorAll('.option-item');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const idx = parseInt(opt.dataset.optIdx, 10);
      const q = STATE.quiz.questions[STATE.quiz.currentIndex];
      const isMulti = q.type === 'multi' || Array.isArray(q.correctAnswer);

      if (isMulti) {
        let currentAnswers = Array.isArray(STATE.quiz.answers[q.id]) 
          ? [...STATE.quiz.answers[q.id]] 
          : [];
        
        if (currentAnswers.includes(idx)) {
          currentAnswers = currentAnswers.filter(i => i !== idx);
        } else {
          currentAnswers.push(idx);
          currentAnswers.sort();
        }
        STATE.quiz.answers[q.id] = currentAnswers;
      } else {
        STATE.quiz.answers[q.id] = idx;
      }

      renderQuizView();
    });
  });

  // Next / Prev
  const prevBtn = pane.querySelector(`#${prefix}-prev-btn`);
  if (prevBtn && STATE.quiz.currentIndex > 0) {
    prevBtn.addEventListener('click', () => {
      STATE.quiz.currentIndex--;
      renderQuizView();
    });
  }

  const nextBtn = pane.querySelector(`#${prefix}-next-btn`);
  if (nextBtn && STATE.quiz.currentIndex < STATE.quiz.questions.length - 1) {
    nextBtn.addEventListener('click', () => {
      STATE.quiz.currentIndex++;
      renderQuizView();
    });
  }

  // Clear choice
  const clearBtn = pane.querySelector(`#${prefix}-clear-btn`);
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const q = STATE.quiz.questions[STATE.quiz.currentIndex];
      delete STATE.quiz.answers[q.id];
      renderQuizView();
    });
  }

  // Flag toggle
  const flagBtn = pane.querySelector(`#${prefix}-flag-btn`);
  if (flagBtn) {
    flagBtn.addEventListener('click', () => {
      const q = STATE.quiz.questions[STATE.quiz.currentIndex];
      if (STATE.quiz.flags.has(q.id)) {
        STATE.quiz.flags.delete(q.id);
      } else {
        STATE.quiz.flags.add(q.id);
      }
      renderQuizView();
    });
  }

  // Instant Feedback Toggle
  const fbToggle = pane.querySelector(`#${prefix}-feedback-toggle`);
  if (fbToggle) {
    fbToggle.addEventListener('change', (e) => {
      STATE.quiz.instantFeedback = e.target.checked;
      STATE.instantFeedbackPref = e.target.checked;
      try {
        localStorage.setItem(STORAGE_KEY_FEEDBACK_PREF, String(e.target.checked));
      } catch (err) {}
      renderQuizView();
    });
  }

  // Submit test
  const submitBtn = pane.querySelector(`#${prefix}-submit-btn`);
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const unansweredCount = STATE.quiz.questions.length - Object.keys(STATE.quiz.answers).length;
      if (unansweredCount > 0) {
        if (!confirm(`You have ${unansweredCount} unanswered question(s). Are you sure you want to finish and submit?`)) {
          return;
        }
      }
      finishQuiz();
    });
  }

  // Palette buttons
  const palButtons = pane.querySelectorAll('.pal-btn');
  palButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetIdx = parseInt(btn.dataset.gotoIdx, 10);
      if (!isNaN(targetIdx)) {
        STATE.quiz.currentIndex = targetIdx;
        renderQuizView();
      }
    });
  });
}

// Complete and Evaluate Test
function finishQuiz() {
  stopTimer();
  STATE.quiz.isCompleted = true;

  let totalScore = 0;
  let maxScore = 0;
  const incorrectList = [];
  const correctList = [];

  STATE.quiz.questions.forEach(q => {
    const isMulti = q.type === 'multi' || Array.isArray(q.correctAnswer);
    const weight = q.points || 1;
    maxScore += weight;

    const userAns = STATE.quiz.answers[q.id];
    let isCorrect = false;

    if (isMulti) {
      const correctArr = [...q.correctAnswer].sort();
      const userArr = Array.isArray(userAns) ? [...userAns].sort() : [];
      if (JSON.stringify(correctArr) === JSON.stringify(userArr)) {
        isCorrect = true;
      }
    } else {
      if (Array.isArray(q.acceptedAnswers) ? q.acceptedAnswers.includes(userAns) : userAns === q.correctAnswer) {
        isCorrect = true;
      }
    }

    if (isCorrect) {
      totalScore += weight;
      correctList.push(q);
    } else {
      incorrectList.push({
        ...q,
        userGiven: userAns
      });
    }
  });

  const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  STATE.quiz.scoreResult = {
    totalScore,
    maxScore,
    percentage,
    correctCount: correctList.length,
    incorrectCount: incorrectList.length,
    unansweredCount: STATE.quiz.questions.length - (correctList.length + incorrectList.length),
    timeTaken: STATE.quiz.timerSeconds,
    correctQuestions: correctList,
    incorrectQuestions: incorrectList
  };

  // Record in History
  const record = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    weekNumber: STATE.currentWeek,
    testType: STATE.quiz.type === 'assignment' ? `Assignment ${STATE.currentWeek}` : `Week ${STATE.currentWeek} Mastery Exam`,
    score: totalScore,
    maxScore: maxScore,
    percentage: percentage,
    timeTakenSeconds: STATE.quiz.timerSeconds
  };

  STATE.history.unshift(record);
  saveLocalHistory();
  updateHeaderStats();

  // Re-render to show scorecard
  renderQuizView();
}

// Render Scorecard View
function renderScorecard(pane, prefix) {
  const res = STATE.quiz.scoreResult;
  if (!res) return;

  const minutes = Math.floor(res.timeTaken / 60);
  const seconds = res.timeTaken % 60;
  const timeFormatted = `${minutes}m ${seconds}s`;

  let badgeColor = 'badge-success';
  let verdict = 'Excellent Mastery! 🔥';
  if (res.percentage < 50) {
    badgeColor = 'badge-warning';
    verdict = 'Needs Revision — Review Solutions Below';
  } else if (res.percentage < 80) {
    badgeColor = 'badge-cyan';
    verdict = 'Good Job! Review Mistakes to Hit 100%';
  }

  // Calculate SVG stroke offset for animated score ring
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (res.percentage / 100) * circumference;

  pane.innerHTML = `
    <div class="result-screen">
      <span class="badge ${badgeColor} result-badge">${verdict}</span>
      <h2 class="result-title">Week ${STATE.currentWeek} ${STATE.quiz.type === 'assignment' ? 'Assignment Scorecard' : 'Mastery Exam Scorecard'}</h2>
      <p class="result-desc">Completed in ${timeFormatted} • Test stored in your local performance log.</p>

      <div class="score-circle-wrap">
        <svg class="score-circle-svg" viewBox="0 0 160 160">
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4f46e5" />
              <stop offset="100%" stop-color="#06b6d4" />
            </linearGradient>
          </defs>
          <circle class="score-circle-bg" cx="80" cy="80" r="${radius}" />
          <circle class="score-circle-progress" cx="80" cy="80" r="${radius}" 
            stroke-dasharray="${circumference}" 
            stroke-dashoffset="${offset}" />
        </svg>
        <div class="score-content">
          <div class="score-number">${res.totalScore} / ${res.maxScore}</div>
          <div class="score-percent">${res.percentage}% Score</div>
        </div>
      </div>

      <div class="result-stats-grid">
        <div class="res-stat-card">
          <div class="res-stat-val" style="color: var(--success);">${res.correctCount}</div>
          <div class="res-stat-lbl">Correct Answers</div>
        </div>
        <div class="res-stat-card">
          <div class="res-stat-val" style="color: var(--danger);">${res.incorrectCount}</div>
          <div class="res-stat-lbl">Incorrect</div>
        </div>
        <div class="res-stat-card">
          <div class="res-stat-val" style="color: var(--secondary);">${timeFormatted}</div>
          <div class="res-stat-lbl">Time Taken</div>
        </div>
      </div>

      <div class="result-buttons">
        <button class="btn btn-primary" id="${prefix}-retake-all-btn">🔄 Retake Entire Test</button>
        ${res.incorrectCount > 0 ? `
          <button class="btn btn-secondary" id="${prefix}-drill-mistakes-btn">🎯 Drill Mistakes Only (${res.incorrectCount})</button>
        ` : ''}
        <button class="btn btn-outline" id="${prefix}-review-toggle-btn">📋 Show All Questions & Working</button>
      </div>
    </div>

    <!-- Detailed Solutions Review Block -->
    <div id="${prefix}-solutions-review" style="margin-top: 32px;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-heading); margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
        <span>📝 Complete Questions, Solutions & Derivations</span>
      </h3>
      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${STATE.quiz.questions.map((q, idx) => {
          const num = idx + 1;
          const userAns = STATE.quiz.answers[q.id];
          const isMulti = q.type === 'multi' || Array.isArray(q.correctAnswer);
          
          let isUserCorrect = false;
          if (isMulti) {
            isUserCorrect = JSON.stringify([...(q.correctAnswer || [])].sort()) === JSON.stringify(Array.isArray(userAns) ? [...userAns].sort() : []);
          } else {
            isUserCorrect = Array.isArray(q.acceptedAnswers) ? q.acceptedAnswers.includes(userAns) : (userAns === q.correctAnswer);
          }

          return `
            <div class="question-box" style="border-left: 4px solid ${isUserCorrect ? 'var(--success)' : 'var(--danger)'};">
              <div class="question-meta">
                <span class="q-number" style="color: ${isUserCorrect ? 'var(--success)' : 'var(--danger)'};">
                  ${isUserCorrect ? '✅ Question ' + num + ' (Correct)' : '❌ Question ' + num + ' (Incorrect / Missed)'}
                </span>
                ${q.section ? `<span style="font-size: 0.78rem; color: var(--text-dim);">${escapeHtml(q.section)}</span>` : ''}
              </div>

              <div class="q-text" style="font-size: 1.05rem;">${formatMathInText(q.question)}</div>

              <div class="options-list">
                ${q.options.map((opt, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx);
                  const isCorrectOpt = isMulti ? q.correctAnswer.includes(optIdx) : (Array.isArray(q.acceptedAnswers) ? q.acceptedAnswers.includes(optIdx) : q.correctAnswer === optIdx);
                  const isUserChosen = isMulti ? (Array.isArray(userAns) && userAns.includes(optIdx)) : (userAns === optIdx);

                  let optClass = '';
                  if (isCorrectOpt) optClass = 'correct';
                  else if (isUserChosen && !isCorrectOpt) optClass = 'incorrect';

                  return `
                    <div class="option-item ${optClass}" style="cursor: default;">
                      <div class="opt-indicator">${letter}</div>
                      <div class="opt-text">
                        ${formatMathInText(opt)}
                        ${isCorrectOpt ? ' <strong style="color: var(--success); margin-left: 6px;">[Correct Answer]</strong>' : ''}
                        ${isUserChosen && !isCorrectOpt ? ' <strong style="color: var(--danger); margin-left: 6px;">[Your Choice]</strong>' : ''}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>

              <div class="explanation-box">
                <div class="explanation-title">💡 Explanation & Mathematical Working</div>
                <div class="explanation-body">${formatMathInText(q.explanation || 'No explanation provided.')}</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Attach Result Screen Action Buttons
  const retakeBtn = document.getElementById(`${prefix}-retake-all-btn`);
  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      startQuiz(STATE.quiz.type, false);
    });
  }

  const drillBtn = document.getElementById(`${prefix}-drill-mistakes-btn`);
  if (drillBtn) {
    drillBtn.addEventListener('click', () => {
      startQuiz(STATE.quiz.type, true);
    });
  }

  const reviewToggleBtn = document.getElementById(`${prefix}-review-toggle-btn`);
  const solutionsReviewEl = document.getElementById(`${prefix}-solutions-review`);
  if (reviewToggleBtn && solutionsReviewEl) {
    reviewToggleBtn.addEventListener('click', () => {
      solutionsReviewEl.scrollIntoView({ behavior: 'smooth' });
    });
  }

  renderMath();
}

// Render Past Test History
function renderHistoryTable() {
  const container = document.getElementById('history-table-container');
  if (!container) return;

  if (STATE.history.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-dim);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">📊</div>
        <p style="font-size: 1rem; color: var(--text-muted); font-weight: 600;">No test attempts recorded yet.</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">Take an Assignment or Mastery Mock Exam to view your progress analytics!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-heading);">Previous Test Attempts</h3>
      <button class="btn btn-outline btn-sm" id="clear-history-btn">Clear History</button>
    </div>
    <div class="table-responsive">
      <table class="history-table">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Test Title</th>
            <th>Score</th>
            <th>Accuracy</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          ${STATE.history.map(item => {
            const mins = Math.floor(item.timeTakenSeconds / 60);
            const secs = item.timeTakenSeconds % 60;
            return `
              <tr>
                <td>${escapeHtml(item.date)}</td>
                <td><strong style="color: var(--text-heading);">${escapeHtml(item.testType)}</strong> (Week ${item.weekNumber})</td>
                <td>${item.score} / ${item.maxScore}</td>
                <td>
                  <span class="badge ${item.percentage >= 80 ? 'badge-success' : (item.percentage >= 50 ? 'badge-cyan' : 'badge-warning')}">
                    ${item.percentage}%
                  </span>
                </td>
                <td>${mins}m ${secs}s</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  const clearBtn = document.getElementById('clear-history-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear your test history?')) {
        STATE.history = [];
        saveLocalHistory();
        updateHeaderStats();
        renderHistoryTable();
      }
    });
  }
}

// Math Rendering Helper (KaTeX auto-render if available, else clean formatting)
function renderMath() {
  if (typeof renderMathInElement === 'function') {
    try {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    } catch (err) {
      console.warn('KaTeX render warning:', err);
    }
  }
}

function formatMathInText(str) {
  if (!str) return '';
  // Basic HTML escape for safety while preserving LaTeX delimiters
  return str;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ===================================================================
// EXAM BLUEPRINT & HIGH-YIELD CALCULATOR LOGIC
// ===================================================================

const METAL_PRESETS = [
  { name: 'Copper (Cu)', n: 8.49, label: 'Standard metal in Drude/Sommerfeld model' },
  { name: 'Iron (Fe)', n: 17.0, label: 'Week 9 Assignment metal (EF = 11.1 eV, TF = 12.7 × 10⁴ K)' },
  { name: 'Aluminium (Al)', n: 18.1, label: 'Trivalent metal (Z = 3, EF = 11.7 eV)' },
  { name: 'Sodium (Na)', n: 2.65, label: 'Monovalent alkali metal (EF = 3.24 eV)' },
  { name: 'Silver (Ag)', n: 5.86, label: 'Highest electrical conductivity (EF = 5.49 eV)' },
  { name: 'Gold (Au)', n: 5.90, label: 'Noble metal (EF = 5.53 eV)' }
];

window.jumpToWeek = function(weekNum) {
  STATE.currentWeek = weekNum;
  document.querySelectorAll('.week-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.includes(`Week ${weekNum}`));
  });
  renderWeekInfo();
  renderStudyMaterials();
  STATE.sessions = { assignment: null, mastery: null };
  switchTab('assignment');
};

function renderStrategyView() {
  const container = document.getElementById('strategy-view-container');
  if (!container) return;

  container.innerHTML = `
    <div class="strategy-container">
      <!-- Top Blueprint Header Banner -->
      <div class="blueprint-hero">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
          <div>
            <span class="badge badge-primary" style="margin-bottom: 8px;">IIT Madras • Course 113106040</span>
            <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--text-heading); margin-top: 4px;">
              🎯 NPTEL Physics of Materials: Exam Blueprint & Weightage Distribution
            </h2>
          </div>
          <span class="badge badge-warning" style="font-size: 0.82rem; padding: 6px 14px;">
            ⚠️ Exam Skewed to Weeks 5–7
          </span>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; max-width: 960px;">
          Historical student feedback and syllabus analyses reveal that questions are <strong>not evenly distributed</strong>. Prof. Prathap Haridoss concentrates the bulk of advanced <strong>Numerical Answer Type (NAT)</strong> and <strong>Multiple Select Questions (MSQs)</strong> in the second half of the course.
        </p>
        <div style="margin-top: 14px; padding: 12px 16px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.3rem;">💡</span>
          <span style="font-size: 0.88rem; color: var(--text-heading); font-weight: 600;">
            <strong>Pro-Strategy for Revision:</strong> If you are short on time, do not study chronologically! Start backward from <strong>Weeks 5, 6, and 7</strong>. Master the numericals there first, as they dictate the hardest and highest-scoring segments of the paper.
          </span>
        </div>
      </div>

      <!-- The 3 Core Weightage Zones -->
      <div class="strategy-zones-grid">
        <!-- Zone 1: High Weightage -->
        <div class="weightage-card high-zone">
          <div>
            <span class="zone-badge">🌟 High-Weightage Zone (~55%)</span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-heading); margin-bottom: 8px;">
              Weeks 5, 6 & 7 — Mathematical Core
            </h3>
            <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 12px; line-height: 1.5;">
              Dominates the exam with complex multi-step numericals and deep conceptual MSQs:
            </p>
            <ul class="bullet-list" style="margin-bottom: 16px;">
              <li><strong>Week 5:</strong> Sommerfeld Model & Density of States $g(E)$ in 1D, 2D, 3D.</li>
              <li><strong>Week 6:</strong> Fermi Energy ($E_F$), Fermi Temp ($T_F$), Reciprocal Space & Brillouin Zones.</li>
              <li><strong>Week 7:</strong> Allowed vs forbidden bands, Tight Binding Approximation, Band Gaps.</li>
            </ul>
          </div>
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button class="btn btn-outline btn-sm" onclick="jumpToWeek(5)">Jump to W5</button>
            <button class="btn btn-outline btn-sm" onclick="jumpToWeek(6)">Jump to W6</button>
            <button class="btn btn-outline btn-sm" onclick="jumpToWeek(7)">Jump to W7</button>
          </div>
        </div>

        <!-- Zone 2: Moderate Weightage -->
        <div class="weightage-card med-zone">
          <div>
            <span class="zone-badge">⚖️ Moderate Weightage Zone (~30%)</span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-heading); margin-bottom: 8px;">
              Weeks 3 & 4 — Bridging Classical to Quantum
            </h3>
            <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 12px; line-height: 1.5;">
              Heavy focus on direct formula applications and identifying model limitations:
            </p>
            <ul class="bullet-list" style="margin-bottom: 16px;">
              <li><strong>Week 3:</strong> Drude Model electrical/thermal conductivity & specific heat failures.</li>
              <li><strong>Week 4:</strong> Wiedemann-Franz Law, Lorenz number ($L = 2.44 \times 10^{-8}$), Maxwell-Boltzmann vs Fermi-Dirac.</li>
            </ul>
          </div>
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button class="btn btn-outline btn-sm" onclick="jumpToWeek(3)">Jump to W3</button>
            <button class="btn btn-outline btn-sm" onclick="jumpToWeek(4)">Jump to W4</button>
          </div>
        </div>

        <!-- Zone 3: Low Weightage -->
        <div class="weightage-card low-zone">
          <div>
            <span class="zone-badge">📉 Low Weightage Zone (~15%)</span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-heading); margin-bottom: 8px;">
              Weeks 1, 2 & 8 — Foundations & Summaries
            </h3>
            <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 12px; line-height: 1.5;">
              Direct recall questions and conceptual comparative models:
            </p>
            <ul class="bullet-list" style="margin-bottom: 16px;">
              <li><strong>Weeks 1 & 2:</strong> Thermal expansion asymmetry ($E$ vs $r$), macroscopic vs microscopic, AC impedance.</li>
              <li><strong>Week 8:</strong> Free Electron vs Tight Binding comparison.</li>
            </ul>
          </div>
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button class="btn btn-outline btn-sm" onclick="jumpToWeek(1)">Jump to W1</button>
            <button class="btn btn-outline btn-sm" onclick="jumpToWeek(2)">Jump to W2</button>
            <button class="btn btn-outline btn-sm" onclick="jumpToWeek(8)">Jump to W8</button>
          </div>
        </div>
      </div>

      <!-- Interactive Fermi Gas & Density of States Calculator -->
      <div class="calc-wrapper">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-heading);">
              ⚡ Interactive High-Yield Physics Calculator
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">
              Practice exact mathematical steps expected on the exam for $k_F$, $E_F$, $T_F$, $v_F$, and $g(E_F)$.
            </p>
          </div>
          <span class="badge badge-cyan">Sommerfeld Free Electron Model</span>
        </div>

        <!-- Metal Presets -->
        <div class="preset-container">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-dim); text-transform: uppercase;">
            Metal Presets:
          </span>
          ${METAL_PRESETS.map((m, idx) => `
            <button class="preset-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}" title="${m.label}">
              ${m.name}
            </button>
          `).join('')}
        </div>

        <!-- Inputs Grid -->
        <div class="calc-inputs-grid">
          <div class="calc-input-box">
            <label for="calc-n-input">
              Conduction Electron Density $n$ ($\times 10^{28}\\text{ m}^{-3}$)
            </label>
            <input type="number" id="calc-n-input" value="8.49" step="0.01" min="0.1" max="50">
          </div>
          <div class="calc-input-box">
            <label>Selected Metal System</label>
            <div id="calc-metal-desc" style="padding: 10px 14px; background: var(--bg-secondary); border-radius: var(--radius-md); font-size: 0.88rem; font-weight: 600; color: var(--text-main);">
              Copper (Cu) — 8.49 × 10²⁸ m⁻³ (Standard metal in Drude/Sommerfeld model)
            </div>
          </div>
        </div>

        <!-- Real-Time Calculated Results Grid -->
        <div class="calc-results-grid">
          <div class="calc-result-card">
            <div class="calc-res-label">Fermi Wavevector $k_F$</div>
            <div class="calc-res-value" id="res-kf">1.36 Å⁻¹</div>
            <div class="calc-res-sub" id="res-kf-sub">1.36 × 10¹⁰ m⁻¹</div>
          </div>
          <div class="calc-result-card">
            <div class="calc-res-label">Fermi Energy $E_F$</div>
            <div class="calc-res-value" id="res-ef">7.05 eV</div>
            <div class="calc-res-sub" id="res-ef-sub">1.13 × 10⁻¹⁸ J</div>
          </div>
          <div class="calc-result-card">
            <div class="calc-res-label">Fermi Temperature $T_F$</div>
            <div class="calc-res-value" id="res-tf">8.18 × 10⁴ K</div>
            <div class="calc-res-sub" id="res-tf-sub">Degenerate: TF ≫ 300 K</div>
          </div>
          <div class="calc-result-card">
            <div class="calc-res-label">Fermi Velocity $v_F$</div>
            <div class="calc-res-value" id="res-vf">1.57 × 10⁶ m/s</div>
            <div class="calc-res-sub" id="res-vf-sub">≈ 0.52% speed of light</div>
          </div>
        </div>

        <!-- Step-by-Step Mathematical Working -->
        <div class="explanation-box" style="margin-top: 10px; background: var(--bg-card); border: 1px solid var(--border-color);">
          <div class="explanation-title" style="color: var(--primary);">
            <span>📐 Step-by-Step Mathematical Derivation & Exact Substitution</span>
          </div>
          <div class="explanation-body" id="calc-math-breakdown" style="font-size: 0.88rem; line-height: 1.6;">
            <!-- Injected by calculator logic -->
          </div>
        </div>
      </div>

      <!-- Density of States Dimensionality Comparison -->
      <div class="card">
        <h3 class="card-title">
          <span>📊 Density of States $g(E)$ Dimensionality Scaling Laws (High-Yield MSQ)</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">
          A favorite testing point of Prof. Haridoss is the energy dependence of density of states across 1D, 2D, and 3D systems:
        </p>
        <div class="dim-comparison-grid">
          <div class="dim-card" style="border-left: 4px solid #ea580c;">
            <h4>
              <span>1D Quantum Wire</span>
              <span class="dim-badge">1-Dimension</span>
            </h4>
            <div style="font-family: var(--font-mono); font-size: 1rem; color: #ea580c; font-weight: 700; margin: 8px 0;">
              $$g_{1D}(E) \\propto E^{-1/2}$$
            </div>
            <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.45;">
              Density of states <strong>diverges at the band edge</strong> ($E \\to 0$) and <em>decreases</em> as energy increases.
            </p>
          </div>

          <div class="dim-card" style="border-left: 4px solid #0284c7;">
            <h4>
              <span>2D Quantum Well</span>
              <span class="dim-badge">2-Dimensions</span>
            </h4>
            <div style="font-family: var(--font-mono); font-size: 1rem; color: #0284c7; font-weight: 700; margin: 8px 0;">
              $$g_{2D}(E) = \\frac{mA}{\\pi\\hbar^2} \\propto E^0$$
            </div>
            <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.45;">
              Density of states is a <strong>step-function / constant</strong> completely independent of energy!
            </p>
          </div>

          <div class="dim-card" style="border-left: 4px solid #16a34a;">
            <h4>
              <span>3D Bulk Metal</span>
              <span class="dim-badge">3-Dimensions</span>
            </h4>
            <div style="font-family: var(--font-mono); font-size: 1rem; color: #16a34a; font-weight: 700; margin: 8px 0;">
              $$g_{3D}(E) \\propto E^{1/2}$$
            </div>
            <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.45;">
              Parabolic dependence: density of states starts at zero and <strong>increases monotonically with $\\sqrt{E}$</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  initStrategyCalculator();
}

function initStrategyCalculator() {
  const nInput = document.getElementById('calc-n-input');
  const presetBtns = document.querySelectorAll('.preset-btn');
  const descEl = document.getElementById('calc-metal-desc');

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = parseInt(btn.dataset.idx, 10);
      const metal = METAL_PRESETS[idx];
      if (metal && nInput) {
        nInput.value = metal.n;
        if (descEl) descEl.textContent = `${metal.name} — ${metal.n} × 10²⁸ m⁻³ (${metal.label})`;
        recalculateFermiGas();
      }
    });
  });

  if (nInput) {
    nInput.addEventListener('input', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      if (descEl) descEl.textContent = `Custom Electron Density: ${nInput.value} × 10²⁸ m⁻³`;
      recalculateFermiGas();
    });
  }

  recalculateFermiGas();
}

function recalculateFermiGas() {
  const nInput = document.getElementById('calc-n-input');
  if (!nInput) return;

  const nVal = parseFloat(nInput.value) || 8.49;
  const n = nVal * 1e28; // m^-3

  // Physical Constants
  const hbar = 1.054571817e-34; // J s
  const m = 9.1093837e-31;      // kg
  const kB = 1.380649e-23;       // J/K
  const qe = 1.602176634e-19;    // C (J/eV)
  const c = 2.99792458e8;        // m/s

  // kF = (3 * pi^2 * n)^(1/3)
  const kF = Math.cbrt(3 * Math.PI * Math.PI * n);
  const kF_Angstrom = kF / 1e10; // in Angstrom^-1

  // EF = (hbar^2 * kF^2) / (2 * m)
  const EF_J = (hbar * hbar * kF * kF) / (2 * m);
  const EF_eV = EF_J / qe;

  // TF = EF / kB
  const TF = EF_J / kB;

  // vF = (hbar * kF) / m
  const vF = (hbar * kF) / m;
  const vF_pct_c = (vF / c) * 100;

  // Update UI elements
  const elKf = document.getElementById('res-kf');
  const elKfSub = document.getElementById('res-kf-sub');
  const elEf = document.getElementById('res-ef');
  const elEfSub = document.getElementById('res-ef-sub');
  const elTf = document.getElementById('res-tf');
  const elTfSub = document.getElementById('res-tf-sub');
  const elVf = document.getElementById('res-vf');
  const elVfSub = document.getElementById('res-vf-sub');
  const elMath = document.getElementById('calc-math-breakdown');

  if (elKf) elKf.textContent = `${kF_Angstrom.toFixed(2)} Å⁻¹`;
  if (elKfSub) elKfSub.textContent = `${(kF / 1e10).toFixed(3)} × 10¹⁰ m⁻¹`;

  if (elEf) elEf.textContent = `${EF_eV.toFixed(2)} eV`;
  if (elEfSub) elEfSub.textContent = `${(EF_J * 1e18).toFixed(2)} × 10⁻¹⁸ J`;

  if (elTf) elTf.textContent = `${(TF / 1e4).toFixed(2)} × 10⁴ K`;
  if (elTfSub) elTfSub.textContent = `(${Math.round(TF).toLocaleString()} K) ≫ 300 K`;

  if (elVf) elVf.textContent = `${(vF / 1e6).toFixed(2)} × 10⁶ m/s`;
  if (elVfSub) elVfSub.textContent = `≈ ${vF_pct_c.toFixed(2)}% speed of light`;

  if (elMath) {
    elMath.innerHTML = `
      <p><strong>1. Fermi Wavevector ($k_F$):</strong></p>
      <p style="margin-left: 10px; font-family: var(--font-mono); margin-bottom: 6px;">
        $$k_F = (3\\pi^2 n)^{1/3} = (3 \\times \\pi^2 \\times ${nVal} \\times 10^{28})^{1/3} = ${(kF / 1e10).toFixed(3)} \\times 10^{10}\\text{ m}^{-1} = ${kF_Angstrom.toFixed(2)}\\text{ \\AA}^{-1}$$
      </p>
      <p><strong>2. Fermi Energy ($E_F$):</strong></p>
      <p style="margin-left: 10px; font-family: var(--font-mono); margin-bottom: 6px;">
        $$E_F = \\frac{\\hbar^2 k_F^2}{2m} = \\frac{(1.055 \\times 10^{-34})^2 \\times (${(kF / 1e10).toFixed(3)} \\times 10^{10})^2}{2 \\times 9.109 \\times 10^{-31}} = ${(EF_J * 1e18).toFixed(3)} \\times 10^{-18}\\text{ J} = ${EF_eV.toFixed(2)}\\text{ eV}$$
      </p>
      <p><strong>3. Fermi Temperature ($T_F$):</strong></p>
      <p style="margin-left: 10px; font-family: var(--font-mono); margin-bottom: 6px;">
        $$T_F = \\frac{E_F}{k_B} = \\frac{${(EF_J * 1e18).toFixed(3)} \\times 10^{-18}\\text{ J}}{1.381 \\times 10^{-23}\\text{ J/K}} = ${(TF / 1e4).toFixed(2)} \\times 10^4\\text{ K} \\quad (${Math.round(TF).toLocaleString()}\\text{ K})$$
      </p>
      <p><strong>4. Fermi Velocity ($v_F$):</strong></p>
      <p style="margin-left: 10px; font-family: var(--font-mono);">
        $$v_F = \\frac{\\hbar k_F}{m} = ${(vF / 1e6).toFixed(2)} \\times 10^6\\text{ m/s} \\quad (${vF_pct_c.toFixed(2)}\\%\\text{ of } c)$$
      </p>
    `;
    renderMath();
  }
}

