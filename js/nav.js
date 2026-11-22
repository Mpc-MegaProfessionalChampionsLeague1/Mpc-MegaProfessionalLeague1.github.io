document.addEventListener("DOMContentLoaded", () => {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (!navPlaceholder) return;

    // Получаем имя файла (например, "tournaments.html")
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '' || currentPath === '/') currentPath = 'index.html';

    // Список всех вкладок
    const links = [
        { href: 'index.html', label: '01 / Главная' },
        { href: 'matches.html', label: '02 / Матчи' },
        { href: 'players.html', label: '03 / Игроки' },
        { href: 'tournaments.html', label: '04 / Турниры' },
        { href: 'stats.html', label: '05 / Статистика' },
        { href: 'about.html', label: '06 / О сайте' }
    ];

    let navHTML = '<nav class="nav">';
    links.forEach(link => {
        const isActive = currentPath === link.href ? 'active' : '';
        navHTML += `<a href="${link.href}" class="nav-btn ${isActive}">${link.label}</a>`;
    });
    navHTML += '</nav>';

    navPlaceholder.innerHTML = navHTML;
});
