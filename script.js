// Simple lightbox functionality
const images = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.display = 'none';
lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
lightbox.style.zIndex = '1000';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.innerHTML = '<img id="lightbox-img" style="max-width: 90%; max-height: 90%;"><span id="close" style="position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; cursor: pointer;">&times;</span>';
document.body.appendChild(lightbox);

images.forEach(img => {
    img.addEventListener('click', () => {
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

document.getElementById('close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Fun Zone Quiz Game
const questions = [
    { question: "What is your best friend's favorite color?", answer: "blue" },
    { question: "Where did we first meet?", answer: "school" },
    { question: "What's our favorite adventure?", answer: "hiking" },
    { question: "What's the best memory?", answer: "graduation" }
];

let currentQuestion = 0;
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const nextBtn = document.getElementById('next');

function loadQuestion() {
    questionEl.textContent = questions[currentQuestion].question;
    answerEl.value = '';
    resultEl.textContent = '';
    nextBtn.style.display = 'none';
}

submitBtn.addEventListener('click', () => {
    const userAnswer = answerEl.value.toLowerCase().trim();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();
    if (userAnswer === correctAnswer) {
        resultEl.textContent = "Correct! You're a true best friend!";
        resultEl.style.color = 'green';
    } else {
        resultEl.textContent = `Wrong! The answer is: ${questions[currentQuestion].answer}`;
        resultEl.style.color = 'red';
    }
    nextBtn.style.display = 'inline-block';
});

nextBtn.addEventListener('click', () => {
    currentQuestion = (currentQuestion + 1) % questions.length;
    loadQuestion();
});

loadQuestion();