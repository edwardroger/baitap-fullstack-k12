import React, { useState } from 'react'
import InputAddNew from './Day40/InputAddNew'
import List from './Day40/List'
import ClearAll from './Day40/ClearAll'
import './AppDay40.css'
const AppDay40 = () =>{
    const [listToDo, setListToDo] = useState([]);

    const handleSaveListTodo = (item) => {

        setListToDo([...listToDo, item]);
        SaveData([...listToDo, item]);
        
        console.log(localStorage.getItem('data'));

    }
    const handleClearAll = () => {
        setListToDo([]);
        SaveData([]);
    }
    const handleClearItem = (keySelect) =>{
        // delete listToDo[keySelect];
        // setListToDo(listToDo);
        

        SaveData([
            ...listToDo.slice(0, keySelect),
            ...listToDo.slice(keySelect + 1)
          ]);
        setListToDo([
            ...listToDo.slice(0, keySelect),
            ...listToDo.slice(keySelect + 1)
          ]);
    }
    function SaveData(l) {
        localStorage.setItem("data" , l);
    }
    return (
          <>
            <div className="content">
                <h2>Todo App</h2>
                <div className="content-body">
                    <InputAddNew handleSave={ handleSaveListTodo } />
                    <List list={ listToDo } handleClearItem = { handleClearItem } />
                </div>
                <div className="content-footer" >
                    <ClearAll list={ listToDo } handleClearAll = { handleClearAll } />
                </div>
            </div>
        </>
    )
}

export default AppDay40