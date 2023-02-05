import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import HomeScreen from "./screens/HomeScreen"
import ContactScreen from "./screens/ContactScreen"
import Footer from "./components/page/Footer"
import Header from "./components/page/Header"
import AboutScreen from "./screens/AboutScreen"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/contact" element={<ContactScreen />} exact></Route>
            <Route path="/about" element={<AboutScreen />} exact></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
