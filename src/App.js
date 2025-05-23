import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import LearningPage from "./components/LearningPage"
import PracticePage from "./components/PracticePage"
import ExamPage from "./components/ExamPage"
import Layout from "./components/Layout"
import "./App.css"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/exam" element={<ExamPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App