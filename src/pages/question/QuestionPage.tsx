import './QuestionPage.scss';
import { useContext, useEffect, useState } from 'react';
import { IQuestionDetails } from '../../interfaces/questions';
import questions from '../../json-files/trivia.json';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import BackToRouletteButton from '../../components/back-to-roulette-button/BackToRouletteButton';

function QuestionPage() {
    const { category, setPoints, points } = useContext(GameContext);

    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(30);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState<string[]>([]);
    const [correctAnswer, setCorrectAnswer] = useState<string[]>([]);

    function getRandomQuestion() {
        const questionList: IQuestionDetails[] | undefined = questions.find((item) => item.category === category)?.questions;
        if (questionList) {
            const randomIndex = Math.floor(Math.random() * questionList.length);
            setQuestion(questionList[randomIndex].question);
            setAnswer(questionList[randomIndex].answer);
            setCorrectAnswer(questionList[randomIndex].correct);
        }
    }

    function handleButtonClick(chosenAnswer: string) {
        if (correctAnswer.includes(chosenAnswer)) {
            navigate('/yeah');
            setPoints(points + 1);
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

    if (!category) {
        return (
            <div className="question-container">
                <h1>Nicht schummeln!</h1>
                <img
                    src="/pictures/grumpy_unicorn_2.png"
                    alt="Grumpy Unicorn"
                    className="question-image"
                />
                <BackToRouletteButton />
            </div>
        );
    }

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
