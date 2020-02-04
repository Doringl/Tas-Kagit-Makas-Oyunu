var user_score = 0;
var computer_score = 0;
var user_score_span = document.getElementById("user-score");
var computer_score_span = document.getElementById("computer-score");
var choices = document.getElementsByTagName("img");
var choices_text = document.getElementById("choices");
var result_text = document.getElementById("result");


function userChoice() {
    var index = 0;
    var user_choice;

    while(index < choices.length) {
        choices[index].addEventListener("click",function(e) {
            user_choice = e.srcElement.id;
            computerChoice(user_choice);
        })
        index ++;
    }
}userChoice();

function computerChoice(user_choice) {
    var random_number;
    var computer_choice;
    const available_choices = ["rock","paper","scissors"];
    
    random_number = Math.floor(Math.random() * 3);
    computer_choice = available_choices[random_number];
    compare(user_choice,computer_choice);
}

function compare(user_choice,computer_choice) {
    switch(user_choice + computer_choice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            userWin(user_choice,computer_choice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            computerWin(user_choice,computer_choice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(user_choice,computer_choice);
            break;
    }
}

function userWin(user_choice,computer_choice) {
    user_score ++;
    user_score_span.textContent = user_score;
    result_text.textContent = "Tebrikler !";
    choices_text.textContent = "Seçiminiz : " + convert(user_choice) + " " + "Bilgisayarın Seçimi : " + convert(computer_choice);
}

function computerWin(user_choice,computer_choice) {
    computer_score ++;
    computer_score_span.textContent = computer_score;
    result_text.textContent = "Kaybettiniz !";
    choices_text.textContent = "Seçiminiz : " + convert(user_choice) + " " + "Bilgisayarın Seçimi : " + convert(computer_choice);
}

function draw(user_choice,computer_choice) {
    result_text.textContent = "Berabere."
    choices_text.textContent = "Seçiminiz : " + convert(user_choice) + " " + "Bilgisayarın Seçimi : " + convert(computer_choice);
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