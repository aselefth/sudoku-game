const uls = document.querySelectorAll("ul");
const lis = [];
const inp = document.querySelector("input");
const setNumbers = [[], [], [], [], [], [], [], [], []];
const solution = [
    ["3", "2", "5", "7", "1", "4", "9", "6", "8"],
    ["8", "4", "6", "5", "2", "9", "3", "7", "1"],
    ["7", "1", "9", "8", "3", "6", "4", "5", "2"],
    ["4", "5", "3", "6", "7", "2", "1", "8", "9"],
    ["9", "6", "2", "1", "8", "5", "7", "3", "4"],
    ["1", "8", "7", "9", "4", "3", "6", "2", "5"],
    ["6", "3", "4", "2", "5", "1", "8", "9", "7"],
    ["2", "7", "1", "3", "9", "8", "5", "4", "6"],
    ["5", "9", "8", "4", "6", "7", "2", "1", "3"],
];

uls.forEach(function (ul) {
    lis.push(ul.querySelectorAll("li"));
});

(function startGame() {
    for (let i = 0; i < lis.length; i++) {
        for (let j = 0; j < lis[i].length; j++) {
            let defaultCell = Math.round(Math.random() * 2);
            if (defaultCell == 1) {
                lis[i][j].innerHTML = solution[i][j];
                lis[i][j].classList.add("base");
            }
            setNumbers[i].push(lis[i][j].innerHTML);
        }
    }
    addListeners();
})();

function addListeners() {
    for (let i = 0; i < lis.length; i++) {
        for (let j = 0; j < lis[i].length; j++) {
            if (lis[i][j].classList.contains("base") == false) {
                lis[i][j].addEventListener("click", function () {
                    lis[i][j].innerHTML = inp.value;
                    if (lis[i][j].innerHTML == solution[i][j]) {
                        if (lis[i][j].classList.contains("error")) {
                            lis[i][j].classList.remove("error");
                        }
                        lis[i][j].classList.add("correct");
                        setNumbers[i][j] = lis[i][j].innerHTML;
                        lis[i][j].replaceWith(lis[i][j].cloneNode(true));
                    } else {
                        lis[i][j].classList.add("error");
                    }
                    checkForWin();
                });
            }
        }
    }
}

function checkForWin() {
    if (JSON.stringify(setNumbers) == JSON.stringify(solution)) {
        setTimeout(() => {
            alert("you won!");
        }, 300);
    }
}
