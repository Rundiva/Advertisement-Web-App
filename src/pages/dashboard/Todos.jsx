import { useEffect, useState } from "react";
import TodoTile from "./TodoTile";
import { Link } from "react-router-dom";
import axios from "axios";

const Todos = () => {
    //1.Declare state to store todos
    const [todos, setTodos] = useState([]);
    //2. Define a function to get todos
    const getTodos = async () => {
        //Use axios to get todos
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos?limit=0&skip=5`);
        console.table(response.data);
        //Update todos state
        setTodos(response.data);
        
    }

    //3. Call the function with useEffect
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">All Todos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {todos.map((todo) => (
            <TodoTile key={todo.id} title={todo.title} icon={todo.icon} />
          ))}
        </div>
        <Link
          to="/dashboard"
          className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Todo
        </Link>
      </div>
    );
}

export default Todos;