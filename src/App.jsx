import {  Routes, Route } from "react-router-dom";
import Counter from "./Component/Counter";
import Todo from "./Component/TodoList/Todo";
import "./App.css";
import Calculator from "./Component/Calculator/Calculator";
import Digi from "./Component/DigitalClock/Digi";
import Quote from "./Component/Quotegen/Quote";
import Pass from "./Component/passwordGen/pass";
import Weather from "./Component/WeatherApp/Weather";
import Recipe from "./Component/Recipe/Recipe";
import Expensepage from "./Pages/Expensepage";
import Movie from "./Component/Movie/movie";
import Test from "./Component/Test/Test";
import QuizApp from "./Component/QuizApp/QuizApp";

function App() {
  return (
   <div >
    
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
         <Route path="/calculator" element={<Calculator />} />
                  <Route path="/Digi" element={<Digi />} />
                                    <Route path="/quote" element={<Quote />} />
                                     <Route path="/pass" element={<Pass/>} />
                                     <Route path="/weather" element={<Weather/>} />
                                      <Route path="/recipe" element={<Recipe/>} />
                                       <Route path="/expense" element={<Expensepage/>} />
                                         <Route path="/movie" element={<Movie/>} />
                                         <Route path="/test" element={<Test/>} />
                                         <Route path="/quiz" element={<QuizApp/>} />
      </Routes>
      </div>
   
  );
}

export default App;
