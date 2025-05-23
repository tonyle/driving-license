import { useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const location = useLocation()

  const hideFooter = location.pathname === "/exam" || location.pathname === "/practice"
  const isHome = location.pathname === "/"
  return (
    <div className="App">
      <Header />
      <main className={`main-content ${!isHome ? "with-min-height" : ""}`}>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
