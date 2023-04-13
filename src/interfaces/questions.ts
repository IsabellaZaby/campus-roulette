export interface IQuestion {
    category: string;
    questions: IQuestionDetails[];
}

export interface IQuestionDetails {
    question: string;
    answer: string[];
    correct: string[];
    alreadyAnswered: boolean;
}
