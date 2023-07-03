import React, { useCallback, useState } from "react";
import Calculator from "./day38/Calculator";


const App = () => {
    const [result, setResult] = useState(0)
    return (<>
        <Calculator/>
    </>)
}
export default App