let homePoint = 0;
let guestPoint = 0;

const homeScoreBoard = document.getElementById("homePoints");
const guestScoreBoard = document.getElementById("guestPoints");

function updateScore(team, points) {
    if (team === "home") {
        homePoint += points;
        homeScoreBoard.textContent = homePoint;
    } else {
        guestPoint += points;
        guestScoreBoard.textContent = guestPoint;
    }
}