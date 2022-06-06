import React from 'react';
import { useLocalStorage } from './useLocalStorege';

const TodoContext = React.createContext();

function TodoProvider (porps) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error} = useLocalStorage('TODOS_V1', []);
        
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      //Función que identifica las tareas en estado true
      const completedTodos = todos.filter( todo => todo.completed == true).length;
      
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length >= 1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoName = todo.name.toLowerCase(); 
          const searchText = searchValue.toLowerCase();
          return todoName.includes(searchText); 
        });
        
      }
    
      const addTodo = (name) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          name,
        });
        saveTodos(newTodos);
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.name === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.name === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            completedTodos,
            totalTodos,
            searchValue, 
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal
        }}>
            {porps.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};