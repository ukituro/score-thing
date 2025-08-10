let homeScore = 0;
let guestScore = 0;
let historyList = [];

function updateScores() {
    document.getElementById("home-count").textContent = homeScore;
    document.getElementById("guest-count").textContent = guestScore;
}

function addHome(points) {
    homeScore += points;
    updateScores();
}

function addGuest(points) {
    guestScore += points;
    updateScores();
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    updateScores();
}

function saveGame() {
    let resultText = "";

    if (homeScore > guestScore) {
        resultText = `home won ${homeScore}-${guestScore}`;
    } else if (guestScore > homeScore) {
        resultText = `guest won ${guestScore}-${homeScore}`;
    } else {
        resultText = `tie ${homeScore}-${guestScore}`;
    }

    historyList.unshift(resultText);

    historyList = historyList.slice(0, 3);

    let historyHTML = "<strong>previous:</strong><br>";
    historyList.forEach(item => {
        historyHTML += `${item}<br>`;
    });

    document.getElementById("history").innerHTML = historyHTML;
}

updateScores();
