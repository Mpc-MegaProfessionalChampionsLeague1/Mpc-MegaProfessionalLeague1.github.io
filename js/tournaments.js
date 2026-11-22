<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>MPL - Турниры</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <header class="header">
        <div class="logo">
            <h1>MPL <small>tournaments</small></h1>
        </div>
        <div class="header-right">
            <span class="status">LIVE</span>
            <button class="theme-toggle" onclick="toggleTheme()" id="themeBtn">🌙</button>
        </div>
    </header>

    <!-- Сюда вставляется меню через nav.js -->
    <div id="nav-placeholder"></div>

    <h1 class="page-title" style="margin-top: 20px;">Календарь турниров</h1>
    
    <!-- Переключатель года -->
    <div class="tabs-container" style="margin-bottom: 20px; max-width: 300px;">
        <button class="tab-btn active" id="btn-2026" onclick="switchYear(2026)">2026</button>
        <button class="tab-btn" id="btn-2027" onclick="switchYear(2027)">2027</button>
    </div>

    <div id="calendar-content">
        <!-- Сюда рендерится календарь -->
    </div>
</div>

<script src="js/tournaments.js"></script>
<script>
    let currentYear = 2026;

    function switchYear(year) {
        currentYear = year;
        // Обновляем кнопки
        document.getElementById('btn-2026').classList.remove('active');
        document.getElementById('btn-2027').classList.remove('active');
        document.getElementById('btn-' + year).classList.add('active');
        
        renderCalendar();
    }

    function renderCalendar() {
        const container = document.getElementById('calendar-content');
        const yearTournaments = tournamentsData.filter(t => t.year === currentYear);
        
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        
        let html = '<div class="grid-3">';
        
        months.forEach((month, index) => {
            const monthTournaments = yearTournaments.filter(t => t.month === index + 1);
            
            html += `<div class="glass-card" style="min-height: 150px;">
                <div class="panel-title" style="margin-bottom: 10px;">${month} <span>${currentYear}</span></div>`;
            
            if (monthTournaments.length === 0) {
                html += `<div style="color: var(--dim); font-family: var(--mono); font-size: 11px; padding: 10px 0;">— НЕТ ТУРНИРОВ —</div>`;
            } else {
                monthTournaments.forEach(t => {
                    const statusClass = t.status === 'upcoming' ? 'success' : (t.status === 'live' ? 'danger' : 'muted');
                    html += `
                        <div class="match-card" style="margin-bottom: 10px;" onclick="location.href='tournament.html?id=${t.id}'">
                            <div class="match-top">
                                <span class="title">${t.name}</span>
                                <span class="date" style="color: var(--${statusClass})">${t.status.toUpperCase()}</span>
                            </div>
                            <div class="match-teams" style="margin-top: 5px;">
                                <span style="font-size: 11px; color: var(--muted);">${t.dates}</span>
                            </div>
                        </div>
                    `;
                });
            }
            html += `</div>`;
        });
        
        html += '</div>';
        container.innerHTML = html;
    }

    // Функция для темы (синхронизирована с другими страницами)
    function toggleTheme() { 
        document.body.classList.toggle('light'); 
        document.getElementById('themeBtn').textContent = document.body.classList.contains('light') ? '☀️' : '🌙'; 
    }

    // Инициализация при загрузке
    renderCalendar();
</script>

<!-- Подключение универсального меню -->
<script src="js/nav.js"></script>
</body>
</html>
