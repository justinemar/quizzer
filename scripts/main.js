"use strict"
/*
QUESTIONS PROPERTIES IN ARRAY OBJECTS 
WHERE IN 'question' property is question 
WHERE IN 'choices' property is question choices representation
WHERE IN 'answer' property is question correct answer

*/

var Allquestions = [{
        question: "Who is naruto's father?",
        choices: ["Jiraiya", "Sarutobi", "Orichimaru", "Minato"],
        answer: 3

    },
    {
        question: "Why did sasuke left konoha?",
        choices: ["To avenge his clan by killing his brother", "To train and surpass naruto", "To join the akatsuki", "To cast tsukuyomi upon the world"],
        answer: 0

    },
    {
        question: "In shippuden series how did naruto found out about his father?",
        choices: ["Jiraiya being restored by edo tensei", "Naruto almost ripping the 9 tails seal", "Naruto on brink of his death", "Pain telling him who's his father is"],
        answer: 1
    },
    {
        question: "Who founded the Akatsuki?",
        choices: ["Nagato", "Pain", "Yahiko", "Obito/tobi"],
        answer: 2
    },
    {
        question: "When did the term 'Legendary Sannins' was coined?",
        choices: ["During the First Shinobi World War", "During the Second Shinobi World War", "During the third Shinobi World War", "During the Fourth Great Ninja War"],
        answer: 1
    },
    {
        question: "Besides Might guy father Might duy, who else is dubbed as 'Eternal Genin'?",
        choices: ["Naruto Uzumaki", "Kosuke Maruboshi", "Tobirama Senju", "Chōji Akimichi"],
        answer: 1
    },
    {
        question: "Was naruto able to control his jinjuriki during the pain attack?",
        choices: ["Yes, his father helped him", "Yes, he trained at Mount Myōboku to control the 9 tails power", "No, he wasnt able to control the 9 tails power", "No, he wasnt able to control the 9 tails but he became friend with kurama"],
        answer: 2
    },
    {
        question: "Kakashi's father Sakumo Hatake is renowned across the shinobi world as Konoha's White Fang, what is Kakashis famous title?",
        choices: ["Copy Ninja Kakashi", "Kakashi the Sharingan", "New White Fang", "Konoha's Yellowflash"],
        answer: 1
    }
];

// GLOBAL SCOPE //
var answersArr = []; // STORED ANSWERS //
var countPage = 1; // FAKE PAGE DEFAULT VALUE //
var alreadyAnswered = false; // UNIQUE ANSWER VALIDATION //
var page = 0; // INDEX PAGE DEFAULT VALUE //
var textNode = ""; // QUESTION TEXT DEFAULT VALUE //
var msgbox = "#info-msg";
var currentScore = "#info-score";
var correctAns = 0;
var indexController = 0; // INDEX DEFAULT VALUE //
// READY AND CALL //
$(document).ready(function() {
    $(msgbox).empty();
    createQuiz(page); //CREATE QUESTION DEFAULT // 
    $("#navigate").on('click', function() {
        validateAnswer(); //VALIDATE ANSWER BEFORE PROCEEDING//
    });
    $("#submit").on('click', function(){
        checkAnswer();
    })
})

// FUNCTIONS //
function createQuiz(crPage) {
    // CURRENT INDEX QUESTION //
    textNode = Allquestions[indexController].question;
    switch (crPage) {
        case 0:
            appendQuestion()
            appendChoices()
            break;
        case 1:
            appendQuestion()
            appendChoices()
            break;
        case 2:
            appendQuestion()
            appendChoices()
            break;
        case 3:
            appendQuestion()
            appendChoices()
            break;
        case 4:
            appendQuestion()
            appendChoices()
            break;
        case 5:
            appendQuestion()
            appendChoices()
            break;
        case 6:
            appendQuestion()
            appendChoices()
            break;
        case 7:
            appendQuestion()
            appendChoices()
        default:
            // code

    }
}


function checkAnswer(){
    for(var i=0; i < answersArr.length; i++){
        //console.log(answersArr[i],Allquestions[i].choices[Allquestions[i].answer], correctAns);
        if(answersArr[i] === Allquestions[i].choices[Allquestions[i].answer]){
            correctAns += 5;
            console.log(answersArr[i],Allquestions[i].choices[Allquestions[i].answer], correctAns);
        }
        //console.log(correctAns,answersArr);
    }
    $(currentScore).html("SCORE :" + correctAns);
  
}
function validateAnswer() {
    var inputElem = $("input[name=answer]:checked"); //GET SELECTED ANSWER//
    if (inputElem.val() !== undefined) {
        answersArr.push(inputElem.val()); //LETS PUSH THE ANSWER TO OUR ARRAY //
        console.log("Score " + correctAns + " Answer " + answersArr);
        
        if (page >= 7) {
            $("#submit").css("display","block"); // LAST PAGE, CHECK ANSWER //
            $("#navigate").css("display","none"); //HIDE NEXT BTN//
        }
        else {
        page += 1; // INCREMENT OUR PAGE COUNT //
        indexController = page; //INDEX EQUALS TO CURRENT PAGE // 
        createQuiz(page); // UPDATE QUIZ //
        updateDomPage(countPage); // LETS UPDATE PAGE COUNT //
        }
    }
    else {
        $(msgbox).html("You can't do that!").fadeIn(1000).fadeOut(200);
  
    }

}

// UPDATE PAGE COUNT //
function updateDomPage(val) {
    val = countPage += 1;
    var pageHTML = $("#currentPage");
    if (pageHTML.html() === "7") {
        val,
        countPage = 0;
        pageHTML.html(val)
    }
    else {
        pageHTML.html(val);
    }
}
// APPEND QUESTION CHOICES BASED ON QUESTION INDEX //
function appendChoices() {
    $("#choices").empty(); // REMOVE EXISTING CHOICES //
    for (var i = 0; i < Allquestions[indexController].choices.length; i++) {
        //console.log(Allquestions[indexController].choices[i]); // TEST ACCESS
        $("#choices").append("<input class='radiobtn' type='radio' id='" + indexController + "' name='answer' value='" + Allquestions[indexController].choices[i] + "'>") //CREATE RADIO BUTTON WITH ID/VALUE BASE ON INDEX//
        $("#choices").append("<label for='" + indexController + "'>" + Allquestions[indexController].choices[i] + "</label>") // CREATE LABEL CHOICES REPRESENTATION //
        continue;

    }
}
// APPEND QUESTIONS BASED ON INDEX //
function appendQuestion() {
    $('legend').empty() // REMOVE EXISTING TEXTNODES // 
        .append(textNode); // APPEND CURRENT INDEX TEXTNODES //
}
