import {  Routes, Route } from "react-router-dom";
import Counter from "./Component/Counter";
import Todo from "./Component/TodoList/Todo";
import "./App.css";

function App() {
  return (
   <div >
    
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      </div>
   
  );
}

export default App;
