import {  Routes, Route } from "react-router-dom";
import Counter from "./Component/Counter";
import Todo from "./Component/TodoList/Todo";
import "./App.css";
import Calculator from "./Component/Calculator/Calculator";
import Digi from "./Component/DigitalClock/Digi";
import Quote from "./Component/Quotegen/Quote";

function App() {
  return (
   <div >
    
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
         <Route path="/calculator" element={<Calculator />} />
                  <Route path="/Digi" element={<Digi />} />
                                    <Route path="/quote" element={<Quote />} />
      </Routes>
      </div>
   
  );
}

export default App;
