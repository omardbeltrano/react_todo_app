import React from 'react';
import '../styles/TodoItems.css';

function TodoItems (props) {

    /*const onComplete = () => {
        alert("La tarea " + props.name + " fue completada");
        console.log(props.completed)
    }*/

    /*const onDelete = () => {
        alert("La tarea " + props.name + " fue eliminada");
    }*/

    return(

        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
            
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.name}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDelete}>
                X
            </span>
        </li>
    )
}

export {TodoItems};