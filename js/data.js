const playersData = [
    { name: 'bomba69', matches: 5, k: 78, d: 49, a: 7, kd: 1.59, adr: 91, diff: 58, rating: 1.41, you: true, avatar: '' },
    { name: 'Хомяк с авт', matches: 3, k: 63, d: 43, a: 11, kd: 1.47, adr: 100, diff: 116, rating: 1.47, you: false, avatar: '' },
    { name: 'abdalbek', matches: 5, k: 73, d: 66, a: 12, kd: 1.11, adr: 88, diff: 22, rating: 1.25, you: false, avatar: '' },
    { name: 'uxaxaxaxa', matches: 5, k: 62, d: 62, a: 9, kd: 1.00, adr: 74, diff: 0, rating: 1.00, you: false, avatar: '' },
    { name: 'Gonduras228', matches: 5, k: 56, d: 62, a: 18, kd: 0.90, adr: 72, diff: 11, rating: 0.94, you: false, avatar: '' },
    { name: 'wadsf', matches: 4, k: 51, d: 44, a: 11, kd: 1.16, adr: 64, diff: 50, rating: 1.02, you: false, avatar: '' },
    { name: 'Adjiare Gudju', matches: 4, k: 59, d: 69, a: 17, kd: 0.86, adr: 73, diff: -35, rating: 0.96, you: false, avatar: '' },
    { name: 'AFKE', matches: 4, k: 22, d: 44, a: 18, kd: 0.50, adr: 59, diff: -22, rating: 0.71, you: false, avatar: '' },
    { name: 'balchuqov_valera', matches: 2, k: 15, d: 31, a: 5, kd: 0.48, adr: 49, diff: -79, rating: 0.62, you: false, avatar: '' },
    { name: 'baksyhanovvand...', matches: 4, k: 25, d: 75, a: 8, kd: 0.33, adr: 41, diff: -119, rating: 0.35, you: false, avatar: '' }
];

