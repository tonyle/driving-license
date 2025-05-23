import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import LearningPage from "./components/LearningPage"
import PracticePage from "./components/PracticePage"
import ExamPage from "./components/ExamPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/exam" element={<ExamPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App