var Allquestions = [
    {
        question: "Who is naruto's father?", choices:["Jiraiya", "Sarutobi", "Orichimaru", "Minato"], answer:3
        
    },
    {
        question: "Why did sasuke left konoha?", choices:["To avenge his clan by killing his brother", "To train and surpass naruto", "To join the akatsuki", "To cast tsukuyomi upon the world"], answer:0
        
    },
    {
        question: "In shippuden series how did naruto found out about his father?", choices:["Jiraiya being restored by edo tensei", "Naruto almost ripping the 9 tails seal", "Naruto on brink of his death", "Pain telling him who's his father is"], answer:1
    },
    {
        question: "Who founded the Akatsuki?", choices:["Nagato", "Pain", "Yahiko", "Obito/tobi"], answer:2
    },
    {
        question: "When did the term 'Legendary Sannins' was coined?", choices:["During the First Shinobi World War", "During the Second Shinobi World War", "During the third Shinobi World War", "During the Fourth Great Ninja War"], answer:1
    },
    {
        question: "Besides Might guy father Might duy, who else is dubbed as 'Eternal Genin'?", choices:["Naruto Uzumaki", "Kosuke Maruboshi", "Tobirama Senju", "Chōji Akimichi"], answer:1
    },
    {
        question: "Was naruto able to control his jinjuriki during the paint attack?", choices:["Yes, his father helped him", "Yes, he trained at Mount Myōboku to control the 9 tails power", "No, he wasn't able to control the 9 tails power", "No, he wasn't able to control the 9 tails but he became friend with kurama"], answer:1
    }
  
]
var container = $('.container');
var questionWrapper = '#question-wrapper';
var createFieldSet = '<fieldset></fieldset>'
var alreadyAnswered = false;
var page = 0;
var textNode = "";
var indexController = 0;
$(document).ready(function(){
    createQuiz(page);
    $("#navigate").on('click', function(){
         page += 1;
        if(page > 6) page = 0;
        indexController = page;
        createQuiz(page);
    });
    
    function createQuiz(crPage){
            textNode = Allquestions[indexController].question;
            switch (crPage) {
            case 0:
                $("legend").append(textNode);
                for(var i=0; i < Allquestions[indexController].choices.length; i++){
                    for(var j=0; j < Allquestions[indexController].choices; j++){
                    console.log(Allquestions[indexController].choices[j]);
                    break;
                }
                }
                
                break;
            case 1:
                $("legend").append(textNode);
                break;
            default:
                // code
            
        }
    }
})

      