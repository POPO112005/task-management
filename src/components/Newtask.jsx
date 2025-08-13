import { useRef, useState } from "react";
export default function Newtask({ addtask, theme }) {
  //   const [title, setTitle] = useState("");

  const title = useRef();
  const form = useRef();
  const submitform = (element) => {
    element.preventDefault();

    const task = {
      title: title.current.value,
      date: new Date().toLocaleString(),
    };
    addtask(task);

    form.current.reset();
  };
  return (
    <form ref={form} onSubmit={submitform}>
      <div className={`text-lg mb-2 w-full max-w-xl ${
            theme === "dark" ? "text-white" : "text-gray-500"
          }`}>
        <label
          htmlFor="title"
          
        >
          Add New Task
        </label>
      </div> 
      
      <div className="flex flex-col gap-2 bg-white rounded-md shadow-sm p-3 mt-2 text-gray-900 sm:w-full  sm:flex-row  ">
        <input
          type="text"
          id="title"
          className="flex-1 sm:w-full min-w-0 focus:outline-none"
          maxLength="30"
          placeholder="Type something here..."
          autoFocus
          required
          ref={title}
          //   value={title}
          //   onChange={(element)=>setTitle(element.target.value)}
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-3 py-2 rounded font-semibold bg-blue-500 text-white hover:bg-blue-600"
        >
          + Newtask
        </button>
      </div>
    </form>
  );
}
