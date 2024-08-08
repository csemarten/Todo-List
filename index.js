import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },
    {
      text: 'buy groceries',
      isCompleted: false,
    },
    {
      text: 'take dog to vet',
      isCompleted: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  };

  function Todo({todo,index,remove}){
    function handle (){
        remove(index);
    }
    return <div className="todo" onClick={handle}>{todo.text} (-)</div>
};
function TodoForm({addTodo}){
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
  }

  return (
      <form onSubmit={handleSubmit}>
          <input 
              type="text"
              className="input"
              value={value}
              placeholder="Add Todo . . ."
              onChange={e => setValue(e.target.value)}/>
      </form>
  );
};
  return (
      <div className="app">
          <div className="todo-list">
          {todos.map((todo, i) => 
            <Todo index={i} key={todo.id} todo={todo} remove={removeTodo} />
          )}
          <TodoForm addTodo={addTodo}/>
          </div>
      </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
