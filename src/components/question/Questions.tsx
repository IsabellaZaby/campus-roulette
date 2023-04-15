import { useContext, useEffect, useState } from 'react';
import { IQuestionDetails } from '../../interfaces/questions';
import { GameContext } from '../../context/GameContext';
import { useNavigate } from 'react-router-dom';

interface IQuestionsProps {
    setEverythingAnswered: (bool: boolean) => void;
    setQuestionProps: (question: string) => void;
}

function Questions({ setEverythingAnswered, setQuestionProps }: IQuestionsProps) {
    const { category, setPoints, points, setAlreadyAnswered, questions } = useContext(GameContext);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState<string[]>([]);
    const [correctAnswer, setCorrectAnswer] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getRandomQuestion();
    }, []);

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

    function getRandomQuestion() {
        if (category === 'Baticorn') {
            navigate('/baticorn');
        } else if (category === 'Joker') {
            navigate('/joker');
        } else {
            const questionList: IQuestionDetails[] | undefined = questions.find((item) => item.category === category)?.questions;
            if (questionList && questionList.length > 0) {
                const randomIndex = Math.floor(Math.random() * questionList.length);
                setQuestion(questionList[randomIndex].question);
                setQuestionProps(questionList[randomIndex].question);
                setAnswer(questionList[randomIndex].answer);
                setCorrectAnswer(questionList[randomIndex].correct);
            } else {
                setEverythingAnswered(true);
            }
        }
    }

    return (
        <>
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
    );
}

export default Questions;
