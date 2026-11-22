// Массивы для генерации
const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const monthCodes = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

// Генератор турниров на 2027 год (3 штуки в месяц)
const generate2027Tournaments = () => {
    let tournaments = [];
    
    monthNames.forEach((monthName, index) => {
        const mCode = monthCodes[index];
        const mNum = index + 1;
        
        // 1. Первая неделя - Рейтинг
        tournaments.push({
            id: `mpl-ranked-${mNum}-2027`,
            name: `MPL RANKED ${mCode} '27`,
            year: 2027,
            month: mNum,
            status: "upcoming",
            dates: `1-я неделя ${monthName} 2027`,
            prizePool: "TBD",
            teamsCount: "TBD",
            location: "Online",
            teams: [],
            prizeDistribution: [{ place: "Top 1", reward: "TBD" }, { place: "Top 2", reward: "TBD" }],
            matches: []
        });

        // 2. Вторая неделя - Кубок
        tournaments.push({
            id: `mpl-cup-${mNum}-2027`,
            name: `MPL CUP ${mCode} '27`,
            year: 2027,
            month: mNum,
            status: "upcoming",
            dates: `2-я неделя ${monthName} 2027`,
            prizePool: "TBD",
            teamsCount: "TBD",
            location: "Online",
            teams: [],
            prizeDistribution: [{ place: "1st", reward: "TBD" }, { place: "2nd", reward: "TBD" }],
            matches: []
        });

        // 3. Конец месяца - Мейджор
        tournaments.push({
            id: `mpl-major-${mNum}-2027`,
            name: `MPL MAJOR ${mCode} '27`,
            year: 2027,
            month: mNum,
            status: "upcoming",
            dates: `Конец ${monthName} 2027`,
            prizePool: "TBD",
            teamsCount: "TBD",
            location: "Online",
            teams: [],
            prizeDistribution: [{ place: "Champion", reward: "TBD" }, { place: "Runner-up", reward: "TBD" }],
            matches: []
        });
    });

    return tournaments;
};

// Итоговый массив (можно добавлять свои вручную)
const tournamentsData = [
    ...generate2027Tournaments()
];
