import { Container } from "nl-ui";
import { useEffect, useState } from "react";
import { Colors, IColor } from "./Arrays/Colors";
import CreateNewTodoBtn from "./Components/CreateNewTodoBtn";
import CreateTodo from "./Components/CreateTodo";
import ProgressBar from "./Components/ProgressBar";
import Todo from "./Components/Todo";
import { ITodo, TodoDto } from "./TodoInterface";

function App() {

  const [Todos, setTodos] = useState<ITodo[]>([])
  const [CreateNewTodoFormClosed, setCreateNewTodoFormClosed] = useState(false)

  const handleAddTodo = (todo : ITodo) => {
    setTodos(Todos => [...Todos, todo]);
  }

  useEffect(() => {
    console.log(Todos);
  }, [Todos])

  const handleOnComplete = (index : number) => {
    const temp = [...Todos];
    temp[index].Completed = true;
    setTodos(temp)
  }

  const handleOnDelete = (index : number) => {
    const temp = [...Todos];
    temp.splice(index, 1);
    setTodos(temp)
  }

  return (
    <div className="px-4 py-6">
      <h1 className="font-semibold text-4xl text-white text-center">TODO APP</h1>

      <Container className="mt-2">
        <ProgressBar percent="25" />
        {CreateNewTodoFormClosed ? '' : <CreateTodo todos={Todos} handleAddTodo={handleAddTodo} />}
        <div className="mt-4">
          {Todos?.filter(todo => todo.Completed === false).map((todo : ITodo, i : number) => {
            return (
              <Todo 
                todo={todo} 
                key={`Todo [${i}]`}
                style={{backgroundColor: '#' + todo.color}}
                onDelete={() => handleOnDelete(i)}
                onComplete={() => handleOnComplete(i)}
              />
            )
          })}
        </div>
        <div className="mt-8">
          <h2>Completed: </h2>
          {Todos?.filter(todo => todo.Completed === true).map((todo : ITodo, i : number) => {
            return (
              <Todo 
                todo={todo} 
                key={`Todo [${i}]`}
                style={{backgroundColor: '#' + todo.color}}
                onDelete={() => handleOnDelete(i)}
              />
            )
          })}
        </div>
      </Container>

      <CreateNewTodoBtn close={!CreateNewTodoFormClosed} onClick={() => {setCreateNewTodoFormClosed(!CreateNewTodoFormClosed)}} />
    </div>
  );
}

export default App;
