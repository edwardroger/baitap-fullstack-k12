import React, { useCallback, useState } from "react";
import Input from "./day38/Input";


const App = () => {
    const [result, setResult] = useState(0)
    return (<>
        <Input onChange={(value)=>setResult(value)}/>
        {result}
    </>)
}
export default App