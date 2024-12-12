// import Header from "./Header"
import { useState } from "react"
import './App.css';
import Header from "./Header";
import './index.css';


function App() {

  const[count,setCount] = useState(0)
  function AddCount(){
    setCount(count + 1)
  }
  function DecCount(){
    if(count > 0){
    setCount( count - 1)
    }
  }
  function CountAdd(){
    setCount( count + 5)
  }


  return(
    <div className={`flex flex-col h-screen justify-center items-center ${count % 2 === 0 ? "bg-white" : "bg-black"}`}>
      <div className="bg-white text-center p-8  border border-black-xsm  rounded-lg  hover:bg-slate-100 shadow-xl">
        <h1 className="font-semibold text-7xl">{count}</h1><br/>
          <button onClick={AddCount} className="px-4 py-1 bg-red-600 text-black rounded hover:bg-red-700 shadow-xl">COUNT +1</button>&nbsp;&nbsp;
          <button onClick={DecCount} className="px-4 py-1 bg-red-600 text-black rounded hover:bg-red-700 shadow-xl">COUNT -1</button>&nbsp;&nbsp;
          <button onClick={CountAdd} className="px-4 py-1 bg-red-600 text-black rounded hover:bg-red-700 shadow-xl">COUNT +5</button>&nbsp;
      </div>
    </div>
  )
}

export default App