const matchData = {
    match0: {
        title: '🏆 Матч #0 — BO3',
        date: '30.07.2026',
        map: 'Ancient + Anubis',
        score: '2:0',
        winner: 'Team Fortress 2',
        loser: 'Team Magic',
        detail: 'BO3 · 2 карты',
        map1: {
            name: 'Ancient',
            score: '13:4',
            teams: {
                win: {
                    name: 'Team Fortress 2',
                    players: [
                        { name: 'Хомяк с авт', k: 19, d: 8, a: 2, adr: 107, diff: 49, highlight: true },
                        { name: 'uxaxaxaxa', k: 18, d: 8, a: 7, adr: 121, diff: 65 },
                        { name: 'bomba69', k: 14, d: 8, a: 3, adr: 89, diff: 34 },
                        { name: 'AFKE', k: 8, d: 12, a: 5, adr: 53, diff: -19 }
                    ]
                },
                loss: {
                    name: 'Team Magic',
                    players: [
                        { name: 'Adjiare Gudju', k: 13, d: 14, a: 2, adr: 73, diff: -14 },
                        { name: 'abdalbek', k: 12, d: 14, a: 3, adr: 76, diff: -15 },
                        { name: 'Gonduras228', k: 7, d: 16, a: 3, adr: 57, diff: -41 },
                        { name: 'baksyhanovvand...', k: 4, d: 15, a: 3, adr: 35, diff: -58, worst: true }
                    ]
                }
            }
        },
        map2: {
            name: 'Anubis',
            score: '13:6',
            teams: {
                win: {
                    name: 'Team Fortress 2',
                    players: [
                        { name: 'bomba69', k: 23, d: 7, a: 0, adr: 104, diff: 52, highlight: true },
                        { name: 'Хомяк с авт', k: 16, d: 11, a: 3, adr: 95, diff: 36 },
                        { name: 'uxaxaxaxa', k: 16, d: 8, a: 2, adr: 85, diff: 29 },
                        { name: 'AFKE', k: 6, d: 12, a: 7, adr: 52, diff: -18 }
                    ]
                },
                loss: {
                    name: 'Team Magic',
                    players: [
                        { name: 'Adjiare Gudju', k: 11, d: 14, a: 2, adr: 58, diff: -29 },
                        { name: 'baksyhanovvand...', k: 10, d: 16, a: 2, adr: 62, diff: -22 },
                        { name: 'abdalbek', k: 8, d: 16, a: 5, adr: 63, diff: -26 },
                        { name: 'Gonduras228', k: 9, d: 16, a: 5, adr: 59, diff: -27, worst: true }
                    ]
                }
            }
        },
        total: {
            teams: {
                win: {
                    name: 'Team Fortress 2 — ОБЩАЯ',
                    players: [
                        { name: 'bomba69', k: 37, d: 15, a: 3, adr: 97, diff: 86, highlight: true },
                        { name: 'uxaxaxaxa', k: 34, d: 16, a: 9, adr: 103, diff: 94 },
                        { name: 'Хомяк с авт', k: 35, d: 19, a: 5, adr: 101, diff: 85 },
                        { name: 'AFKE', k: 14, d: 24, a: 12, adr: 53, diff: -37 }
                    ]
                },
                loss: {
                    name: 'Team Magic — ОБЩАЯ',
                    players: [
                        { name: 'Adjiare Gudju', k: 24, d: 28, a: 4, adr: 66, diff: -43 },
                        { name: 'abdalbek', k: 20, d: 30, a: 8, adr: 70, diff: -41 },
                        { name: 'Gonduras228', k: 16, d: 32, a: 8, adr: 58, diff: -68 },
                        { name: 'baksyhanovvand...', k: 14, d: 31, a: 5, adr: 49, diff: -80, worst: true }
                    ]
                }
            }
        }
    },
    match1: {
        title: 'Матч #1',
        date: '09.05.2026',
        map: 'Mirage',
        score: '13:1',
        winner: 'Team 2',
        loser: 'Team 1',
        detail: 'Карта: Mirage',
        teams: {
            win: {
                name: 'Team 2 — WIN',
                players: [
                    { name: 'baksyhanovvand...', k: 17, d: 5, a: 3, adr: 131, diff: 76, highlight: true },
                    { name: 'Хомяк с авт', k: 14, d: 9, a: 4, adr: 105, diff: 20 },
                    { name: 'wadsf', k: 13, d: 6, a: 2, adr: 72, diff: 7 },
                    { name: 'AFKE', k: 8, d: 5, a: 4, adr: 65, diff: 20 }
                ]
            },
            loss: {
                name: 'Team 1 — LOSS',
                players: [
                    { name: 'abdalbek', k: 8, d: 13, a: 1, adr: 79, diff: -13 },
                    { name: 'bomba69', k: 10, d: 13, a: 0, adr: 95, diff: -1 },
                    { name: 'Gonduras228', k: 6, d: 13, a: 1, adr: 55, diff: -38 },
                    { name: 'uxaxaxaxa', k: 0, d: 13, a: 2, adr: 19, diff: -74, worst: true }
                ]
            }
        }
    },
    match2: {
        title: 'Матч #2',
        date: '09.05.2026',
        map: 'Mirage',
        score: '3:13',
        winner: 'Team 1',
        loser: 'Team 2',
        detail: 'Карта: Mirage',
        teams: {
            win: {
                name: 'Team 1 — WIN',
                players: [
                    { name: 'bomba69', k: 24, d: 4, a: 0, adr: 117, diff: 80, highlight: true },
                    { name: 'abdalbek', k: 16, d: 11, a: 4, adr: 112, diff: 39 },
                    { name: 'Gonduras228', k: 9, d: 9, a: 5, adr: 79, diff: 15 },
                    { name: 'uxaxaxaxa', k: 10, d: 10, a: 1, adr: 64, diff: -19 }
                ]
            },
            loss: {
                name: 'Team 2 — LOSS',
                players: [
                    { name: 'Хомяк с авт', k: 14, d: 15, a: 2, adr: 94, diff: 11 },
                    { name: 'wadsf', k: 10, d: 14, a: 1, adr: 50, diff: -37 },
                    { name: 'AFKE', k: 6, d: 15, a: 2, adr: 65, diff: -30 },
                    { name: 'baksyhanovvand...', k: 3, d: 15, a: 2, adr: 28, diff: -66, worst: true }
                ]
            }
        }
    },
    match3: {
        title: 'Матч #3',
        date: '17.05.2026',
        map: 'Mirage',
        score: '3:13',
        winner: 'Team 1',
        loser: 'Team 2',
        detail: 'Карта: Mirage',
        teams: {
            win: {
                name: 'Team 1 — WIN',
                players: [
                    { name: 'wadsf', k: 17, d: 9, a: 6, adr: 114, diff: 51, highlight: true },
                    { name: 'Gonduras228', k: 14, d: 10, a: 3, adr: 90, diff: 21 },
                    { name: 'bomba69', k: 12, d: 7, a: 3, adr: 89, diff: 34 },
                    { name: 'uxaxaxaxa', k: 13, d: 9, a: 1, adr: 74, diff: 7 }
                ]
            },
            loss: {
                name: 'Team 2 — LOSS',
                players: [
                    { name: 'abdalbek', k: 15, d: 13, a: 5, adr: 112, diff: 17 },
                    { name: 'fort[чилл]', k: 13, d: 15, a: 3, adr: 89, diff: -8 },
                    { name: 'balchuqov_valera', k: 6, d: 14, a: 2, adr: 48, diff: -39 },
                    { name: 'baksyhanovvand...', k: 1, d: 14, a: 1, adr: 5, diff: -82, worst: true }
                ]
            }
        }
    },
    match4: {
        title: 'Матч #4',
        date: '17.05.2026',
        map: 'Mirage',
        score: '8:13',
        winner: 'Team 1',
        loser: 'Team 2',
        detail: 'Карта: Mirage',
        teams: {
            win: {
                name: 'Team 1 — WIN',
                players: [
                    { name: 'bomba69', k: 16, d: 12, a: 3, adr: 90, diff: 31, highlight: true },
                    { name: 'abdalbek', k: 16, d: 14, a: 1, adr: 73, diff: 1 },
                    { name: 'Adjiare Gudju', k: 11, d: 13, a: 5, adr: 71, diff: 8 },
                    { name: 'uxaxaxaxa', k: 11, d: 14, a: 2, adr: 46, diff: -22 }
                ]
            },
            loss: {
                name: 'Team 2 — LOSS',
                players: [
                    { name: 'Gonduras228', k: 13, d: 14, a: 7, adr: 78, diff: 5 },
                    { name: 'balchuqov_valera', k: 9, d: 17, a: 3, adr: 49, diff: -40 },
                    { name: 'wadsf', k: 11, d: 15, a: 2, adr: 49, diff: -41 },
                    { name: 'baksyhanovvand...', k: 4, d: 17, a: 0, adr: 18, diff: -66, worst: true }
                ]
            }
        }
    }
};

