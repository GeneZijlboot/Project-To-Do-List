import React, { useState } from "react";
import './index.css'; 

const App = ({ name }) => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal) {
      if (editIndex !== null) {
        // Update the task at the editIndex
        const newTodos = [...todos];
        newTodos[editIndex] = inputVal;
        setTodos(newTodos);
        setEditIndex(null); // Clear the editIndex
      } else {
        // Add a new task
        setTodos([...todos, inputVal]);
      }
      setInputVal('');
    } else {
      alert("You can't submit an empty to-do darling.");
    }
  };  

  const HandleDelete = (index) => {
    const newTodos = [...todos];
    setInputVal('deleted bby');
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const HandleEdit = (index) => {
    setEditIndex(index);
    setInputVal(todos[index]);
  }
  

  return (
    <section>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      <ul>
        {todos.map((todo, index) => (
          <div key={index} className="ToDos">
            <li>{todo}</li>
            <div>
              <button onClick={() => HandleDelete(index)}>delete</button>
              <button onClick={() => HandleEdit(index)}>Edit</button>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default App;