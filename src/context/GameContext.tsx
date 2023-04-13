import { createContext, ReactNode, useState } from 'react';
import { IGameContext } from '../interfaces/context';

export const GameContext = createContext<IGameContext>({} as IGameContext);

interface IGameProviderProps {
    children: ReactNode;
}

function GameProvider({ children }: IGameProviderProps) {
    const [points, setPoints] = useState(0);
    const [category, setCategory] = useState('');

    return <GameContext.Provider value={{ points, setPoints, category, setCategory }}>{children}</GameContext.Provider>;
}

export default GameProvider;
