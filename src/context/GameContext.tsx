import { createContext, ReactNode, useState } from 'react';
import { IGameContext } from '../interfaces/context';
import questions from '../json-files/trivia.json';

export const GameContext = createContext<IGameContext>({} as IGameContext);

interface IGameProviderProps {
    children: ReactNode;
}

function GameProvider({ children }: IGameProviderProps) {
    const [points, setPoints] = useState(0);
    const [category, setCategory] = useState('');
    const [questionState, setQuestionState] = useState(questions);

    function setAlreadyAnswered(questionParam: string) {
        const question = questions.find((question) => question.category === category);
        if (question) {
            question.questions = question.questions.filter((question) => question.question !== questionParam);
            const questionArray = [...questions, question];
            setQuestionState(questionArray);
        }
    }

    return (
        <GameContext.Provider
            value={{
                points,
                setPoints,
                category,
                setCategory,
                questions: questionState,
                setAlreadyAnswered
            }}
        >
            {children}
        </GameContext.Provider>
    );
}

export default GameProvider;
