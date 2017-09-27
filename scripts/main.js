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
        choices: ["Yes\,\ his father helped him", "Yes\,\ he trained at Mount Myōboku to control the 9 tails power", "No\,\ he wasn't able to control the 9 tails power", "No\,\ he wasn't able to control the 9 tails but he became friend with kurama"],
        answer: 2
    }
];

// GLOBAL SCOPE //
var answersArr = []; // STORED ANSWERS //
var countPage = 1; // FAKE PAGE DEFAULT VALUE //
var alreadyAnswered = false; // UNIQUE ANSWER VALIDATION //
var page = 0; // INDEX PAGE DEFAULT VALUE //
var textNode = ""; // QUESTION TEXT DEFAULT VALUE //
//var inputID = 0;
var indexController = 0; // INDEX DEFAULT VALUE //
// READY AND CALL //
$(document).ready(function() {
    createQuiz(page); //CREATE QUESTION DEFAULT // 
    $("#navigate").on('click', function() {
        validateAnswer(); //VALIDATE ANSWER BEFORE PROCEEDING//
        console.log(page);
        
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

        default:
            // code

    }
}


function checkAnswer(){
    var correctAns = 1;
    for(var i=0; i < answersArr.length; i++){
        //console.log(answersArr[i],Allquestions[i].choices[Allquestions[i].answer], correctAns);
        if(answersArr[i] === Allquestions[i].choices[Allquestions[i].answer]){
            correctAns += 1;
            console.log(answersArr[i],Allquestions[i].choices[Allquestions[i].answer], correctAns);
        }
        console.log(correctAns);
    }
    
}
function validateAnswer() {
    var inputElem = $("input[name=answer]:checked"); //GET SELECTED ANSWER//
    if (inputElem.val() !== undefined) {
        answersArr.push(inputElem.val()); //LETS PUSH THE ANSWER TO OUR ARRAY //
        if (page >= 6) {
            $("#submit").css("display","block"); // LAST PAGE, CHECK ANSWER //
            $("#navigate").css("display","none");
        }
        else {
        page += 1; // INCREMENT OUR PAGE COUNT //
        indexController = page; //INDEX EQUALS TO CURRENT PAGE // 
        createQuiz(page); // UPDATE QUIZ //
        updateDomPage(countPage); // LETS UPDATE PAGE COUNT //
        }
    }
    else {
        alert("YOU CAN'T DO THAT"); //EMPTY VALUE NOT ACCEPTED//
    }

}

// UPDATE PAGE COUNT //
function updateDomPage(val) {
    val = countPage += 1;
    var pageHTML = $("#currentPage");
    if (pageHTML.html() === "6") {
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
