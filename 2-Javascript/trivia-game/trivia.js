// Declare variables and assign DOM elements
let currentQuestion = null;
const quiestionDiv = document.querySelector('#question');
const answerDiv = document.querySelector('#answer');
const feedbackDiv = document.querySelector("#feedback");

function getTriviaQuestion() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const index = Math.floor(Math.random() * questions.length);
			const question = questions[index];
			if (index > questions.length) {
				reject('An error occurred while fetching the trivia question.');
			}
			else {
				resolve(question);
			}
		}, 1000);
	});
}

function displayQuestion(triviaQuestion) {
	quiestionDiv.textContent = triviaQuestion.question;
	answerDiv.value = '';
	feedbackDiv.textContent = '';
}

document.querySelector('#questionBtn').addEventListener('click', () => {
	getTriviaQuestion().then((question) => {
		currentQuestion = question;
		displayQuestion(question);
	})
	.catch((error) => {
		console.log(error);
	})
})

document.querySelector('#answerBtn').addEventListener('click', () => {
	let feedbackMessage;
	const userAnswer = answerDiv.value.trim().toLowerCase();
	console.log(userAnswer, currentQuestion.answer);
	if (currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) {
		feedbackDiv.style.color = "green";
		feedbackMessage = "Great Job.";
	}
	else {
		feedbackDiv.style.color = "red";
		feedbackMessage = `Sorry, that is incorrect. The correct answer is: "${currentQuestion.answer}". Try another question!`;
	}
	feedbackDiv.textContent = feedbackMessage;
})