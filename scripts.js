document.addEventListener('DOMContentLoaded', function() {
    // Fetch and inject the navbar HTML
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;
        });
});


// ADDING UP score for quiz
// function scoreQuiz() {
//     var correct=0;
//     if(document.quiz.answer1[2].checked == true){
//         correct = correct + 1;
//     }
//     if(document.quiz.answer2[2].checked == true){
//         correct = correct + 1;
//     }
//     if(document.quiz.answer3[0].checked == true){
//         correct = correct + 1;
//     }
//     if(document.quiz.answer4[2].checked == true){
//         correct = correct + 1;
//     }
//     if(document.quiz.answer5[1].checked == true){
//         correct = correct + 1;
//     }
//     if(document.quiz.answer6[1].checked == true){
//         correct = correct + 1;
//     }
//     var name = document.quiz.name.value;
//     var score = "you have " + correct + " correct answers.";

//     // Redirect to the next page with the score as a parameter
//     window.location.href = "quiz1score.html?score=" + encodeURIComponent(score);
// }
function scoreQuiz() {
    var correct = 0;

    var answer1 = document.querySelector('input[name="answer1"]:checked').value;
    var answer2 = document.querySelector('input[name="answer2"]:checked').value;
    var answer3 = document.querySelector('input[name="answer3"]:checked').value;
    var answer4 = document.querySelector('input[name="answer4"]:checked').value;
    var answer5 = document.querySelector('input[name="answer5"]:checked').value;
    var answer6 = document.querySelector('input[name="answer6"]:checked').value;

    if (answer1 === 'Wyoming, America') {
        correct = correct + 1;
    }
    if (answer2 === '18') {
        correct = correct + 1;
    }
    if (answer3 === 'Paint which reflected his feelings') {
        correct = correct + 1;
    }
    if (answer4 === 'Abstract Expressionism') {
        correct = correct + 1;
    }
    if (answer5 === 'Drip stick') {
        correct = correct + 1;
    }
    if (answer6 === 'Jack the dripper') {
        correct = correct + 1;
    }

    var name = document.quiz.name.value;
    var score = "You have " + correct + " correct answers.";

    // Redirect to the next page with the score and answers as parameters
    window.location.href = "quiz1score.html?score=" + encodeURIComponent(score) +
        "&answer1=" + encodeURIComponent(answer1) +
        "&answer2=" + encodeURIComponent(answer2) +
        "&answer3=" + encodeURIComponent(answer3) +
        "&answer4=" + encodeURIComponent(answer4) +
        "&answer5=" + encodeURIComponent(answer5) +
        "&answer6=" + encodeURIComponent(answer6);
}
