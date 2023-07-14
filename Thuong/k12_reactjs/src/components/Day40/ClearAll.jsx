import React from 'react'


const ClearAll = (props) => {
    const handleClearAll = () => {
        props.handleClearAll();
    }
    return (
        <>
            <h4>Bạn có { props.list.length } tasks đang chờ</h4>
            <button onClick={ handleClearAll }>Xoá hết</button>
        </>
    )
}

export default ClearAll