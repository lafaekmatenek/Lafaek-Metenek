const questions = [
    {
        question: "Diferente entre Protetista no Protesionismo?",
        Answers: [
            { text: "Protetista ", correct: true },
            { text: "Valentina", correct: false },
            { text: "Sancho", correct: false },
            { text: "Remizio", correct: false },
        ]
    },
    {
        question: "Sekulu hira maka mosu tendensia ba Kresimentu?",
        Answers: [
            { text: "Sec XVIII d.c", correct: true },
            { text: "Sec XVII a.c", correct: false },
            { text: "Sec XI d.c", correct: false },
            { text: "Sec X d.c", correct: false },
        ]
    },
    {
        question: "Sekulu hira maka mosu Estagnasaun ba Kresimentu",
        Answers: [
            { text: "Sec XVI d.c", correct: false },
            { text: "Sec X a.c", correct: false },
            { text: "Sec XVII d.c", correct: true },
            { text: "Sec XI a.c", correct: false },
        ]
    },
    {
        question: "Se mak nonok halo pratica deit Teoria laiha atu explica?",
        Answers: [
            { text: "Roque", correct: false },
            { text: "Valentina", correct: false },
            { text: "Sancho", correct: false },
            { text: "Remizio", correct: true },
        ]
    },
    {
        question: "Se mak nonok halo pratica deit Teoria laiha atu explica?",
        Answers: [
            { text: "Roque", correct: false },
            { text: "Valentina", correct: false },
            { text: "Sancho", correct: false },
            { text: "Remizio", correct: true },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function starQuiz() {
    currentQuestionIndex = 0,
        score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;

    currentQuestion.Answers.forEach(Answers => {
        const button = document.createElement("button");
        button.innerHTML = Answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (Answers.correct) {
            button.dataset.correct = Answers.correct;
        }
        button.addEventListener("click", selectAnswers);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswers(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.
        length}!`;
        nextButton.innerHTML ="Play Again"
        nextButton.style.display ="block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}




nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        starQuiz();
    }
});

starQuiz();



