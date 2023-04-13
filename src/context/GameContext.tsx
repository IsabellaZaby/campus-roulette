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

    function setAlreadyAnswered(question: string) {}

    return <GameContext.Provider value={{ points, setPoints, category, setCategory, questions }}>{children}</GameContext.Provider>;
}

export default GameProvider;
