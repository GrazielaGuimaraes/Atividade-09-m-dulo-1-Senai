//import { useContext } from "react"
//custom hook
import { useContext } from "react"
import { toDoContext } from "./ToDoProvider"

export const useTodos = () => {

    const context = useContext(toDoContext)

    return context
}