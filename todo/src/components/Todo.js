import React from 'react';

const Todo = ({text, todo, setTodos, todos}) => {
  // events
  // we are saying access the todos by settodos and filter them if element id is equal to todos id delete it
  const deleteHandler = () => {
     setTodos(todos.filter
      ( (el) => el.id !== todo.id)
     );
    //console.log(todo);
  };

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
        return { 
          //the ... is to say add all the other items and just modify the completed
          //switch from false to true !
          ...item, completed: !item.completed 
        }
        };
    return item;
   }));
  };

 return(
  <div className="todo">
   <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
    <button onClick={completeHandler} className='complete-btn'>
    <i className='fas fa-check'></i>
    </button>
    <button onClick={deleteHandler} className='trash-btn'>
    <i className='fas fa-trash'></i>
   </button>
   </div>
 );
}; 

export default Todo;