const playerMatchHistory = {
    'bomba69': [
        { match: '#0 BO3', k: 37, d: 15, diff: 22, map: 'Ancient + Anubis' },
        { match: '#1', k: 10, d: 13, diff: -3, map: 'Mirage' },
        { match: '#2', k: 24, d: 4, diff: 20, map: 'Mirage' },
        { match: '#3', k: 12, d: 7, diff: 5, map: 'Mirage' },
        { match: '#4', k: 16, d: 12, diff: 4, map: 'Mirage' }
    ],
    'Хомяк с авт': [
        { match: '#0 BO3', k: 35, d: 19, diff: 16, map: 'Ancient + Anubis' },
        { match: '#1', k: 14, d: 9, diff: 5, map: 'Mirage' },
        { match: '#2', k: 14, d: 15, diff: -1, map: 'Mirage' }
    ],
    'abdalbek': [
        { match: '#0 BO3', k: 20, d: 30, diff: -10, map: 'Ancient + Anubis' },
        { match: '#1', k: 8, d: 13, diff: -5, map: 'Mirage' },
        { match: '#2', k: 16, d: 11, diff: 5, map: 'Mirage' },
        { match: '#3', k: 15, d: 13, diff: 2, map: 'Mirage' },
        { match: '#4', k: 16, d: 14, diff: 2, map: 'Mirage' }
    ],
    'Adjiare Gudju': [
        { match: '#0 BO3', k: 24, d: 28, diff: -4, map: 'Ancient + Anubis' },
        { match: '#3', k: 13, d: 15, diff: -2, map: 'Mirage (как fort[чилл])' },
        { match: '#4', k: 11, d: 13, diff: -2, map: 'Mirage (как fort[чилл])' }
    ],
    'uxaxaxaxa': [
        { match: '#0 BO3', k: 34, d: 16, diff: 18, map: 'Ancient + Anubis' },
        { match: '#1', k: 0, d: 13, diff: -13, map: 'Mirage' },
        { match: '#2', k: 10, d: 10, diff: 0, map: 'Mirage' },
        { match: '#3', k: 13, d: 9, diff: 4, map: 'Mirage' },
        { match: '#4', k: 11, d: 14, diff: -3, map: 'Mirage' }
    ],
    'Gonduras228': [
        { match: '#0 BO3', k: 16, d: 32, diff: -16, map: 'Ancient + Anubis' },
        { match: '#1', k: 6, d: 13, diff: -7, map: 'Mirage' },
        { match: '#2', k: 9, d: 9, diff: 0, map: 'Mirage' },
        { match: '#3', k: 14, d: 10, diff: 4, map: 'Mirage' },
        { match: '#4', k: 13, d: 14, diff: -1, map: 'Mirage' }
    ],
    'AFKE': [
        { match: '#0 BO3', k: 14, d: 24, diff: -10, map: 'Ancient + Anubis' },
        { match: '#1', k: 8, d: 5, diff: 3, map: 'Mirage' },
        { match: '#2', k: 6, d: 15, diff: -9, map: 'Mirage' }
    ],
    'wadsf': [
        { match: '#1', k: 13, d: 6, diff: 7, map: 'Mirage' },
        { match: '#2', k: 10, d: 14, diff: -4, map: 'Mirage' },
        { match: '#3', k: 17, d: 9, diff: 8, map: 'Mirage' },
        { match: '#4', k: 11, d: 15, diff: -4, map: 'Mirage' }
    ],
    'balchuqov_valera': [
        { match: '#3', k: 6, d: 14, diff: -8, map: 'Mirage' },
        { match: '#4', k: 9, d: 17, diff: -8, map: 'Mirage' }
    ],
    'baksyhanovvand...': [
        { match: '#0 BO3', k: 14, d: 31, diff: -17, map: 'Ancient + Anubis' },
        { match: '#1', k: 17, d: 5, diff: 12, map: 'Mirage' },
        { match: '#2', k: 3, d: 15, diff: -12, map: 'Mirage' },
        { match: '#3', k: 1, d: 14, diff: -13, map: 'Mirage' },
        { match: '#4', k: 4, d: 17, diff: -13, map: 'Mirage' }
    ]
};

