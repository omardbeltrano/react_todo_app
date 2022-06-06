import React from 'react';
import {TodoContext} from '../hooks/TodoContext';
import '../styles/TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <label>Add a new Task</label>
            <textarea className="text" onChange={onChange} value={newTodoValue} placeholder="What's your new Task?"></textarea>
            <div className="button-container">
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="submit" >Add</button>
            </div>
        </form>
    );
}

export {TodoForm};