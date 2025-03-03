import './App.css'
import Header from '../src/components/Header/Header.tsx'
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing.tsx";
import Catalog from "./views/Catalog.tsx";

function App() {
    return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/catalog' element={<Catalog />} />
        </Routes>
    </>
  )
}

export default App
