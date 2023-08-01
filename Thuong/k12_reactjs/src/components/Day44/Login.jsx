import React from 'react'
import { Link } from 'react-router-dom'

export const Login = (props) => {
    
    const handleOnChangeEmail = (event) =>{
      const value  =  event.target.value;
      props.setEmail(value);
    }
    const handleOnChangePassW = (event) =>{
      const value  =  event.target.value;
      props.setPassW(value);
    }
  return (
    <>
       <div style={{padding:20,justifyContent:'center',width:180,backgroundColor:'white'}}>
            <div style={{textAlign:'center'}}>Login</div>
            <div>
                <p>UseName</p>
                <input  onChange={ handleOnChangeEmail }/>
            </div>
            <div>
                <p>PassWork</p>
                <input onChange={ handleOnChangePassW } />
            </div>
            <br />
            <Link style={{padding:5,borderRadius:4,backgroundColor:'green',textDecoration:'none'}} to='/' onClick={()=>{
              
            }}>Login</Link>
       </div>
    </>
    
  )
}
