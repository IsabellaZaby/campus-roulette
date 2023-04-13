import { IQuestion } from './questions';

export interface IGameContext {
    points: number;
    setPoints: (point: number) => void;
    category: string;
    setCategory: (category: string) => void;
    questions: IQuestion[];
    setAlreadyAnswered: (questionParam: string) => void;
    reset: () => void;
}
