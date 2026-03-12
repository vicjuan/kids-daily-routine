document.addEventListener('DOMContentLoaded', () => {
    // Defines the tasks for morning and evening
    const tasks = {
        morning: [
            { id: 'm1', text: '<ruby>起<rt>ㄑㄧ<span class="tone">ˇ</span></rt></ruby><ruby>床<rt>ㄔㄨㄤ<span class="tone">ˊ</span></rt></ruby><ruby>刷<rt>ㄕㄨㄚ</rt></ruby><ruby>牙<rt>ㄧㄚ<span class="tone">ˊ</span></rt></ruby>', icon: '🪥' },
            { id: 'm2', text: '<ruby>洗<rt>ㄒㄧ<span class="tone">ˇ</span></rt></ruby><ruby>洗<rt>ㄒㄧ<span class="tone">ˇ</span></rt></ruby><ruby>臉<rt>ㄌㄧㄢ<span class="tone">ˇ</span></rt></ruby>', icon: '🧼' },
            { id: 'm3', text: '<ruby>換<rt>ㄏㄨㄢ<span class="tone">ˋ</span></rt></ruby><ruby>衣<rt>ㄧ</rt></ruby><ruby>服<rt>ㄈㄨ<span class="tone">ˊ</span></rt></ruby>', icon: '👕' },
            { id: 'm4', text: '<ruby>吃<rt>ㄔ</rt></ruby><ruby>早<rt>ㄗㄠ<span class="tone">ˇ</span></rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby>', icon: '🥞' },
            { id: 'm5', text: '<ruby>整<rt>ㄓㄥ<span class="tone">ˇ</span></rt></ruby><ruby>理<rt>ㄌㄧ<span class="tone">ˇ</span></rt></ruby><ruby>書<rt>ㄕㄨ</rt></ruby><ruby>包<rt>ㄅㄠ</rt></ruby>', icon: '🎒' },
            { id: 'm6', text: '<ruby>穿<rt>ㄔㄨㄢ</rt></ruby><ruby>鞋<rt>ㄒㄧㄝ<span class="tone">ˊ</span></rt></ruby><ruby>子<rt>ㄗ<span class="tone">˙</span></rt></ruby><ruby>出<rt>ㄔㄨ</rt></ruby><ruby>門<rt>ㄇㄣ<span class="tone">ˊ</span></rt></ruby>', icon: '👟' }
        ],
        evening: [
            { id: 'e1', text: '<ruby>吃<rt>ㄔ</rt></ruby><ruby>晚<rt>ㄨㄢ<span class="tone">ˇ</span></rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby>', icon: '🍲' },
            { id: 'e2', text: '<ruby>洗<rt>ㄒㄧ<span class="tone">ˇ</span></rt></ruby><ruby>澡<rt>ㄗㄠ<span class="tone">ˇ</span></rt></ruby><ruby>香<rt>ㄒㄧㄤ</rt></ruby><ruby>香<rt>ㄒㄧㄤ</rt></ruby>', icon: '🛁' },
            { id: 'e3', text: '<ruby>睡<rt>ㄕㄨㄟ<span class="tone">ˋ</span></rt></ruby><ruby>前<rt>ㄑㄧㄢ<span class="tone">ˊ</span></rt></ruby><ruby>刷<rt>ㄕㄨㄚ</rt></ruby><ruby>牙<rt>ㄧㄚ<span class="tone">ˊ</span></rt></ruby>', icon: '🪥' },
            { id: 'e4', text: '<ruby>整<rt>ㄓㄥ<span class="tone">ˇ</span></rt></ruby><ruby>理<rt>ㄌㄧ<span class="tone">ˇ</span></rt></ruby><ruby>書<rt>ㄕㄨ</rt></ruby><ruby>包<rt>ㄅㄠ</rt></ruby>', icon: '🎒' },
            { id: 'e5', text: '<ruby>準<rt>ㄓㄨㄣ<span class="tone">ˇ</span></rt></ruby><ruby>備<rt>ㄅㄟ<span class="tone">ˋ</span></rt></ruby><ruby>明<rt>ㄇㄧㄥ<span class="tone">ˊ</span></rt></ruby><ruby>天<rt>ㄊㄧㄢ</rt></ruby><ruby>的<rt>ㄉㄜ<span class="tone">˙</span></rt></ruby><ruby>衣<rt>ㄧ</rt></ruby><ruby>服<rt>ㄈㄨ<span class="tone">ˊ</span></rt></ruby>', icon: '👚' },
            { id: 'e6', text: '<ruby>聽<rt>ㄊㄧㄥ</rt></ruby><ruby>故<rt>ㄍㄨ<span class="tone">ˋ</span></rt></ruby><ruby>事<rt>ㄕ<span class="tone">ˋ</span></rt></ruby> / <ruby>閱<rt>ㄩㄝ<span class="tone">ˋ</span></rt></ruby><ruby>讀<rt>ㄉㄨ<span class="tone">ˊ</span></rt></ruby>', icon: '📖' },
            { id: 'e7', text: '<ruby>上<rt>ㄕㄤ<span class="tone">ˋ</span></rt></ruby><ruby>床<rt>ㄔㄨㄤ<span class="tone">ˊ</span></rt></ruby><ruby>睡<rt>ㄕㄨㄟ<span class="tone">ˋ</span></rt></ruby><ruby>覺<rt>ㄐㄧㄠ<span class="tone">ˋ</span></rt></ruby>', icon: '🛌' }
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
