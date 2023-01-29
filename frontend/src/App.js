import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import ContactScreen from './screens/ContactScreen'
function App() {
  return (
    <BrowserRouter>
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreen />} exact></Route>
          <Route path="/contact" element={<ContactScreen />} exact></Route>

        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
