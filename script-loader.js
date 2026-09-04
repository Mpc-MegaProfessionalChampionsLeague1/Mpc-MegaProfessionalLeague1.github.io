// ============================================================
// script-loader.js — загрузка данных из JSON-файлов
// ============================================================

console.log('🔄 Загрузка данных из JSON-файлов...');

async function loadJSON(url) {
    try {
        const response = await fetch(url + '?t=' + Date.now());
        if (!response.ok) {
            console.log(`⚠️ Файл ${url} не найден`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        return null;
    }
}

async function loadAllData() {
    // 1. Загружаем игроков
    const players = await loadJSON('data/players.json');
    if (players && players.length > 0) {
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
    window.playersData.forEach(player => {
        const history = [];
        Object.keys(window.matchData).forEach(key => {
            const match = window.matchData[key];
            if (!match || !match.teams) return;
            
            ['win', 'loss'].forEach(side => {
                const team = match.teams[side];
                if (!team || !team.players) return;
                const p = team.players.find(p2 => p2.name === player.name);
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

    // 5. Оповещаем страницу
    document.dispatchEvent(new Event('dataLoaded'));
    console.log('✅ Все данные загружены!');
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(loadAllData, 300);
});

console.log('✅ script-loader.js загружен');
