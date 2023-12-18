import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import { Provider } from "react-redux";
import { store } from "./store";
import TodoAdd from "./routes/todo/add";
import TodoHistory from "./routes/todo/history";
import TodoTask from "./routes/todo/task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/todo/add",
    element: <TodoAdd />,
  },
  {
    path: "/todo/history",
    element: <TodoHistory />,
  },
  {
    path: "/todo/tasks/:id",
    element: <TodoTask />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
