export interface IGameContext {
    points: number;
    setPoints: (point: number) => void;
    category: string;
    setCategory: (category: string) => void;
}
