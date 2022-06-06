import React from 'react';
import { TodoContext } from '../hooks/TodoContext';
import '../styles/TodoCounter.css';

function TodoCounter () {
    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    return(
        <div className="Counter-container">
            <h2>
                Se ha realizado {completedTodos} Tareas de {totalTodos}
            </h2>
        </div>
    )
}

export {TodoCounter};