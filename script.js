document.addEventListener('DOMContentLoaded', () => {
    // Defines the tasks for morning and evening
    const tasks = {
        morning: [
            { id: 'm1', text: '<ruby>喝<rt><span class="zhuyin"><span class="chars">ㄏㄜ</span></span></rt></ruby><ruby>水<rt><span class="zhuyin"><span class="chars">ㄕㄨㄟ</span><span class="tone">ˇ</span></span></rt></ruby><br><ruby>吃<rt><span class="zhuyin"><span class="chars">ㄔ</span></span></rt></ruby><ruby>藥<rt><span class="zhuyin"><span class="chars">ㄧㄠ</span><span class="tone">ˋ</span></span></rt></ruby><br><ruby>喝<rt><span class="zhuyin"><span class="chars">ㄏㄜ</span></span></rt></ruby><ruby>水<rt><span class="zhuyin"><span class="chars">ㄕㄨㄟ</span><span class="tone">ˇ</span></span></rt></ruby>', icon: '💧' },
            { id: 'm2', text: '<ruby>換<rt><span class="zhuyin"><span class="chars">ㄏㄨㄢ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>衣<rt><span class="zhuyin"><span class="chars">ㄧ</span></span></rt></ruby><ruby>服<rt><span class="zhuyin"><span class="chars">ㄈㄨ</span><span class="tone">ˊ</span></span></rt></ruby><br><ruby>關<rt><span class="zhuyin"><span class="chars">ㄍㄨㄢ</span></span></rt></ruby><ruby>空<rt><span class="zhuyin"><span class="chars">ㄎㄨㄥ</span></span></rt></ruby><ruby>調<rt><span class="zhuyin"><span class="chars">ㄊㄧㄠ</span><span class="tone">ˊ</span></span></rt></ruby><br><ruby>單<rt><span class="zhuyin"><span class="chars">ㄉㄢ</span></span></rt></ruby><ruby>槓<rt><span class="zhuyin"><span class="chars">ㄍㄤ</span><span class="tone">ˋ</span></span></rt></ruby>', icon: '👕' },
            { id: 'm3', text: '<ruby>早<rt><span class="zhuyin"><span class="chars">ㄗㄠ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>餐<rt><span class="zhuyin"><span class="chars">ㄘㄢ</span></span></rt></ruby><br><ruby>收<rt><span class="zhuyin"><span class="chars">ㄕㄡ</span></span></rt></ruby><ruby>餐<rt><span class="zhuyin"><span class="chars">ㄘㄢ</span></span></rt></ruby><ruby>碗<rt><span class="zhuyin"><span class="chars">ㄨㄢ</span><span class="tone">ˇ</span></span></rt></ruby><br><ruby>收<rt><span class="zhuyin"><span class="chars">ㄕㄡ</span></span></rt></ruby><ruby>水<rt><span class="zhuyin"><span class="chars">ㄕㄨㄟ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>壺<rt><span class="zhuyin"><span class="chars">ㄏㄨ</span><span class="tone">ˊ</span></span></rt></ruby>', icon: '🥞' },
            { id: 'm4', text: '<ruby>坐<rt><span class="zhuyin"><span class="chars">ㄗㄨㄛ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>馬<rt><span class="zhuyin"><span class="chars">ㄇㄚ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>桶<rt><span class="zhuyin"><span class="chars">ㄊㄨㄥ</span><span class="tone">ˇ</span></span></rt></ruby><br><ruby>刷<rt><span class="zhuyin"><span class="chars">ㄕㄨㄚ</span></span></rt></ruby><ruby>牙<rt><span class="zhuyin"><span class="chars">ㄧㄚ</span><span class="tone">ˊ</span></span></rt></ruby><br><ruby>洗<rt><span class="zhuyin"><span class="chars">ㄒㄧ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>臉<rt><span class="zhuyin"><span class="chars">ㄌㄧㄢ</span><span class="tone">ˇ</span></span></rt></ruby>', icon: '🚽' },
            { id: 'm5', text: '<ruby>穿<rt><span class="zhuyin"><span class="chars">ㄔㄨㄢ</span></span></rt></ruby><ruby>襪<rt><span class="zhuyin"><span class="chars">ㄨㄚ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>子<rt><span class="zhuyin"><span class="chars">ㄗ</span><span class="tone">˙</span></span></rt></ruby><br><ruby>穿<rt><span class="zhuyin"><span class="chars">ㄔㄨㄢ</span></span></rt></ruby><ruby>外<rt><span class="zhuyin"><span class="chars">ㄨㄞ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>套<rt><span class="zhuyin"><span class="chars">ㄊㄠ</span><span class="tone">ˋ</span></span></rt></ruby><br><ruby>戴<rt><span class="zhuyin"><span class="chars">ㄉㄞ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>口<rt><span class="zhuyin"><span class="chars">ㄎㄡ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>罩<rt><span class="zhuyin"><span class="chars">ㄓㄠ</span><span class="tone">ˋ</span></span></rt></ruby>', icon: '🧥' },
            { id: 'm6', text: '<ruby>背<rt><span class="zhuyin"><span class="chars">ㄅㄟ</span></span></rt></ruby><ruby>書<rt><span class="zhuyin"><span class="chars">ㄕㄨ</span></span></rt></ruby><ruby>包<rt><span class="zhuyin"><span class="chars">ㄅㄠ</span></span></rt></ruby><br><ruby>到<rt><span class="zhuyin"><span class="chars">ㄉㄠ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>滅<rt><span class="zhuyin"><span class="chars">ㄇㄧㄝ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>火<rt><span class="zhuyin"><span class="chars">ㄏㄨㄛ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>器<rt><span class="zhuyin"><span class="chars">ㄑㄧ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>旁<rt><span class="zhuyin"><span class="chars">ㄆㄤ</span><span class="tone">ˊ</span></span></rt></ruby><ruby>穿<rt><span class="zhuyin"><span class="chars">ㄔㄨㄢ</span></span></rt></ruby><ruby>鞋<rt><span class="zhuyin"><span class="chars">ㄒㄧㄝ</span><span class="tone">ˊ</span></span></rt></ruby>', icon: '👟' }
        ],
        evening: [
            { id: 'e1', text: '<ruby>喝<rt><span class="zhuyin"><span class="chars">ㄏㄜ</span></span></rt></ruby><ruby>水<rt><span class="zhuyin"><span class="chars">ㄕㄨㄟ</span><span class="tone">ˇ</span></span></rt></ruby><br><ruby>吃<rt><span class="zhuyin"><span class="chars">ㄔ</span></span></rt></ruby><ruby>藥<rt><span class="zhuyin"><span class="chars">ㄧㄠ</span><span class="tone">ˋ</span></span></rt></ruby><br><ruby>喝<rt><span class="zhuyin"><span class="chars">ㄏㄜ</span></span></rt></ruby><ruby>水<rt><span class="zhuyin"><span class="chars">ㄕㄨㄟ</span><span class="tone">ˇ</span></span></rt></ruby><br><ruby>整<rt><span class="zhuyin"><span class="chars">ㄓㄥ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>理<rt><span class="zhuyin"><span class="chars">ㄌㄧ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>書<rt><span class="zhuyin"><span class="chars">ㄕㄨ</span></span></rt></ruby><ruby>包<rt><span class="zhuyin"><span class="chars">ㄅㄠ</span></span></rt></ruby>', icon: '🎒' },
            { id: 'e2', text: '<ruby>坐<rt><span class="zhuyin"><span class="chars">ㄗㄨㄛ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>馬<rt><span class="zhuyin"><span class="chars">ㄇㄚ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>桶<rt><span class="zhuyin"><span class="chars">ㄊㄨㄥ</span><span class="tone">ˇ</span></span></rt></ruby><br><ruby>刷<rt><span class="zhuyin"><span class="chars">ㄕㄨㄚ</span></span></rt></ruby><ruby>牙<rt><span class="zhuyin"><span class="chars">ㄧㄚ</span><span class="tone">ˊ</span></span></rt></ruby>', icon: '🪥' },
            { id: 'e3', text: '<ruby>拿<rt><span class="zhuyin"><span class="chars">ㄋㄚ</span><span class="tone">ˊ</span></span></rt></ruby><ruby>乾<rt><span class="zhuyin"><span class="chars">ㄍㄢ</span></span></rt></ruby><ruby>淨<rt><span class="zhuyin"><span class="chars">ㄐㄧㄥ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>衣<rt><span class="zhuyin"><span class="chars">ㄧ</span></span></rt></ruby><ruby>服<rt><span class="zhuyin"><span class="chars">ㄈㄨ</span><span class="tone">ˊ</span></span></rt></ruby><br><ruby>放<rt><span class="zhuyin"><span class="chars">ㄈㄤ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>髒<rt><span class="zhuyin"><span class="chars">ㄗㄤ</span></span></rt></ruby><ruby>衣<rt><span class="zhuyin"><span class="chars">ㄧ</span></span></rt></ruby><ruby>進<rt><span class="zhuyin"><span class="chars">ㄐㄧㄣ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>洗<rt><span class="zhuyin"><span class="chars">ㄒㄧ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>衣<rt><span class="zhuyin"><span class="chars">ㄧ</span></span></rt></ruby><ruby>籃<rt><span class="zhuyin"><span class="chars">ㄌㄢ</span><span class="tone">ˊ</span></span></rt></ruby>', icon: '🧺' },
            { id: 'e4', text: '<ruby>用<rt><span class="zhuyin"><span class="chars">ㄩㄥ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>力<rt><span class="zhuyin"><span class="chars">ㄌㄧ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>擦<rt><span class="zhuyin"><span class="chars">ㄘㄚ</span></span></rt></ruby><ruby>乾<rt><span class="zhuyin"><span class="chars">ㄍㄢ</span></span></rt></ruby><ruby>身<rt><span class="zhuyin"><span class="chars">ㄕㄣ</span></span></rt></ruby><ruby>體<rt><span class="zhuyin"><span class="chars">ㄊㄧ</span><span class="tone">ˇ</span></span></rt></ruby><br><ruby>吹<rt><span class="zhuyin"><span class="chars">ㄔㄨㄟ</span></span></rt></ruby><ruby>頭<rt><span class="zhuyin"><span class="chars">ㄊㄡ</span><span class="tone">ˊ</span></span></rt></ruby><ruby>髮<rt><span class="zhuyin"><span class="chars">ㄈㄚ</span><span class="tone">ˇ</span></span></rt></ruby><br><ruby>穿<rt><span class="zhuyin"><span class="chars">ㄔㄨㄢ</span></span></rt></ruby><ruby>衣<rt><span class="zhuyin"><span class="chars">ㄧ</span></span></rt></ruby><ruby>服<rt><span class="zhuyin"><span class="chars">ㄈㄨ</span><span class="tone">ˊ</span></span></rt></ruby>', icon: '🛁' },
            { id: 'e5', text: '<ruby>算<rt><span class="zhuyin"><span class="chars">ㄙㄨㄢ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>金<rt><span class="zhuyin"><span class="chars">ㄐㄧㄣ</span></span></rt></ruby><ruby>幣<rt><span class="zhuyin"><span class="chars">ㄅㄧ</span><span class="tone">ˋ</span></span></rt></ruby><br><ruby>檢<rt><span class="zhuyin"><span class="chars">ㄐㄧㄢ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>查<rt><span class="zhuyin"><span class="chars">ㄔㄚ</span><span class="tone">ˊ</span></span></rt></ruby><ruby>指<rt><span class="zhuyin"><span class="chars">ㄓ</span><span class="tone">ˇ</span></span></rt></ruby><ruby>甲<rt><span class="zhuyin"><span class="chars">ㄐㄧㄚ</span><span class="tone">ˇ</span></span></rt></ruby><br><ruby>用<rt><span class="zhuyin"><span class="chars">ㄩㄥ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>牙<rt><span class="zhuyin"><span class="chars">ㄧㄚ</span><span class="tone">ˊ</span></span></rt></ruby><ruby>線<rt><span class="zhuyin"><span class="chars">ㄒㄧㄢ</span><span class="tone">ˋ</span></span></rt></ruby>', icon: '🪙' },
            { id: 'e6', text: '<ruby>關<rt><span class="zhuyin"><span class="chars">ㄍㄨㄢ</span></span></rt></ruby><ruby>大<rt><span class="zhuyin"><span class="chars">ㄉㄚ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>燈<rt><span class="zhuyin"><span class="chars">ㄉㄥ</span></span></rt></ruby><br><ruby>按<rt><span class="zhuyin"><span class="chars">ㄢ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>摩<rt><span class="zhuyin"><span class="chars">ㄇㄛ</span><span class="tone">ˊ</span></span></rt></ruby><ruby>吹<rt><span class="zhuyin"><span class="chars">ㄔㄨㄟ</span></span></rt></ruby><ruby>熄<rt><span class="zhuyin"><span class="chars">ㄒㄧ</span><span class="tone">ˊ</span></span></rt></ruby><ruby>蠟<rt><span class="zhuyin"><span class="chars">ㄌㄚ</span><span class="tone">ˋ</span></span></rt></ruby><ruby>燭<rt><span class="zhuyin"><span class="chars">ㄓㄨ</span><span class="tone">ˊ</span></span></rt></ruby>', icon: '🕯️' }
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
