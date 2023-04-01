

import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/Home";
import { QuemSou } from "./pages/QuemSou"

//Tarefa 01 - criar rotas
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path:"/home", element: <Home/>},
      {path: "/quemsou", element: <QuemSou/>}
    ],
  },
]);
