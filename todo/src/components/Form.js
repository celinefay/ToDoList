import React from 'react';

const Form = ({setInputText, inputText ,todos, setTodos, status, setStatus}) => {
 //i can enter js 
 // i wanna submit it and create an object with the data 
 const inputTextHandler = (e) =>{
//   console.log(e.target.value);
  setInputText(e.target.value);
 };

 const submitTodoHandler = (e) =>{
  //i dont want to refresh the page everytime i input 
  e.preventDefault();
  // create a new obj 
  setTodos([...todos, {text: inputText, completed: false, id:Math.random()* 100}]);
  // here we want after writing an input for it to be deleted from the bar after submit so we want to set state back to zero but our ui will not update 
  setInputText('');
 };

 const statusHandler = (e)  => {
    // console.log(e.target.value);
    setStatus(e.target.value);
 }

 return (
  <form>
   {/* our value is set to nothing so to keep it in checkfor our ui to update value={inputText}*/}
   {/* can never add value with onClick has to be onChange  */}
   <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input' />
   <button className='todo-button' type='submit' onClick={submitTodoHandler}>
    <i className='fas fa-plus-square'></i>
   </button>
   <div className="select">
    <select onClick={statusHandler} name='todos' className='filter-todo'>
     <option value='all'>All</option>
     <option value='completed'>Completed</option>
     <option value='Uncompleted'>Uncompleted</option>
    </select>
   </div>
  </form>
 );
};

export default Form;