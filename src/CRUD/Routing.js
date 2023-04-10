import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Login from "./Login";
import Home from "./Home";
import Forms from "./Forms";

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/forms" element={<Forms />}></Route>

            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing
