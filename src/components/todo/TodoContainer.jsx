import { useState } from "react";
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"


const TodoContainer = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "할 일 1",
            content: "할 일 1 내용",
            isDone: false,
        }
    ]);
    console.log("todos :>>", todos);
  return (
    <div>
        <TodoForm setTodos={setTodos}/>
        <div>
            <TodoList />
            <TodoList />
        </div>
    </div>
  );
};

export default TodoContainer;