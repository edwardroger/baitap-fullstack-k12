import React from 'react'
import {Link} from 'react-router-dom';
export const Homepage = () => {
  
  return (
    <div>
        <h2>Homepage</h2>
        <br/>
         <Link to='/Login' style={{textDecoration:'none',padding:10,background:'red',borderRadius:8,marginRight:100}}>Login</Link>
         <Link to='/Profile' style={{textDecoration:'none',padding:10,background:'red',borderRadius:8,}}>Profile</Link>
    </div>  
  )
}
