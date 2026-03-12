document.addEventListener('DOMContentLoaded', () => {
    // Defines the tasks for morning and evening
    const tasks = {
        morning: [
            { id: 'm1', text: '起床刷牙', icon: '🪥' },
            { id: 'm2', text: '洗洗臉', icon: '🧼' },
            { id: 'm3', text: '換衣服', icon: '👕' },
            { id: 'm4', text: '吃早餐', icon: '🥞' },
            { id: 'm5', text: '整理書包', icon: '🎒' },
            { id: 'm6', text: '穿鞋子出門', icon: '👟' }
        ],
        evening: [
            { id: 'e1', text: '吃晚餐', icon: '🍲' },
            { id: 'e2', text: '洗澡香香', icon: '🛁' },
            { id: 'e3', text: '睡前刷牙', icon: '🪥' },
            { id: 'e4', text: '整理書包', icon: '🎒' },
            { id: 'e5', text: '準備明天的衣服', icon: '👚' },
            { id: 'e6', text: '聽故事 / 閱讀', icon: '📖' },
            { id: 'e7', text: '上床睡覺', icon: '🛌' }
        ]
    };

    // UI Elements
    const tabBtns = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.routine-section');
    const resetBtns = document.querySelectorAll('.reset-btn');

    // LocalStorage Initialization
    let activeTab = localStorage.getItem('activeTab') || 'morning-routine';
    let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || {};

    // Restore Tab State
    activateTab(activeTab);

    // Initialize application
    init();

    // Event Listeners for Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            activateTab(target);
            localStorage.setItem('activeTab', target);
        });
    });

    // Event Listeners for Reset buttons
    resetBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = e.target.getAttribute('data-type');
            if(confirm(`確定要重新開始 ${type === 'morning' ? '早上' : '睡前'} 的任務嗎？`)) {
                resetRoutine(type);
            }
        });
    });

    function init() {
        renderTasks('morning', 'morning-list');
        renderTasks('evening', 'evening-list');
        updateProgress('morning');
        updateProgress('evening');
    }

    function activateTab(targetId) {
        tabBtns.forEach(btn => btn.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));

        const targetBtn = document.querySelector(`.tab-btn[data-target="${targetId}"]`);
        const targetSec = document.getElementById(targetId);

        if (targetBtn) targetBtn.classList.add('active');
        if (targetSec) targetSec.classList.add('active');

        // Change background based on time of day
        if (targetId === 'evening-routine') {
            document.body.classList.add('evening-mode');
        } else {
            document.body.classList.remove('evening-mode');
        }
    }

    function renderTasks(type, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // clear

        tasks[type].forEach(task => {
            const isCompleted = completedTasks[task.id] === true;

            const li = document.createElement('li');
            li.className = `task-item ${isCompleted ? 'completed' : ''}`;
            li.setAttribute('data-id', task.id);
            li.setAttribute('data-type', type);

            li.innerHTML = `
                <div class="task-checkbox"></div>
                <div class="task-icon">${task.icon}</div>
                <div class="task-content">
                    <div class="task-title">${task.text}</div>
                </div>
            `;

            li.addEventListener('click', () => toggleTask(task.id, type, li));
            container.appendChild(li);
        });
    }

    function toggleTask(taskId, type, element) {
        const isCompleted = !element.classList.contains('completed');
        
        if (isCompleted) {
            element.classList.add('completed');
            completedTasks[taskId] = true;
            
            // Pop sound simulation or small effect could go here
        } else {
            element.classList.remove('completed');
            delete completedTasks[taskId];
        }

        saveState();
        updateProgress(type);
    }

    function updateProgress(type) {
        const total = tasks[type].length;
        const currentTasks = tasks[type].map(t => t.id);
        const completedCount = currentTasks.filter(id => completedTasks[id]).length;

        const percentage = (completedCount / total) * 100;
        
        const progressBar = document.getElementById(`${type}-progress`);
        const progressText = document.getElementById(`${type}-text`);

        if (progressBar && progressText) {
            progressBar.style.width = `${percentage}%`;
            progressText.innerText = `${completedCount}/${total}`;
        }

        // Check if all complete
        if (completedCount === total && total > 0) {
            fireConfetti();
        }
    }

    function resetRoutine(type) {
        const currentTasks = tasks[type].map(t => t.id);
        currentTasks.forEach(id => {
            delete completedTasks[id];
        });
        
        saveState();
        renderTasks(type, `${type}-list`);
        updateProgress(type);
    }

    function saveState() {
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    }

    function fireConfetti() {
        // Only fire if confetti is loaded
        if (typeof confetti === 'function') {
            const duration = 3000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

            function randomInRange(min, max) {
              return Math.random() * (max - min) + min;
            }

            const interval = setInterval(function() {
              const timeLeft = animationEnd - Date.now();

              if (timeLeft <= 0) {
                return clearInterval(interval);
              }

              const particleCount = 50 * (timeLeft / duration);
              confetti(Object.assign({}, defaults, { particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
              }));
              confetti(Object.assign({}, defaults, { particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
              }));
            }, 250);
        }
    }
});
