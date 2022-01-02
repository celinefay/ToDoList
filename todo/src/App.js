/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import "./App.css";
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //strings
  const [inputText, setInputText] = useState('');
  //array of objects 
  const [todos, setTodos] = useState([]);
  //we want to handle the all completed and not completed 
  const [status, setStatus] = useState('all');
  //filter state to 
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect
  //saying like everytime i add a new todo the useEffect runs (for all and completed and un..)
  useEffect(() => {
     // functions and events
     switch(status){
       case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
         break;
       case 'Uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false ));
         break;
       default: 
          setFilteredTodos(todos);
         break;  
        };
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItems('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') == null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  
  return (
    <div className="App">
     <header>
       <h1>Celine's Todo List</h1>
     </header>
     <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}
     setStatus={setStatus} filteredTodos={filteredTodos}
     />
     {/* to make the input that we are entering visible we need to match up the state with the the is in an array with the todos list soo */}
     <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
};

export default App;

// // functions and events
// const filterHandler = () => {
//   switch(status){
//     case 'completed':
//       setFilteredTodos(todos.filter((todo) => todo.completed === true));
//       break;
//     case 'uncompleted':
//       setFilteredTodos(todos.filter((todos) => todos.completed === false));
//       break;
//     default: 
//        setFilteredTodos(todos);
//        break;  
//       }
// };