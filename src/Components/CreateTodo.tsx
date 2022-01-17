interface CreateTodoProps {
    handleAddTodo: (todoText : string) => void;
}

const CreateTodo : React.FC<CreateTodoProps> = (props : CreateTodoProps) => {

    return (
        <div className="w-96 mt-5 flex flex-col">
          <label className="font-semibold">Task</label>
          <input 
            id="TodoText"
            className="rounded-t-sm focus:outline-none text-gray-300 py-1 bg-transparent border-b border-gray-200 focus:border-blue-400"
            onKeyDown={(e : any) => e.keyCode === 13 ? props.handleAddTodo(e.target.value) : null }
          />
        </div>
    );
}

export default CreateTodo;