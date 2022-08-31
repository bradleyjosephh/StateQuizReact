import React, { useState } from 'react';

export default function App() {
	const questions = [
		{ //1
			questionText: "What is state capital of Arkansas?",
			answerOptions: [ 
				{answerText: 'Hartford', isCorrect: false},
				{answerText: 'Springfield', isCorrect: false},
				{answerText: 'Topeka', isCorrect: false},
				{answerText: 'Little Rock', isCorrect: true },  
			],  
		},
		{ //2
			questionText: "What is the capital of Hawaii",
			answerOptions: [ 
				{answerText: "Honolulu", isCorrect: true},
				{answerText: "Bismarck", isCorrect: false},
				{answerText: "Pierre", isCorrect: false},
				{answerText: "Helena", isCorrect: false}, 
			],
		},
		{ //3
			questionText: "_____ is the capital of Nevada",
			answerOptions: [
				{answerText: "Carson City", isCorrect: true},
				{answerText: "Salem", isCorrect: false},
				{answerText: "Columbus", isCorrect: false},
				{answerText: "Concord", isCorrect: false},
		 ],
		},
		{ //4
			questionText: "What is the capital city in New York",
			answerOptions: [ 
				{answerText: "Harrisburg", isCorrect: false},
				{answerText: "Richmond", isCorrect: false},
				{answerText: "Sante Fe", isCorrect: false},
				{answerText: "Albany", isCorrect: true}, 
			], 
		},
		{ //5
			questionText: "West virginia has the capital city of?",
			answerOptions: [
				{answerText: 'Salt Lake City',isCorrect: false},
				{answerText: 'Charleston', isCorrect: true},
				{answerText: 'Albany', isCorrect: false},
				{answerText: 'Trenton', isCorrect: false}, 
			],
		},
		{ //6
			questionText: 'What is the capital of Texas?',
			answerOptions: [
				{answerText: "Providence", isCorrect: false},
				{answerText: "Salt Lake City", isCorrect: false},
				{answerText: "Austin", isCorrect: true},
				{answerText: "Olympia", isCorrect: false},
			],
		},
		{ //7
			questionText: "Delaware has a state capital of?",
			answerOptions: [
				{answerText: "Boise",isCorrect: false},
				{answerText: "Dover", isCorrect: true},
				{answerText: "Boston",isCorrect: false},
				{answerText: "Augusta",isCorrect: false},
			],
		},
		{ //8
			questionText: "_____ is the capital of the state of Tennessee",
			answerOptions: [
				{answerText: "Montegomery", isCorrect: false},
				{answerText: "Jackson", isCorrect: false},
				{answerText: "Madison", isCorrect: false},
				{answerText: "Nashville", isCorrect: true},
			],
		},
		{ //9
			questionText: "What is the capital in the state of Florida?",
			answerOptions: [
				{answerText: "Annapolis",isCorrect: false},
				{answerText: "Tallahassee", isCorrect: true},
				{answerText: "Jefferson Ciy",isCorrect: false},
				{answerText: "Raleigh",isCorrect: false},
			],
		},
		{ //10
			questionText: "Wyoming has _____  as a state capital",
			answerOptions: [
				{answerText: "Charleston", isCorrect: false},
				{answerText: "Concord", isCorrect: false},
				{answerText: "Cheyenne", isCorrect: true},
				{answerText: "Carson City", isCorrect: false}, 
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
