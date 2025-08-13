import { useState, useEffect } from "react";
import Newtask from "../components/Newtask";
import Todoitem from "../components/Todoitem";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { useOutletContext } from "react-router-dom";
export default function Home() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const { theme } = useOutletContext();
  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }
  const addtask = async (task) => {
    setLoading(true);
    setTodos((prevTodos) => [...prevTodos, task]);
    await delay();
    setLoading(false);
    
  };
  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== id));
    toast.success("Successfully Deleted!");
  };
  const updateTask = (task, id) => {
    setTodos((prevTodos) => prevTodos.map((t, i) => (i === id ? task : t)));
  };
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <  >
      
      <div>
        <Newtask addtask={addtask} theme={theme} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        todos.length > 0 && (
          <div className=" justify-center sm:w-full ">
          <ul className="bg-gray-200 rounded-md shadow-sm p-4 text-gray-900 ">
            {todos.map((todo, i) => (
              <Todoitem
                key={i}
                id={i}
                todo={todo}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </ul>
          </div>
        )
      )}
    </>
  );
}
