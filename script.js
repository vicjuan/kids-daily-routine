document.addEventListener('DOMContentLoaded', () => {
    // Defines the tasks for morning and evening
    const tasks = {
        morning: [
            { id: 'm1', text: '<ruby>喝<rt>ㄏㄜ</rt></ruby><ruby>水<rt>ㄕㄨㄟ<span class="tone">ˇ</span></rt></ruby><br><ruby>吃<rt>ㄔ</rt></ruby><ruby>藥<rt>ㄧㄠ<span class="tone">ˋ</span></rt></ruby><br><ruby>喝<rt>ㄏㄜ</rt></ruby><ruby>水<rt>ㄕㄨㄟ<span class="tone">ˇ</span></rt></ruby>', icon: '💧' },
            { id: 'm2', text: '<ruby>換<rt>ㄏㄨㄢ<span class="tone">ˋ</span></rt></ruby><ruby>衣<rt>ㄧ</rt></ruby><ruby>服<rt>ㄈㄨ<span class="tone">ˊ</span></rt></ruby><br><ruby>關<rt>ㄍㄨㄢ</rt></ruby><ruby>空<rt>ㄎㄨㄥ</rt></ruby><ruby>調<rt>ㄊㄧㄠ<span class="tone">ˊ</span></rt></ruby><br><ruby>單<rt>ㄉㄢ</rt></ruby><ruby>槓<rt>ㄍㄤ<span class="tone">ˋ</span></rt></ruby>', icon: '👕' },
            { id: 'm3', text: '<ruby>早<rt>ㄗㄠ<span class="tone">ˇ</span></rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby><br><ruby>收<rt>ㄕㄡ</rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby><ruby>碗<rt>ㄨㄢ<span class="tone">ˇ</span></rt></ruby><br><ruby>收<rt>ㄕㄡ</rt></ruby><ruby>水<rt>ㄕㄨㄟ<span class="tone">ˇ</span></rt></ruby><ruby>壺<rt>ㄏㄨ<span class="tone">ˊ</span></rt></ruby>', icon: '🥞' },
            { id: 'm4', text: '<ruby>坐<rt>ㄗㄨㄛ<span class="tone">ˋ</span></rt></ruby><ruby>馬<rt>ㄇㄚ<span class="tone">ˇ</span></rt></ruby><ruby>桶<rt>ㄊㄨㄥ<span class="tone">ˇ</span></rt></ruby><br><ruby>刷<rt>ㄕㄨㄚ</rt></ruby><ruby>牙<rt>ㄧㄚ<span class="tone">ˊ</span></rt></ruby><br><ruby>洗<rt>ㄒㄧ<span class="tone">ˇ</span></rt></ruby><ruby>臉<rt>ㄌㄧㄢ<span class="tone">ˇ</span></rt></ruby>', icon: '🚽' },
            { id: 'm5', text: '<ruby>穿<rt>ㄔㄨㄢ</rt></ruby><ruby>襪<rt>ㄨㄚ<span class="tone">ˋ</span></rt></ruby><ruby>子<rt>ㄗ<span class="tone">˙</span></rt></ruby><br><ruby>穿<rt>ㄔㄨㄢ</rt></ruby><ruby>外<rt>ㄨㄞ<span class="tone">ˋ</span></rt></ruby><ruby>套<rt>ㄊㄠ<span class="tone">ˋ</span></rt></ruby><br><ruby>戴<rt>ㄉㄞ<span class="tone">ˋ</span></rt></ruby><ruby>口<rt>ㄎㄡ<span class="tone">ˇ</span></rt></ruby><ruby>罩<rt>ㄓㄠ<span class="tone">ˋ</span></rt></ruby>', icon: '🧥' },
            { id: 'm6', text: '<ruby>背<rt>ㄅㄟ</rt></ruby><ruby>書<rt>ㄕㄨ</rt></ruby><ruby>包<rt>ㄅㄠ</rt></ruby><br><ruby>到<rt>ㄉㄠ<span class="tone">ˋ</span></rt></ruby><ruby>滅<rt>ㄇㄧㄝ<span class="tone">ˋ</span></rt></ruby><ruby>火<rt>ㄏㄨㄛ<span class="tone">ˇ</span></rt></ruby><ruby>器<rt>ㄑㄧ<span class="tone">ˋ</span></rt></ruby><ruby>旁<rt>ㄆㄤ<span class="tone">ˊ</span></rt></ruby><ruby>穿<rt>ㄔㄨㄢ</rt></ruby><ruby>鞋<rt>ㄒㄧㄝ<span class="tone">ˊ</span></rt></ruby>', icon: '👟' }
        ],
        evening: [
            { id: 'e1', text: '<ruby>喝<rt>ㄏㄜ</rt></ruby><ruby>水<rt>ㄕㄨㄟ<span class="tone">ˇ</span></rt></ruby><br><ruby>吃<rt>ㄔ</rt></ruby><ruby>藥<rt>ㄧㄠ<span class="tone">ˋ</span></rt></ruby><br><ruby>喝<rt>ㄏㄜ</rt></ruby><ruby>水<rt>ㄕㄨㄟ<span class="tone">ˇ</span></rt></ruby><br><ruby>整<rt>ㄓㄥ<span class="tone">ˇ</span></rt></ruby><ruby>理<rt>ㄌㄧ<span class="tone">ˇ</span></rt></ruby><ruby>書<rt>ㄕㄨ</rt></ruby><ruby>包<rt>ㄅㄠ</rt></ruby>', icon: '🎒' },
            { id: 'e2', text: '<ruby>坐<rt>ㄗㄨㄛ<span class="tone">ˋ</span></rt></ruby><ruby>馬<rt>ㄇㄚ<span class="tone">ˇ</span></rt></ruby><ruby>桶<rt>ㄊㄨㄥ<span class="tone">ˇ</span></rt></ruby><br><ruby>刷<rt>ㄕㄨㄚ</rt></ruby><ruby>牙<rt>ㄧㄚ<span class="tone">ˊ</span></rt></ruby>', icon: '🪥' },
            { id: 'e3', text: '<ruby>拿<rt>ㄋㄚ<span class="tone">ˊ</span></rt></ruby><ruby>乾<rt>ㄍㄢ</rt></ruby><ruby>淨<rt>ㄐㄧㄥ<span class="tone">ˋ</span></rt></ruby><ruby>衣<rt>ㄧ</rt></ruby><ruby>服<rt>ㄈㄨ<span class="tone">ˊ</span></rt></ruby><br><ruby>放<rt>ㄈㄤ<span class="tone">ˋ</span></rt></ruby><ruby>髒<rt>ㄗㄤ</rt></ruby><ruby>衣<rt>ㄧ</rt></ruby><ruby>進<rt>ㄐㄧㄣ<span class="tone">ˋ</span></rt></ruby><ruby>洗<rt>ㄒㄧ<span class="tone">ˇ</span></rt></ruby><ruby>衣<rt>ㄧ</rt></ruby><ruby>籃<rt>ㄌㄢ<span class="tone">ˊ</span></rt></ruby>', icon: '🧺' },
            { id: 'e4', text: '<ruby>用<rt>ㄩㄥ<span class="tone">ˋ</span></rt></ruby><ruby>力<rt>ㄌㄧ<span class="tone">ˋ</span></rt></ruby><ruby>擦<rt>ㄘㄚ</rt></ruby><ruby>乾<rt>ㄍㄢ</rt></ruby><ruby>身<rt>ㄕㄣ</rt></ruby><ruby>體<rt>ㄊㄧ<span class="tone">ˇ</span></rt></ruby><br><ruby>吹<rt>ㄔㄨㄟ</rt></ruby><ruby>頭<rt>ㄊㄡ<span class="tone">ˊ</span></rt></ruby><ruby>髮<rt>ㄈㄚ<span class="tone">ˇ</span></rt></ruby><br><ruby>穿<rt>ㄔㄨㄢ</rt></ruby><ruby>衣<rt>ㄧ</rt></ruby><ruby>服<rt>ㄈㄨ<span class="tone">ˊ</span></rt></ruby>', icon: '🛁' },
            { id: 'e5', text: '<ruby>算<rt>ㄙㄨㄢ<span class="tone">ˋ</span></rt></ruby><ruby>金<rt>ㄐㄧㄣ</rt></ruby><ruby>幣<rt>ㄅㄧ<span class="tone">ˋ</span></rt></ruby><br><ruby>檢<rt>ㄐㄧㄢ<span class="tone">ˇ</span></rt></ruby><ruby>查<rt>ㄔㄚ<span class="tone">ˊ</span></rt></ruby><ruby>指<rt>ㄓ<span class="tone">ˇ</span></rt></ruby><ruby>甲<rt>ㄐㄧㄚ<span class="tone">ˇ</span></rt></ruby><br><ruby>用<rt>ㄩㄥ<span class="tone">ˋ</span></rt></ruby><ruby>牙<rt>ㄧㄚ<span class="tone">ˊ</span></rt></ruby><ruby>線<rt>ㄒㄧㄢ<span class="tone">ˋ</span></rt></ruby>', icon: '🪙' },
            { id: 'e6', text: '<ruby>關<rt>ㄍㄨㄢ</rt></ruby><ruby>大<rt>ㄉㄚ<span class="tone">ˋ</span></rt></ruby><ruby>燈<rt>ㄉㄥ</rt></ruby><br><ruby>按<rt>ㄢ<span class="tone">ˋ</span></rt></ruby><ruby>摩<rt>ㄇㄛ<span class="tone">ˊ</span></rt></ruby><ruby>吹<rt>ㄔㄨㄟ</rt></ruby><ruby>熄<rt>ㄒㄧ<span class="tone">ˊ</span></rt></ruby><ruby>蠟<rt>ㄌㄚ<span class="tone">ˋ</span></rt></ruby><ruby>燭<rt>ㄓㄨ<span class="tone">ˊ</span></rt></ruby>', icon: '🕯️' }
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
