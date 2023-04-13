import './QuestionPage.scss';
import { useContext, useEffect, useState } from 'react';
import { IQuestion } from '../../interfaces/questions';
import questions from '../../json-files/trivia.json';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';

function QuestionPage() {
    const { category } = useContext(GameContext);

    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(30);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState<string[]>([]);
    const [correctAnswer, setCorrectAnswer] = useState<string[]>([]);

    const questionList: IQuestion[] = questions.filter((item) => item.category === category);

    function getRandomQuestion() {
        if (questionList[0].questions.length > 0) {
            const randomIndex = Math.floor(Math.random() * questionList[0].questions.length);
            setQuestion(questionList[0].questions[randomIndex].question);
            setAnswer(questionList[0].questions[randomIndex].answer);
            setCorrectAnswer(questionList[0].questions[randomIndex].correct);
        }
    }

    function handleButtonClick(chosenAnswer: string) {
        if (correctAnswer.includes(chosenAnswer)) {
            navigate('/yeah');
        } else {
            navigate('/neah');
        }
    }

    useEffect(() => {
        getRandomQuestion();

        let intervalId = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        const timeout = setTimeout(function () {
            navigate('/timeout');
        }, 30000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeout);
        };
    }, []);

    // TODO error validation

    return (
        <div className="question-page-wrapper">
            <div className="question-container">
                <>
                    <h1>{question}</h1>
                    <span style={{ fontSize: '2rem', marginBottom: '20px' }}>
                        Zeit übrig: <strong>{countdown}</strong>
                    </span>
                    {answer.length > 0 &&
                        answer.map((entry) => (
                            <button
                                className="answer-button"
                                value={entry}
                                onClick={() => handleButtonClick(entry)}
                            >
                                {entry}
                            </button>
                        ))}
                </>
            </div>
        </div>
    );
}

export default QuestionPage;
