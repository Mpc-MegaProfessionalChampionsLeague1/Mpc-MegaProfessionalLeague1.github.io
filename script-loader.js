// ============================================================
// script-loader.js — загрузка данных из папок с JSON-файлами
// ============================================================

const REPO_OWNER = 'Mpc-MegaProfessionalChampionsLeague1';
const REPO_NAME = 'Mpc-MegaProfessionalLeague1.github.io';
const BRANCH = 'main';

console.log('🔄 Загрузка данных из JSON-файлов...');

// ============================================================
// ФУНКЦИЯ ЗАГРУЗКИ ВСЕХ ФАЙЛОВ ИЗ ПАПКИ
// ============================================================
async function loadAllFilesFromFolder(folderPath) {
    try {
        // Получаем список файлов в папке через GitHub API
        const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${folderPath}?ref=${BRANCH}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            if (response.status === 404) {
                console.log(`⚠️ Папка ${folderPath} не найдена`);
                return [];
            }
            throw new Error(`Ошибка: ${response.status}`);
        }
        
        const files = await response.json();
        const results = [];
        
        // Загружаем каждый файл
        for (const file of files) {
            if (file.type === 'file' && file.name.endsWith('.json')) {
                try {
                    const fileResponse = await fetch(file.download_url);
                    const data = await fileResponse.json();
                    results.push(data);
                    console.log(`✅ Загружен: ${folderPath}/${file.name}`);
                } catch (e) {
                    console.error(`❌ Ошибка загрузки ${file.name}:`, e);
                }
            }
        }
        
        return results;
    } catch (error) {
        console.error(`❌ Ошибка получения списка файлов из ${folderPath}:`, error);
        return [];
    }
}

// ============================================================
// ЗАГРУЗКА ВСЕХ ДАННЫХ
// ============================================================
async function loadAllData() {
    // 1. Загружаем всех игроков
    const players = await loadAllFilesFromFolder('data/players');
    if (players.length > 0) {
        window.playersData = players;
        console.log(`✅ Загружено ${players.length} игроков`);
    } else {
        // Используем данные по умолчанию
        window.playersData = [
            { name: 'bomba69', matches: 6, k: 104, d: 60, a: 12, kd: 1.73, adr: 97, diff: 133, rating: 1.53, you: true },
            { name: 'Хомяк с авт', matches: 4, k: 69, d: 60, a: 17, kd: 1.15, adr: 89, diff: 81, rating: 1.18 },
            { name: 'uxaxaxaxa', matches: 6, k: 85, d: 69, a: 11, kd: 1.23, adr: 84, diff: 66, rating: 1.24 },
            { name: 'Gonduras228', matches: 6, k: 74, d: 75, a: 24, kd: 0.99, adr: 77, diff: 35, rating: 1.05 },
            { name: 'abdalbek', matches: 6, k: 86, d: 97, a: 21, kd: 0.89, adr: 84, diff: -30, rating: 0.89 },
            { name: 'wadsf', matches: 5, k: 58, d: 61, a: 14, kd: 0.95, adr: 68, diff: -60, rating: 0.90 },
            { name: 'AFKE', matches: 5, k: 33, d: 53, a: 21, kd: 0.62, adr: 61, diff: -15, rating: 0.83 },
            { name: 'Adjiare Gudju', matches: 4, k: 59, d: 69, a: 17, kd: 0.86, adr: 73, diff: -35, rating: 0.96 },
            { name: 'balchuqov_valera', matches: 2, k: 15, d: 31, a: 5, kd: 0.48, adr: 49, diff: -79, rating: 0.62 },
            { name: 'baksyhanovvand...', matches: 4, k: 25, d: 75, a: 8, kd: 0.33, adr: 41, diff: -119, rating: 0.35 },
            { name: 'andrejlybisin3', matches: 1, k: 7, d: 12, a: 1, kd: 0.58, adr: 38, diff: -38, rating: -0.61 },
            { name: 'RUS_ENZO', matches: 1, k: 8, d: 16, a: 2, kd: 0.50, adr: 66, diff: -28, rating: -0.58 }
        ];
        console.log('⚠️ Используются данные по умолчанию (игроки)');
    }

    // 2. Загружаем матчи
    const matches = await loadAllFilesFromFolder('data/matches');
    if (matches.length > 0) {
        window.matchData = {};
        matches.forEach(m => {
            const id = m.id || `match${Math.random()}`;
            window.matchData[id] = m;
        });
        console.log(`✅ Загружено ${matches.length} матчей`);
    } else {
        console.log('⚠️ Данные матчей не найдены');
        window.matchData = {};
    }

    // 3. Загружаем новости
    const news = await loadAllFilesFromFolder('data/news');
    if (news.length > 0) {
        window.newsData = news;
        console.log(`✅ Загружено ${news.length} новостей`);
    } else {
        console.log('⚠️ Данные новостей не найдены');
        window.newsData = [];
    }

    // 4. Перерисовываем страницу
    if (typeof renderNews === 'function') {
        renderNews();
    }
    if (typeof renderTopPlayers === 'function') {
        renderTopPlayers('rating');
    }
    
    console.log('✅ Все данные загружены!');
}

// ============================================================
// ЗАПУСК
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(loadAllData, 500);
});

console.log('✅ script-loader.js загружен');
