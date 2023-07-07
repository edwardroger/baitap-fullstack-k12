import React from 'react'

import './Content.css'

const Content = (props) => {
  return (
    <>
        <div className="content">
            {props.per.name}
        </div>
    </>
    
  )
}

export default Content