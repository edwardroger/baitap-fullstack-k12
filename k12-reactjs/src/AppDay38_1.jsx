import React, { useState } from 'react'
// import Input from './components/Day38/Input'
import Calculate from './components/Day38/Calculate'

const App = () => {
    const [result, setresult] = useState(0)

    const handleValiable = (data) => {
        setresult(data)
    }
  return (
    <>
        {/* <Input resultCalculate={handleValiable} /> */}
        <Calculate resultCalculate={handleValiable}/>
        { result }
    </>
  )
}

export default App