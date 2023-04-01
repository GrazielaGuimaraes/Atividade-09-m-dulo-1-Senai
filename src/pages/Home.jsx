import { TodoList } from "../components/TodoList";
import { Formulario } from "../components/Formulario";
import { ToDoProvider } from "../contexts/ToDoProvider"

export const Home = () => {

  //Tarefa 06
  
  return (
    //Tarefa 05
    <ToDoProvider>
      <div className="row">
        <Formulario/> {/*Tarefa 07*/}
      </div>
      <div className="row">
        <TodoList name="A fazer"/> {/*Tarefa 07*/}
        <TodoList name="Finalizados"/> {/*Tarefa 07*/}
      </div>
    </ToDoProvider>
  );
};
