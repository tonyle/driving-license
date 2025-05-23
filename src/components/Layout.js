import { useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const location = useLocation()

  const hideFooter = location.pathname === "/exam"

  return (
    <div className="App">
      <Header />
      <main className="main-content">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
