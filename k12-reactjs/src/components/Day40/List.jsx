import React from 'react'
import './List.css'

const List = (props) => {
    const handleDelete = (key) => {
        props.hanldeDelete(key);
    }
  return (
    <>
        <div className="list">
            { props.list && props.list.map((item, key) => {
                return (
                    <div className="list-element_child">
                        <p>{ key+1 }.{ item.name }</p>
                        <button className='btn-delete'
                            onClick={() => handleDelete(key)}
                        >
                            X
                        </button>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default List