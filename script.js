let user_score = 0;
let computer_score = 0;
let user_score_span = document.getElementById("user-score");
let computer_score_span = document.getElementById("computer-score");
let choices_text = document.getElementById("choices");
let result_text = document.getElementById("result");
const theme_button = document.getElementById("theme-button");
const body = document.getElementsByTagName("body");
const choices = document.getElementsByTagName("img");

const loop = (data, index, condition) => {
    while (index < condition) {
        data[index].classList.toggle("light");
        index++;
    }
}

const changeBackground = () => {
    theme_button.classList.toggle("toggle");
    body[0].classList.toggle("dark");
    loop(choices, 0, choices.length);
    document.getElementsByClassName("score-board")[0].classList.toggle("light");
    if (theme_button.textContent === `Dark`) {
        theme_button.textContent = `Light`;
    } else {
        theme_button.textContent = `Dark`;
    }
}

theme_button.addEventListener("click", changeBackground);

function userChoice() {
    let index = 0;
    let user_choice;

    while (index < choices.length) {
        choices[index].addEventListener("click", function (e) {
            user_choice = e.srcElement.id;
            computerChoice(user_choice);
        })
        index++;
    }
} userChoice();

function computerChoice(user_choice) {
    let random_number;
    let computer_choice;
    const available_choices = ["rock", "paper", "scissors"];

    random_number = Math.floor(Math.random() * 3);
    computer_choice = available_choices[random_number];
    compare(user_choice, computer_choice);
}

function compare(user_choice, computer_choice) {
    switch (user_choice + computer_choice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            userWin(user_choice, computer_choice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            computerWin(user_choice, computer_choice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(user_choice, computer_choice);
            break;
    }
}

function userWin(user_choice, computer_choice) {
    user_score++;
    user_score_span.textContent = user_score;
    result_text.textContent = `Tebrikler !`;
    choices_text.textContent = `Seçiminiz :  ${convert(user_choice)} Bilgisayarın Seçimi :  ${convert(computer_choice)}`;
}

function computerWin(user_choice, computer_choice) {
    computer_score++;
    computer_score_span.textContent = computer_score;
    result_text.textContent = `Kaybettiniz !`;
    choices_text.textContent = `Seçiminiz :  ${convert(user_choice)} Bilgisayarın Seçimi :  ${convert(computer_choice)}`;
}

function draw(user_choice, computer_choice) {
    result_text.textContent = `Berabere !`;
    choices_text.textContent = `Seçiminiz :  ${convert(user_choice)} Bilgisayarın Seçimi :  ${convert(computer_choice)}`;
}

function convert(text) {
    switch (text) {
        case "rock":
            return "Taş";
        case "paper":
            return "Kağıt";
        case "scissors":
            return "Makas";
    }
}