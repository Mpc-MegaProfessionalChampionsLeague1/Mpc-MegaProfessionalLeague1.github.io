const matches = [
{
    id:1,
    date:"02.08.2026",
    map:"Mirage",
    score:"13 : 10",

    team1:["FaNtik","Player2","Player3","Player4"],
    team2:["Enemy1","Enemy2","Enemy3","Enemy4"],

    mvp:"FaNtik"
}
];

const id = Number(new URLSearchParams(location.search).get("id"));

const match = matches.find(m=>m.id===id);

const container = document.getElementById("match-container");

if(!match){
    container.innerHTML="<h1>Матч не найден</h1>";
}else{

container.innerHTML=`

<h1>Матч #${match.id}</h1>

<p>${match.date}</p>

<h2>${match.score}</h2>

<p>Карта: ${match.map}</p>

<h3>Синие</h3>

<ul>
${match.team1.map(p=>`<li>${p}</li>`).join("")}
</ul>

<h3>Красные</h3>

<ul>
${match.team2.map(p=>`<li>${p}</li>`).join("")}
</ul>

<h2>MVP</h2>

<p>${match.mvp}</p>

`;

}
