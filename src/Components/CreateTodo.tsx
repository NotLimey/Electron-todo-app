import { useEffect, useRef, useState } from "react";
import { GetRandomColor } from "../Arrays/Colors";
import { ITodo, TodoDto } from "../TodoInterface";

interface CreateTodoProps {
    handleAddTodo: (todo : ITodo) => void;
}

const CreateTodo : React.FC<CreateTodoProps> = (props : CreateTodoProps, todos : ITodo[]) => {
    const [InputField, setInputField] = useState('');

    const HandleEnter = (text : string) => {
        var id = todos;
        console.log(id)
        const clr = GetRandomColor();
        const newTodo : ITodo = {
            id: todos.length,
            color: clr.hex_light,
            Text: text,
            Completed: false
          }
        props.handleAddTodo(newTodo);
    }
        

    useEffect(() => {
        const elem = window.document.getElementById('TodoText');
        elem?.addEventListener("keyup", function(event) {
            var value = (document.getElementById('TodoText') as HTMLInputElement).value;
            if (event.keyCode === 13)
                HandleEnter(value);
        }); 
    }, [])

    
    
    return (
        <div className="w-96 mt-5 flex flex-col">
          <label className="font-semibold">Task</label>
          <input 
            id="TodoText"
            className="rounded-t-sm focus:outline-none text-gray-300 py-1 bg-transparent border-b border-gray-200 focus:border-blue-400"
            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setInputField(e.target.value)}
          />
        </div>
    );
}

export default CreateTodo;