
//Criar contexto
//import { createContext } from "react";
import { useState } from "react"
import { createContext } from "react"

const toDoContext = createContext() 

export  {toDoContext}

           
//Tarefa 05
export const ToDoProvider = ({children}) => {

    //Tarefa 06
    const [toDos, setToDos] = useState([
        { id: 1, text: "Estudar React", done: false },
        { id: 2, text: "Praticar com um projeto", done: true },
        { id: 3, text: "Divulgar meu resultado no LinkedIn", done: false },
      ]);


     
      const addToDo = (text) => {
        const newToDo = {
          id: Date.now(), //Poderia ser id: toDos.length + 1
          text,
          done: false,
        };
        setToDos([...toDos, newToDo]);
      };
    
      //Marcar e desmarcar checkbox finalizadas
      const markTodo = (id) => {
        const newToDos = toDos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, done: !todo.done };
          }
          return todo;
        });
        setToDos(newToDos);
      };
    
      //Filtram tarefas finalizadas e não finalizadas
      const completedToDos = toDos.filter((todo) => todo.done);
      const pendingToDos = toDos.filter((todo) => !todo.done);
    




    return (
        <toDoContext.Provider value={{addToDo, markTodo, completedToDos, pendingToDos}}>
            {children}
        </toDoContext.Provider>

    )
    }


