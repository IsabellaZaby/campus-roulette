import './QuestionPage.scss';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import NoCheatingDisplay from '../../components/no-cheating-display/NoCheatingDisplay';
import EverythingAnswered from '../../components/everything-answered/EverythingAnswered';
import Questions from '../../components/question/Questions';

function QuestionPage() {
    const { category } = useContext(GameContext);

    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(10);
    const [question, setQuestion] = useState('');
    const [everythingAnswered, setEverythingAnswered] = useState(false);

    useEffect(() => {
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
                    <h2>{category}</h2>
                    <h1>{question}</h1>
                    <span className="question-timer-text">
                        Zeit übrig: <strong>{countdown}</strong>
                    </span>
                    <Questions
                        setEverythingAnswered={setEverythingAnswered}
                        setQuestionProps={setQuestion}
                    />
                </>
            </div>
        </div>
    );
}

export default QuestionPage;
