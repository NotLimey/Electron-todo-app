import { IColor } from "../Arrays/Colors";
import { ITodo } from "../TodoInterface";
import CSS from 'csstype';
import React from "react";
import { AiFillCheckCircle, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

interface TodoProps {
    todo: ITodo;
    style?: CSS.Properties;
    onComplete?: () => void;
    onDelete?: () => void;
}

const Todo : React.FC<TodoProps> = (props : TodoProps) => {
    return (
        <div className={`px-3 py-2 text-gray-100 rounded-lg mb-4 ${props.todo.Completed && 'opacity-50'}`} style={props.style}>
            <div className="flex justify-between items-center">
                <p className="font-semibold text-base">{props.todo.Text}</p>
                <div className="flex">
                    {props.onComplete !== undefined &&
                        <span onClick={props.onComplete} className="text-xl font-bold cursor-pointer hover:opacity-50"><AiOutlineCheck /></span>
                    }
                    {props.onDelete !== undefined &&
                        <span onClick={props.onDelete} className="text-xl font-bold cursor-pointer hover:opacity-50"><AiOutlineClose /></span>
                    }
                </div>
            </div>
        </div>
    );
}

export default Todo;