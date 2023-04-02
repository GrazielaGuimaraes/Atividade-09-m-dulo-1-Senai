import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        {/*Tarefa 02 - Outlet é quem traz as rotas children*/}
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};
