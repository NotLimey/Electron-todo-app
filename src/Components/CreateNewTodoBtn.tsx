import { AiOutlinePlus } from 'react-icons/ai'

interface CreateNewTodoBtnProps {
    onClick: () => void;
    close?: boolean
}

const CreateNewTodoBtn : React.FC<CreateNewTodoBtnProps> = (props : CreateNewTodoBtnProps) => {
    return (
        <div className="create-new-todo-btn text-gray-100 font-semibold">
            <p className='py-1 px-2 rounded-md' style={{backgroundColor: '#2E2C29'}}>{props.close ? 'Close create new todo' : 'Create new Todo'}</p> <span className='bg-blue-500 p-4 shadow-lg rounded-full' onClick={props.onClick} style={props.close ? { transform: 'rotate(45deg)'} : {}}><AiOutlinePlus /></span>
        </div>
    );
}

export default CreateNewTodoBtn;