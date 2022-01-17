import { IColor } from "./Arrays/Colors";

export interface ITodo {
    id: number,
    Text: string,
    Completed: boolean,
    color: IColor
}