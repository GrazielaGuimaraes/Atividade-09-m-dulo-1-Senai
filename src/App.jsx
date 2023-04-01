import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        {/*Tarefa 02 - Outlet é quem traz as rotas children*/}
        <Outlet/>
      </main>
    </div>
  );
};
