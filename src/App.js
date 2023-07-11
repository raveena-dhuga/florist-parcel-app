import React from "react"
import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Basket from "./Pages/Basket"
import MainContent from "./Pages/MainContent"
import Favourites from "./Pages/Favourites"

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/favourites" element={<Favourites />} />
            </Routes>
        </div>
    )
}

export default App