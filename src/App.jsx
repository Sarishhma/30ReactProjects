import {  Routes, Route } from "react-router-dom";
import Counter from "./Component/Counter";

function App() {
  return (
   
    
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
   
  );
}

export default App;
