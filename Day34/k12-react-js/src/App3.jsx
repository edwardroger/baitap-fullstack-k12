//rafce: để hiển thị gợi ý tạo cấu trúc component

import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {

    //state: là 1 vùng nhớ để lưu trữ các biến của component
    //props: là 1 vùng nhớ dùng để truyền giữa các components
    // const person = { cách khai báo thông thường
    //     name: 'Duck',
    //     gender: 'male'
    // }

    const [person, setPerson] = useState({ //cách để báo 1 state bằng hook useState
        name: 'Duck',
        gender: 'Male'
    })

  return ( //cú pháp XML
    <>
        {person.name}
        <Header person={ person } />
        <Content per={ person } />
        <Footer abc={ person } />
    </>
  )
}

export default App