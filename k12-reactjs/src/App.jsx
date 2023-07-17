import React, { useState } from 'react'
import InputAddNew from './components/Day40/InputAddNew'
import List from './components/Day40/List'
import ClearAll from './components/Day40/ClearAll'
import './App.css'

const App = () => {
    const [listToDo, setListToDo] = useState([]);

    const handleSaveListToDo = (item) => {
        setListToDo([...listToDo, item]);
    }

    const handleClearAll = () => {
        setListToDo([])
    }

    const handleDelete = (item) => {
        const update = [...listToDo]
        update.splice(item, 1)
        setListToDo(update)
    }
  return (
    <>
        <div className="content">
            <h2>Todo App</h2>
            <div className="content-body">
                <InputAddNew handleSave={ handleSaveListToDo } />
                <List list={ listToDo }
                    hanldeDelete={ handleDelete }
                />
            </div>
            <div className="content-footer">
                <ClearAll list={ listToDo }
                    handleClearAll={ handleClearAll }
                />
            </div>
        </div>
    </>
  )
}

export default App