import React, { useCallback, useState } from "react";
import { BrowserRouter as Routes, Route, Link, BrowserRouter } from "react-router-dom"
import HomePage from "./day43/HomePage";
import Login from "./day43/Login";

const App = () => {
    return (
            <Routes>
                <Route path={'/'} element={HomePage} />
                <Route path={'/login'} element={Login} />
            </Routes>
    )
}
export default App 