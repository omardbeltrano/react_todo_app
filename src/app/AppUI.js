import React from 'react';
import { TodoCounter} from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItems } from '../components/TodoItems';
import { TodoButton } from '../components/TodoButton';
import { TodoContext } from '../hooks/TodoContext';
import { Modal } from '../app/Modal';
import { TodoForm } from '../components/TodoForm';

function AppUI () {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList >
                {loading && <p>Loading...</p>}
                {error && <p>Error, someting is wrong with the data...</p>}
                {(!loading && searchedTodos.length == 0) && <p>Create you first task</p>}
                {searchedTodos.map(todo => (
                    <TodoItems 
                        key={todo.name} 
                        name={todo.name}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.name)}
                        onDelete={() => deleteTodo(todo.name)}
                        />
                    ))}
            </TodoList>
            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>) }
            <TodoButton setOpenModal={setOpenModal}/>
        </React.Fragment>
    )
}

export {AppUI};