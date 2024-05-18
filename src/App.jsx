import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PostProvider from "./context/PostContext";
import NavBar from "./components/NavBar";

function App() {
    return (
        <PostProvider>
            <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemones" element={<Pokemones />} />
                    <Route path="/pokemon/:name" element={<Pokemones />} />
                </Routes>
  
        </PostProvider>
    );
}

export default App;
