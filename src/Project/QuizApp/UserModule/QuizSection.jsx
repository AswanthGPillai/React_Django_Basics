import React, { useState } from 'react'

const QuizSection = () => {

    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [selectedAnswer, setSelectedAnswer] = useState('')

    const questions = [
        {
            id: 1,
            question: 'What is the capital of India?',
            options: ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'],
            answer: 'New Delhi'
        },
        {
            id: 2,
            question: 'Which language is used to build React applications?',
            options: ['Python', 'Java', 'JavaScript', 'C++'],
            answer: 'JavaScript'
        },
        {
            id: 3,
            question: 'Which planet is known as the Red Planet?',
            options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
            answer: 'Mars'
        },
        {
            id: 4,
            question: 'How many days are there in a week?',
            options: ['5', '6', '7', '8'],
            answer: '7'
        },
        {
            id: 5,
            question: 'Which HTML tag is used to create a hyperlink?',
            options: ['<p>', '<a>', '<h1>', '<link>'],
            answer: '<a>'
        },
        {
            id: 6,
            question: 'Which method is used to add an item to the end of an array?',
            options: ['push()', 'pop()', 'shift()', 'unshift()'],
            answer: 'push()'
        },
        {
            id: 7,
            question: 'What does CSS stand for?',
            options: [
                'Computer Style Sheets',
                'Cascading Style Sheets',
                'Creative Style System',
                'Colorful Style Sheets'
            ],
            answer: 'Cascading Style Sheets'
        },
        {
            id: 8,
            question: 'Which keyword is used to declare a constant in JavaScript?',
            options: ['var', 'let', 'const', 'static'],
            answer: 'const'
        },
        {
            id: 9,
            question: 'Which company developed React?',
            options: ['Google', 'Microsoft', 'Facebook', 'Amazon'],
            answer: 'Facebook'
        },
        {
            id: 10,
            question: 'Which hook is used to manage state in a React component?',
            options: ['useEffect', 'useState', 'useRef', 'useContext'],
            answer: 'useState'
        }
    ]


    const question = questions[currentQuestion]

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer('')
        }
    }

    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
            setSelectedAnswer('')
        }
    }

    const handleScore = (option) => {
        if (selectedAnswer !== '') {
            return
        }
        setSelectedAnswer(option)
        if (option == question.answer) {
            setScore(score + 1)
        }
    }

    return (
        <div className="container mt-4">

            <div className="text-end mb-3">
                <span className="text-muted border border-2 border-primary p-2 rounded">
                    Score: {score}
                </span>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-7">

                    <div className="card shadow border-0">
                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between mb-4">
                                <span className="badge bg-primary">
                                    Question {question.id} of {questions.length}
                                </span>
                            </div>

                            <h4 className="mb-4">
                                {question.question}
                            </h4>

                            <div className="list-group mb-4">

                                {question.options.map((option, index) => (
                                    <button key={index} className="list-group-item list-group-item-action" onClick={() => handleScore(option)} disabled={selectedAnswer !== ''}>
                                        {option}   {selectedAnswer !== '' && (
                                            <span className="float-end">
                                                {option === question.answer ? '✓' : '✗'}
                                            </span>
                                        )}
                                    </button>
                                ))}

                            </div>

                            <div className="d-flex justify-content-between">

                                {/* <button className="btn btn-secondary" onClick={previousQuestion} disabled={currentQuestion == 0}>
                                    Previous
                                </button> */}

                                <button className="btn btn-primary" onClick={nextQuestion} disabled={currentQuestion == questions.length - 1}>
                                    {currentQuestion == questions.length - 1 ? "Finished" : "Next"}
                                </button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default QuizSection