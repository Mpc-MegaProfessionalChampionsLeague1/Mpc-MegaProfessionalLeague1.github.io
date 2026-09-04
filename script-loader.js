// ============================================================
// script-loader.js — загрузка данных с поддержкой UTF-8
// ============================================================

console.log('🔄 Загрузка данных с поддержкой UTF-8...');

// Функция загрузки с принудительной UTF-8
async function loadJSON(url) {
    try {
        const response = await fetch(url + '?t=' + Date.now());
        if (!response.ok) {
            console.log(`⚠️ Файл ${url} не найден`);
            return null;
        }
        
        // === ПРИНУДИТЕЛЬНАЯ ОБРАБОТКА UTF-8 ===
        const text = await response.text(); // Читаем как текст
        const data = JSON.parse(text);      // Парсим как JSON
        return data;
    } catch (error) {
        console.error('❌ Ошибка загрузки:', error);
        return null;
    }
}

// Функция очистки имени (убирает пробелы и невидимые символы)
function cleanName(name) {
    if (!name) return 'Unknown';
    // Удаляем невидимые символы и лишние пробелы
    return name.trim().replace(/\s+/g, ' ').replace(/[^\w\sа-яА-ЯёЁ\-]/g, '');
}

async function loadAllData() {
    // 1. Загружаем игроков
    const players = await loadJSON('data/players.json');
    if (players && players.length > 0) {
        // Очищаем имена игроков
        players.forEach(p => {
            if (p.name) p.name = cleanName(p.name);
        });
        window.playersData = players;
        console.log(`✅ Загружено ${players.length} игроков`);
    } else {
        window.playersData = [];
        console.log('⚠️ Данные игроков не найдены');
    }

    // 2. Загружаем матчи
    const matches = await loadJSON('data/matches.json');
    if (matches && matches.length > 0) {
        window.matchData = {};
        matches.forEach(m => {
            const id = m.id || `match${Math.random()}`;
            window.matchData[id] = m;
            // Очищаем имена игроков в матчах
            if (m.teams) {
                ['win', 'loss'].forEach(side => {
                    if (m.teams[side] && m.teams[side].players) {
                        m.teams[side].players.forEach(p => {
                            if (p.name) p.name = cleanName(p.name);
                        });
                    }
                });
            }
        });
        console.log(`✅ Загружено ${matches.length} матчей`);
    } else {
        window.matchData = {};
        console.log('⚠️ Данные матчей не найдены');
    }

    // 3. Загружаем новости
    const news = await loadJSON('data/news.json');
    if (news && news.length > 0) {
        window.newsData = news;
        console.log(`✅ Загружено ${news.length} новостей`);
    } else {
        window.newsData = [];
        console.log('⚠️ Данные новостей не найдены');
    }

    // 4. Строим историю матчей для каждого игрока
    window.playerMatchHistory = {};
    if (window.playersData) {
        window.playersData.forEach(player => {
            const history = [];
            Object.keys(window.matchData).forEach(key => {
                const match = window.matchData[key];
                if (!match || !match.teams) return;
                
                ['win', 'loss'].forEach(side => {
                    const team = match.teams[side];
                    if (!team || !team.players) return;
                    const p = team.players.find(p2 => cleanName(p2.name) === cleanName(player.name));
                    if (p) {
                        history.push({
                            match: match.title || key,
                            k: p.k || 0,
                            d: p.d || 0,
                            diff: (p.k || 0) - (p.d || 0),
                            map: match.map || '',
                            id: key
                        });
                    }
                });
            });
            window.playerMatchHistory[player.name] = history;
        });
    }

    // 5. Оповещаем страницу
    document.dispatchEvent(new Event('dataLoaded'));
    console.log('✅ Все данные загружены с поддержкой UTF-8!');
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(loadAllData, 300);
});

console.log('✅ script-loader.js загружен (UTF-8 support)');
