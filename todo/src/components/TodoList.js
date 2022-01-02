import React from 'react';
// import components
import Todo from './Todo';

// to have access for todos we put it as a prop
const TodoList = ({todos, setTodos, filteredTodos}) => {
    // console.log(todos);
    return (
  <div className="todo-container">
  <ul className="todo-list">
   {/* so for each to do from the state we want to render out a todo component  */}
   {filteredTodos.map((todo) => (
    <Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text} />
   ))};
  </ul>
  </div>
 );
};

export default TodoList;