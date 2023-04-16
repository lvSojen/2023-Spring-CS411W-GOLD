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
import RecommendationsScreen from "./screens/RecommendationsScreen"
import HelpScreen from "./screens/HelpScreen"
import FAQScreen from "./screens/FAQScreen"
function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <main className="py-3 main-content">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact></Route>
              <Route
                path="/recommendations"
                element={<RecommendationsScreen />}
                exact
              ></Route>
              <Route path="/about" element={<AboutScreen />} exact></Route>
              <Route path="/signin" element={<SignInScreen />} exact></Route>
              <Route path="/signup" element={<SignUpScreen />} exact></Route>
              <Route
                path="/result"
                element={<SearchResultScreen />}
                exact
              ></Route>
              <Route path="/help" element={<HelpScreen />} exact></Route>
              <Route path="/FAQ" element={<FAQScreen/>} exact></Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
