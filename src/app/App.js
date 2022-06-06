import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../hooks/TodoContext'
import '../styles/Global.css';

/*const defaultTodos = [
  {name: 'Curso de Frontend Developer', completed: true},
  {name: 'Curso de JavaScript', completed: false},
  {name: 'Curso de React.js', completed: false},
  {name: 'Curso de Node.js', completed: false},
]*/


function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
