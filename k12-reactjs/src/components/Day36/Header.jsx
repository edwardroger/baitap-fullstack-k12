import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <>
        <div className='header'>
          { props.person.name }
        </div>
    </>
  )
}

export default Header