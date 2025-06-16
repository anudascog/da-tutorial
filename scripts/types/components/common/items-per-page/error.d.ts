export declare class ChoiceIsNaNError extends Error {
    constructor(choice: string);
}
export declare class InitialChoiceNotInChoicesError extends Error {
    constructor(initialChoice: number, choices: number[]);
}
