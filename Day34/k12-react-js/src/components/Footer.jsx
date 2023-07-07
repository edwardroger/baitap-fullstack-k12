import React from 'react'

import './Footer.css'

const Footer = (props) => {
  return (
    <div className="footer">
        {props.abc.name}
    </div>
  )
}

export default Footer