function getAchievements(player) {
    const ach = [];
    if (player.kd > 1.5) ach.push({ icon: '🥇', name: 'Элитный K/D' });
    if (player.kd > 2.0) ach.push({ icon: '💎', name: 'Легендарный K/D' });
    if (player.diff > 100) ach.push({ icon: '⚡', name: 'Доминатор' });
    if (player.diff > 50 && player.diff <= 100) ach.push({ icon: '🔥', name: 'Кипящий' });
    if (player.adr > 90) ach.push({ icon: '💥', name: 'Урон-машина' });
    if (player.matches >= 4) ach.push({ icon: '🏅', name: 'Ветеран' });
    if (player.name === 'bomba69') ach.push({ icon: '⭐', name: 'MVP турнира' });
    if (player.name === 'Хомяк с авт' && player.diff === 116) ach.push({ icon: '🏆', name: 'Лучшая разница' });
    return ach;
}

function loadAvatars() {
    const saved = localStorage.getItem('mpl_avatars');
    if (saved) {
        try {
            const avatars = JSON.parse(saved);
            playersData.forEach(p => {
                if (avatars[p.name]) p.avatar = avatars[p.name];
            });
        } catch (e) {}
    }
}
loadAvatars();

function saveAvatar(playerName, dataUrl) {
    const saved = JSON.parse(localStorage.getItem('mpl_avatars') || '{}');
    saved[playerName] = dataUrl;
    localStorage.setItem('mpl_avatars', JSON.stringify(saved));
    const player = playersData.find(p => p.name === playerName);
    if (player) player.avatar = dataUrl;
}

let newsData = JSON.parse(localStorage.getItem('mpl_news')) || [
    { id: 1, title: '🏆 Старт сезона MPL!', text: 'Дружеский турнир MPL начался!', date: new Date('2026-05-09T10:00:00').toISOString() },
    { id: 2, title: '🔥 Bomba69 делает 24-4!', text: 'В матче #2 Bomba69 показал невероятный результат!', date: new Date('2026-05-09T15:30:00').toISOString() },
    { id: 3, title: '📊 Сайт обновлён!', text: 'Теперь это полноценный многостраничный сайт как HLTV.', date: new Date().toISOString() }
];

function saveNews() {
    localStorage.setItem('mpl_news', JSON.stringify(newsData));
}
