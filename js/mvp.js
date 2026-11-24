// ==========================================
// АВТОМАТИЧЕСКИЙ РАСЧЕТ MVP (Универсальный)
// ==========================================

function calculateMatchMVP(match) {
    // Получаем команды из матча (поддерживаем оба формата данных)
    const teams = match.teams || (match.total && match.total.teams);
    if (!teams || !teams.win || !teams.win.players) return null;

    // Берем всех игроков из обеих команд
    const allPlayers = [
        ...(teams.win.players || []),
        ...(teams.loss.players || [])
    ];

    if (allPlayers.length === 0) return null;

    let bestPlayer = null;
    let maxScore = -1;

    allPlayers.forEach(p => {
        // Если у игрока нет статов, пропускаем
        if (!p.k && !p.d && !p.adr) return;

        const kd = p.d > 0 ? (p.k / p.d) : p.k;
        const adr = p.adr || 0;
        const rating = p.rating || (p.highlight ? 1.2 : 1.0); // Если рейтинга нет, ставим средний

        // Формула: (K/D * 0.4) + (ADR/100 * 0.4) + (Rating * 0.2)
        const score = (kd * 0.4) + ((adr / 100) * 0.4) + (rating * 0.2);

        if (score > maxScore) {
            maxScore = score;
            bestPlayer = p;
        }
    });

    if (!bestPlayer) return null;

    return {
        name: bestPlayer.name,
        k: bestPlayer.k || 0,
        d: bestPlayer.d || 0,
        adr: bestPlayer.adr || 0,
        rating: bestPlayer.rating || 1.0,
        score: maxScore.toFixed(2),
        isWin: teams.win.players.some(p => p.name === bestPlayer.name)
    };
}
