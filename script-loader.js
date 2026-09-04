// ============================================================
// script-loader.js — загрузка данных из JSON-файлов
// ============================================================

console.log('🔄 Загрузка данных из JSON-файлов...');

// ============================================================
// ЗАГРУЗКА JSON
// ============================================================
async function loadJSON(url) {
    try {
        const response = await fetch(url + '?t=' + Date.now());
        if (!response.ok) {
            console.log(`⚠️ Файл ${url} не найден (${response.status})`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        return null;
    }
}

// ============================================================
// ЗАГРУЗКА ВСЕХ ДАННЫХ
// ============================================================
async function loadAllData() {
    // 1. Загружаем игроков из players.json
    const players = await loadJSON('data/players.json');
    if (players && players.length > 0) {
        window.playersData = players;
        console.log(`✅ Загружено ${players.length} игроков из players.json`);
    } else {
        window.playersData = [];
        console.log('⚠️ Данные игроков не найдены');
    }

    // 2. Загружаем матчи из matches.json
    const matches = await loadJSON('data/matches.json');
    if (matches && matches.length > 0) {
        window.matchData = {};
        matches.forEach(m => {
            const id = m.id || `match${Math.random()}`;
            window.matchData[id] = m;
        });
        console.log(`✅ Загружено ${matches.length} матчей из matches.json`);
    } else {
        window.matchData = {};
        console.log('⚠️ Данные матчей не найдены');
    }

    // 3. Загружаем новости из news.json
    const news = await loadJSON('data/news.json');
    if (news && news.length > 0) {
        window.newsData = news;
        console.log(`✅ Загружено ${news.length} новостей из news.json`);
    } else {
        window.newsData = [];
        console.log('⚠️ Данные новостей не найдены');
    }

    // 4. Оповещаем страницу
    document.dispatchEvent(new Event('dataLoaded'));
    console.log('✅ Все данные загружены!');
}

// ============================================================
// ФУНКЦИЯ ДЛЯ ФИЛЬТРА ПО МЕСЯЦАМ
// ============================================================
function getPlayersForMonth(month) {
    const playersData = window.playersData || [];
    const matchData = window.matchData || {};
    
    if (month === 'all') return playersData;

    const matchKeys = [];
    Object.keys(matchData).forEach(key => {
        const match = matchData[key];
        if (!match || !match.date) return;
        const dateParts = match.date.split('.');
        if (dateParts.length === 3 && parseInt(dateParts[1]) === parseInt(month)) {
            matchKeys.push(key);
        }
    });

    if (matchKeys.length === 0) return [];

    const filteredPlayers = playersData.map(p => {
        const copy = { ...p, k: 0, d: 0, a: 0, matches: 0, kd: 0, adr: 0, diff: 0, rating: 0 };

        matchKeys.forEach(matchKey => {
            const match = matchData[matchKey];
            if (!match || !match.teams) return;

            ['win', 'loss'].forEach(side => {
                const team = match.teams[side];
                if (!team || !team.players) return;
                const player = team.players.find(p2 => p2.name === p.name);
                if (player) {
                    copy.k += player.k || 0;
                    copy.d += player.d || 0;
                    copy.a += player.a || 0;
                    copy.matches++;
                    copy.adr += player.adr || 0;
                    copy.diff += (player.k || 0) - (player.d || 0);
                }
            });
        });

        if (copy.matches > 0) {
            copy.kd = parseFloat((copy.k / (copy.d || 1)).toFixed(2));
            copy.adr = Math.round(copy.adr / copy.matches);
            copy.rating = parseFloat(((copy.k / (copy.d || 1)) * 0.8).toFixed(2));
        }

        return copy;
    });

    return filteredPlayers.filter(p => p.matches > 0);
}

// ============================================================
// ЗАПУСК
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(loadAllData, 500);
});

console.log('✅ script-loader.js загружен (читает из JSON-файлов)');
