import React from 'react';
import '../styles/TodoButton.css';

function TodoButton (props) {
    const onClickButton = () => {
        props.setOpenModal(oldState => !oldState);
    }

    return(
        <div className="Button">
            <button className="TodoButton" onClick={onClickButton}> 
                +
            </button>
        </div>
    )
}

export {TodoButton};