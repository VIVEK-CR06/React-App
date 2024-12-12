import React from "react"
import todo3 from "../src/assets/todo3.png"
import ToDoItem from "./Components/ToDoItem"
import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"


const ToDo = () => {

    const [todoList,setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);
    const inputRef = useRef();

const add = () => {
    const inputText = inputRef.current.value.trim();


    if(inputText === "") {
        return null;
    }

    
    const newToDo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
    }
    setTodoList((prev) => [...prev, newToDo] );
    inputRef.current.value = "";
}


const deleteToDo = (id) => {
    setTodoList((prvTodos) => {
       return prvTodos.filter((todo) => todo.id !== id)
    })
}

const toggle = (id) =>{
    setTodoList((prevToDos) => {
        return prevToDos.map((todo) => {
            if(todo.id === id){
                return {...todo,isComplete: !todo.isComplete}
            }
            return todo;
        })
    })
}

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
},[todoList])


    return(
        <div className="bg-slate-300 place-self-center w-11/12 max-w-md flex flex-col p-7  rounded-xl shadow-2xl border-black-sm text-black ">
            <div className="flex items-center mt-7 gap-2">
                <img className="w-11" src={todo3}/>
                <h3 className="text-3xl font-bold ">To-Do List</h3>
            </div>

            <div className="flex items-center my-7 bg-gray-100 rounded-full hover:bg-gray-200 shadow-lg">
                <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-gray-600 text-lg " type="text" placeholder="Add your task"/>
                <button onClick={add} className="border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-orange-600 ">ADD +</button>
            </div>

            <div>
            {todoList.map((item,index) =>{
                return <ToDoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteToDo={deleteToDo} toggle={toggle} />
            }
            )}
            </div>


        </div>
    )
}

export default ToDo