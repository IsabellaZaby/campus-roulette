import './QuestionPage.scss';
import { useContext, useEffect, useState } from 'react';
import { IQuestionDetails } from '../../interfaces/questions';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import NoCheatingDisplay from '../../components/no-cheating-display/NoCheatingDisplay';
import EverythingAnswered from '../../components/everything-answered/EverythingAnswered';

function QuestionPage() {
    const { category, setPoints, points, setAlreadyAnswered, questions } = useContext(GameContext);

    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(10);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState<string[]>([]);
    const [correctAnswer, setCorrectAnswer] = useState<string[]>([]);
    const [everythingAnswered, setEverythingAnswered] = useState(false);

    function getRandomQuestion() {
        if (category === 'Batman') {
            navigate('/batman');
        } else if (category === 'Joker') {
            navigate('/joker');
        } else {
            const questionList: IQuestionDetails[] | undefined = questions.find((item) => item.category === category)?.questions;
            if (questionList && questionList.length > 0) {
                const randomIndex = Math.floor(Math.random() * questionList.length);
                setQuestion(questionList[randomIndex].question);
                setAnswer(questionList[randomIndex].answer);
                setCorrectAnswer(questionList[randomIndex].correct);
            } else {
                setEverythingAnswered(true);
            }
        }
    }

    function handleButtonClick(chosenAnswer: string) {
        if (correctAnswer.includes(chosenAnswer)) {
            setPoints(points + 1);
            navigate('/yeah');
        } else {
            setPoints(points - 1);
            navigate('/neah');
        }
        setAlreadyAnswered(question);
    }

    useEffect(() => {
        getRandomQuestion();

        let intervalId = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        const timeout = setTimeout(function () {
            navigate('/timeout');
        }, 10000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeout);
        };
    }, []);

    if (!category) {
        return <NoCheatingDisplay />;
    }

    if (everythingAnswered) {
        return <EverythingAnswered />;
    }

    return (
        <div className="page-wrapper">
            <div className="question-container">
                <>
                    <h1>{question}</h1>
                    <span className="question-timer-text">
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
