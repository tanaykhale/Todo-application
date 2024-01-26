import { useState } from "react";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";

import "./App.css";
export default function App() {
  const [tasks, setTasks] = useState("");
  const [todo, setTodo] = useState<any[]>([]);

  const handleDelete = (id: string) => {
    const newArr = todo.filter((value: any) => value.id !== id);
    setTodo(newArr);
  };

  const handleCheckbox = (index: number) => {
    const updatetodo = [...todo];
    updatetodo[index].completed = !updatetodo[index].completed;
    setTodo(updatetodo);
  };

  const handleTodo = (e: any) => {
    e.preventDefault();
    setTasks("");
    let obj = { id: crypto.randomUUID() + 1, value: tasks, completed: false };
    setTodo([...todo, obj]);
  };

  const handleChange = (e: any) => {
    setTasks(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>

        <Todoform
          tasks={tasks}
          handleChange={handleChange}
          handleTodo={handleTodo}
        />
        <Todolist
          todo={todo}
          handleCheckbox={handleCheckbox}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}
