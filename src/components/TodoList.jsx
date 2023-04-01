import { useTodos } from "../contexts/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ name }) => {

  //Tarefa 08
  const {completedToDos, pendingToDos } = useTodos()

  return (
    <section className="col p-2 m-2 border rounded-1">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">

        {/*Tarefa 08*/}
        { name === "Finalizados"
        ? completedToDos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
        : pendingToDos.map((todo) => <TodoItem key={todo.id} todo={todo}/>) }

      </ul>
    </section>
  );
};
