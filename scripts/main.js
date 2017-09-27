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
        choices: ["Yes, his father helped him", "Yes, he trained at Mount Myōboku to control the 9 tails power", "No, he wasn't able to control the 9 tails power", "No, he wasn't able to control the 9 tails but he became friend with kurama"],
        answer: 1
    }]

// GLOBAL SCOPE //
var answersArr = []; // STORED ANSWERS //
var countPage = 1; // FAKE PAGE DEFAULT VALUE //
var alreadyAnswered = false; // UNIQUE ANSWER VALIDATION //
var page = 0; // INDEX PAGE DEFAULT VALUE //
var textNode = ""; // QUESTION TEXT DEFAULT VALUE //
var indexController = 0; // INDEX DEFAULT VALUE //
// READY AND CALL //
$(document).ready(function() {
    createQuiz(page); //CREATE QUESTION DEFAULT // 
    $("#navigate").on('click', function() {
        page += 1; // INCREMENT OUR PAGE COUNT //
        if (page > 6) page = 0; // BACK TO 0 ON LIMIT //
        indexController = page; //INDEX EQUALS TO CURRENT PAGE // 
        createQuiz(page); // UPDATE QUIZ //
        updateDomPage(countPage); // LETS UPDATE PAGE COUNT //
    });
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



function validateAnswer(ans){
    this.answer = ans;
    
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
            console.log(Allquestions[indexController].choices[i]); // TEST ACCESS
            $("#choices").append("<input type='radio' id='"+ indexController +"' name='answer'>") //CREATE RADIO BUTTON WITH ID BASE ON INDEX//
            $("#choices").append("<label for='" +indexController + "'>" + Allquestions[indexController].choices[i]+ "</label>") // CREATE LABEL CHOICES REPRESENTATION //
    }
}
// APPEND QUESTIONS BASED ON INDEX //
function appendQuestion(){
                $('legend').empty() // REMOVE EXISTING TEXTNODES // 
            .append(textNode); // APPEND CURRENT INDEX TEXTNODES //
}
