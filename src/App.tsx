import { Container } from "nl-ui";
import { useEffect, useState } from "react";
import { GetRandomColor } from "./Arrays/Colors";
import CreateNewTodoBtn from "./Components/CreateNewTodoBtn";
import CreateTodo from "./Components/CreateTodo";
import ProgressBar from "./Components/ProgressBar";
import Todo from "./Components/Todo";
import { ITodo } from "./TodoInterface";

function App() {

  const [Todos, setTodos] = useState<ITodo[]>([])
  const [CreateNewTodoFormClosed, setCreateNewTodoFormClosed] = useState(false)
  const [PercentageFinished, setPercentageFinished] = useState<number>(100);

  useEffect(() => {
    if(!Todos[0]) setPercentageFinished(100);
    const getPercent = () => {
      const TodosFinished = Todos.filter(todo => todo.Completed === true);
      const percent = ((TodosFinished.length / Todos.length) * 100);
      return percent;
    }
    const p = getPercent();
    if(Number.isNaN(p)) return;

    setPercentageFinished(parseFloat(p.toFixed(2)));

  }, [Todos])

  const handleAddTodo = async (todoText : string) => {
    const newTodo : ITodo = {
      id: Todos.length + 1,
      Text: todoText,
      color: GetRandomColor(),
      Completed: false
    }

    setTodos(Todos => [...Todos, newTodo]);
  }

  const handleOnComplete = (id : number) => {
    const temp = [...Todos];
    var i = temp.findIndex(todo => todo.id === id);
    temp[i].Completed = true;
    setTodos(temp)
  }

  const handleOnDelete = (id : number) => {
    const temp = [...Todos];
    var i = temp.findIndex(todo => todo.id === id);
    temp.splice(i, 1); 
    setTodos(temp)
  }

  return (
    <div className="px-4 py-6">
      <h1 className="font-semibold text-4xl text-white text-center">TODO APP</h1>

      <Container className="mt-2">
        <ProgressBar percent={PercentageFinished} />
        {CreateNewTodoFormClosed ? '' : <CreateTodo handleAddTodo={handleAddTodo} />}
        <div className="mt-4">
          {Todos?.filter(todo => todo.Completed === false).map((todo : ITodo, i : number) => {
            return (
              <Todo 
                todo={todo} 
                key={`Todo [${i}]`}
                style={{background: `repeating-linear-gradient(
                  45deg,
                  #${todo.color.hex_default}70,
                  #${todo.color.hex_default}70 10px,
                  #${todo.color.hex_light}70 10px,
                  #${todo.color.hex_light}70 20px
                )`}}
                onDelete={() => handleOnDelete(todo.id)}
                onComplete={() => handleOnComplete(todo.id)}
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
                style={{background: `repeating-linear-gradient(
                  45deg,
                  #${todo.color.hex_default}40,
                  #${todo.color.hex_default}40 10px,
                  #${todo.color.hex_light}40 10px,
                  #${todo.color.hex_light}40 20px
                )`}}
                onDelete={() => handleOnDelete(todo.id)}
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
