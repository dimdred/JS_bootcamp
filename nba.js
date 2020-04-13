const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 95,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement("ul");
  for (const game of games) {
    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreLine(game);
    
    gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "loss");
    ulParent.appendChild(gameLi);
  }
  return ulParent;
}

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner;
}

const getScoreLine = ({homeTeam, awayTeam}) => {
    const { team: aTeam, points: aPoints } = awayTeam;
    const { team: hTeam, points: hPoints } = homeTeam;
    const teamName = `${aTeam} @ ${hTeam}`;
    let scoreLine;
    if (aPoints > hPoints) {
      scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
    } else {
      scoreLine = `${aPoints} - <b>${hPoints}</b>`;
    }
    return `${teamName} ${scoreLine}`;
}

const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');
const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');
gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);