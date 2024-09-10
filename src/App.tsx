import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Pokemon/>}/>
      </Routes>
    </>
  )
}

export default App
