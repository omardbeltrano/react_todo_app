import React from 'react';
import { TodoContext } from '../hooks/TodoContext';
import '../styles/TodoSearch.css';

function TodoSearch () {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onChangeSearchValue = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <div className="Search-container">
            <input className="Search" 
                type="search" 
                placeholder="Buscar" 
                onChange={onChangeSearchValue}
                value={searchValue}
            />
        </div>
    )
}

export {TodoSearch};