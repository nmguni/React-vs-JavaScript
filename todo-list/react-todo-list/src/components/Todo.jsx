import React, { useEffect, useRef, useState } from 'react'
import TodoItems from './TodoItems'

const Todo = () => {

   const inputRef = useRef()
   const [todoList, setTodoLst] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

   const add = () => {
      const inputText = inputRef.current.value.trim()

      if (inputText === "") {
         return null;
      }

      const newTodo = {
         id: Date.now(),
         text: inputText,
         isComplete: false
      }
      setTodoLst((prev) => [...prev, newTodo]);

      inputRef.current.value = "";
   }

   const deleteTodo = (id) => {
      setTodoLst((prevTodos) => {
         return prevTodos.filter((todo) => todo.id !== id)
      })
   }

   const toggle = (id) => {

      setTodoLst((prevTodos) => {

         return prevTodos.map((todo) => {
            if (todo.id === id) {
               return { ...todo, isComplete: !todo.isComplete }
            }
            return todo
         })
      })
   }

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todoList))
   }, [todoList])


   return (
      <div className='shadow-xl place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl' >


         {/* ------title-------- */}

         <div className="flex item-center mt-7 gap-2">
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
         </div>

         {/* ------input box-------- */}

         <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add to the list' />

            <button onClick={add} className='border-none rounded-full bg-slate-500 w-32 h-14 text-white text-large font-medium cursor-pointer'>Add</button>
         </div>

         {/* ------todo list-------- */}

         <div>
            {todoList.map((item, index) => {
               return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
            })}



         </div>

      </div>
   )
}

export default Todo