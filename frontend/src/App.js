import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import HomeScreen from "./screens/HomeScreen"
import Footer from "./components/page/Footer"
import Header from "./components/page/Header"
import AboutScreen from "./screens/AboutScreen"
import SignInScreen from "./screens/SignInScreen"
import SignUpScreen from "./screens/SignUpScreen"
import SearchResultScreen from "./screens/SearchResultScreen"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/about" element={<AboutScreen />} exact></Route>
            <Route path="/signin" element={<SignInScreen />} exact></Route>
            <Route path="/signup" element={<SignUpScreen />} exact></Route>
            <Route
              path="/result"
              element={<SearchResultScreen />}
              exact
            ></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
