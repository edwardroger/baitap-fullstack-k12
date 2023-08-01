import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Login';
import { Profile } from './Profile';
import { Homepage } from './Homepage';


const AppDay44 = () => {
  const [email , setEmail] = useState('');
    const [passW, setPassW] = useState('');
    console.log(passW);
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element ={ <Homepage email ={email}/>} />
            <Route path='/Login' element ={ <Login setEmail = {setEmail} setPassW = {setPassW}/> }/>
            <Route  path='/Profile' element = { <Profile email ={email}/> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppDay44;