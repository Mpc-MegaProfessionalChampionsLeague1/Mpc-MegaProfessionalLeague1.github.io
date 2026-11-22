document.addEventListener("DOMContentLoaded", () => {
    // 1. Находим, куда вставлять меню (мы добавим этот тег в HTML)
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (!navPlaceholder) return;

    // 2. Получаем имя текущего файла из URL (например, "matches.html" или "index.html")
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '' || currentPath === '/') currentPath = 'index.html'; // Если открыли корень

    // 3. Список всех вкладок
    const links = [
        { href: 'index.html', label: '01 / Главная' },
        { href: 'matches.html', label: '02 / Матчи' },
        { href: 'players.html', label: '03 / Игроки' },
        { href: 'tournaments.html', label: '04 / Турниры' }, // Наша новая вкладка
        { href: 'stats.html', label: '05 / Статистика' },
        { href: 'about.html', label: '06 / О сайте' }
    ];

    // 4. Генерируем HTML
    let navHTML = '<nav class="nav">';
    links.forEach(link => {
        // Проверяем, совпадает ли ссылка с текущей страницей (чтобы добавить класс active)
        const isActive = currentPath === link.href ? 'active' : '';
        navHTML += `<a href="${link.href}" class="nav-btn ${isActive}">${link.label}</a>`;
    });
    navHTML += '</nav>';

    // 5. Вставляем на страницу
    navPlaceholder.innerHTML = navHTML;
});
