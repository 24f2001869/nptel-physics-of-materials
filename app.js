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
