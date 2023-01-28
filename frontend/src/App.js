import Navbar from "./Navbar"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Preferences from "./pages/Preferences"
import Help from "./pages/Help"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </>
  )
}

export default App