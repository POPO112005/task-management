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
      <div className={`text-lg mb-2  ${
            theme === "dark" ? "text-white" : "text-gray-500"
          }`}>
        <label
          htmlFor="title"
          
        >
          Add New Task
        </label>
      </div> 
      
      <div className="flex  gap-x-2 bg-red-500 md:bg-white rounded-md shadow-sm p-2 pl-3 mt-2 text-gray-900 md:flex  md:w-full w-[400px]">
        <input
          type="text"
          id="title"
          className="focus:outline-none md:w-full w-[400px]"
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
          className="px-3 py-2 rounded font-semibold bg-blue-500 text-white hover:bg-blue-600 w-40"
        >
          + Newtask
        </button>
      </div>
    </form>
  );
}
