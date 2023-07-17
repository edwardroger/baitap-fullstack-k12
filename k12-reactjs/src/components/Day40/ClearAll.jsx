import React from 'react'
import './ClearAll.css'

const ClearAll = (props) => {

  const handleClearAll = () => {
    props.handleClearAll()
  }
  return (
    <>
        <h4>Bạn có { props.list.length } tasks đang chờ</h4>
        <button className='delete-all-task' onClick={ handleClearAll }>Xóa hết</button>
    </>
  )
}

export default ClearAll