import { Routes, Route, useNavigate } from "react-router-dom";
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
import Note from "./Component/NoteApp/Note";
import Ecommerce from "./Component/Ecommerce/Ecommerce";
import Cartpage from "./Component/Ecommerce/Cartpage";
import { useEffect, useState } from "react";
import Post from "./Component/Blog/Post";
import Blog from "./Component/Blog/Blog";
import Github from "./Component/Blog/Github/Github";

function App() {
      const [cart,setCart]=useState(()=>{
          const savedcart = localStorage.getItem('cart')
          return savedcart ? JSON.parse(savedcart):[];
        
        })
        
        useEffect(()=>{
              localStorage.setItem('cart',JSON.stringify(cart))

        },[cart])
    
    const navigate = useNavigate('')
          const addtocart = (products)=>{
            setCart([...cart,products])
            navigate('/cartpage')
        }
  return (
    <div >

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Digi" element={<Digi />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/pass" element={<Pass />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/expense" element={<Expensepage />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/test" element={<Test />} />
        <Route path="/quiz" element={<QuizApp />} />
        <Route path="/note" element={<Note />} />
        <Route path="/ecommerce" element={<Ecommerce addtocart={addtocart} cart={cart}/>} />
        <Route path="/cartpage" element={<Cartpage cart={cart}/>} />
        <Route path="/blog" element={<Blog/>} />
         <Route path="/github" element={<Github/>} />
      
      </Routes>
    </div>

  );
}

export default App;
