const questions = [
    {
        question: "Quem Investigou a relação Eletricidade e Magnetissimo?",
        Answers: [
            { text: "Nicola Tesla", correct: false },
            { text: "Isaac Newton", correct: false },
            { text: "Michael Faraday", correct: true},
            { text: "Alveiro Lavosier ", correct: false },
        ]
    },
    {
        question: "A onda eletromagnética é uma onda…",
        Answers: [
            { text: "longitudinal", correct: false },
            { text: "Perpendicular", correct: false },
            { text: "Paralela", correct: false },
            { text: "Transversal", correct: true },
        ]
    },
    {
        question: "A refração pode ser experimentada na onda eletromagnética?" ,
        Answers: [
            { text: "Sim", correct: true },
            { text: "não", correct: false },
            { text: "Sim", correct: true },
            { text: "não", correct: false },
        ]
    },
    {
        question: "O que normalmente é usada para comunicações, cozinha e radar?",
        Answers: [
            { text: "micro-ondas", correct: true },
            { text: "Raio UV", correct: false },
            { text: "Luz Visível", correct: false},
            { text: "Espetro", correct: false },
        ]
    },
    {
        question: "O que podem ser produzidos por moléculas e objetos quentes e que podem ser usados nas áreas industriais, médica e astronômica?        ?",
        Answers: [
            { text: "micro-ondas", correct: false },
            { text: "Raio UV", correct: true },
            { text: "Luz Visível", correct: false},
            { text: "Espetro", correct: false },
        ]
    },
    {
        question: "Qual é a radiação que se pode detetar pelo olho humano?",
        Answers: [
            { text: "micro-ondas", correct: false },
            { text: "Raio UV", correct: false},
            { text: "Luz Visível", correct: true},
            { text: "Espetro", correct: false },
        ]
    },
    {
        question: "Intensidade de ondas eletromagnéticas ou taza na qual a energia transferida é chamada:?",
        Answers: [
            { text: "Espetro", correct: false },
            { text: "Pontar", correct: true },
            { text: "Luz", correct: false },
            { text: "Intensidade", correct: false },
        ]
    },
    {
        question: "A radiação seria constituída por um feixe de partículas, fotões, cuja energia era proporcional à frequência da radiação, é baseado nos estudos de: ?",
        Answers: [
            { text: "Antoine de Lavoisier", correct: false },
            { text: "Max Stall", correct: false },
            { text: "Albert Einsten", correct: true },
            { text: "Charles Darwin", correct: false },
        ]
    },
    {
        question: " A constante de proporcionalidade entre a energia e a frequência é denominada por :",
        Answers: [
            { text: "constante de Avogrado", correct: false },
            { text: "Constade de Plank", correct: true },
            { text: "Constante de boltzmann", correct: false },
            { text: "Constante de Faraday", correct: false},
        ]
    },
    {
        question: "A energia e comprimento de onda são grandezas:",
        Answers: [
            { text: "Inversamente paralelas", correct: false },
            { text: "Inversamente e diretamente", correct: false },
            { text: "inversamente proporcionais", correct: true },
            { text: "São correctos", correct: false },
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



