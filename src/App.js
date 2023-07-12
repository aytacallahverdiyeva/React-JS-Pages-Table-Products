import React, {useState} from "react"; 
import { Route, Router, Routes } from "react-router-dom";
import Form from "./components/Form";
import Products from "./page/Products";
import Header from "./components/Header";
import Forms from "./page/Forms";
import Home from "./page/Home";

function App() {
  // let count = 0; //burda teyin edib 8 str-de add eledik (sonra isletmeyecik)
  // const [count,setCount] = useState(0);

  // const decrement = () => {
  //   if(count !== 0) {
  //     setCount(count - 1)
  //   }
  // }
  return (
    <div className="App">
      {/* <button onClick={()=> setCount(count + 1)}>+</button>
      <span> {count} </span> 
      <button onClick={decrement}>-</button> */}

{/* <Form/> */}
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/form" element={<Forms/>}/>
  <Route path="/products" element={<Products/>}/>
</Routes> 
    </div>
  );
}

export default App;


//*Counterrrr 
/*<div className="App">
      <button onClick={()=> count + 1}>+</button>
      <span> {count} </span> 
      <button onClick={()=> count - 1}>-</button>
    </div>
 belede yaza bilerdik ama o countlar render olmur dusub */