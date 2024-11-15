const correctPassword = 'techday';

function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.getElementById('login-container');
    const quizContainer = document.getElementById('quiz-container');

    if (passwordInput === correctPassword) {
        loginContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        startTimer();
    } else {
        errorMessage.textContent = 'Contraseña incorrecta.';
    }
}

function startTimer() {
    setTimeout(() => {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('scare-container').style.display = 'block';
    }, 3000); // Tiempo en milisegundos (3 segundos)
}

function submitQuiz() {
    const answers = [
        document.getElementById('question1').value.trim().toLowerCase(),
        document.getElementById('question2').value.trim(),
        document.getElementById('question3').value.trim(),
        document.getElementById('question4').value.trim().toLowerCase()
    ];

    const correctAnswers = ['azul', '7', '4', '4'];

    if (answers.every((answer, index) => answer === correctAnswers[index])) {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('scare-container').style.display = 'block';
    } else {
        document.getElementById('quiz-error-message').textContent = 'Respuestas incorrectas. Inténtalo de nuevo.';
    }
}
