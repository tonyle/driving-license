// import { Link, useLocation } from "react-router-dom"
// import "../styles/Header.css"

// function Header() {
//   const location = useLocation()
  
//   return (
//     <header className="main-header">
//       <div className="header-container">
//         <div className="logo">
//           <Link to="/">
//             <div className="logo-icon">
//               <i className="icon-car"></i>
//             </div>
//             <div className="logo-text">
//               <span className="logo-title">DriveTest</span>
//               <span className="logo-subtitle">Học & Thi Bằng Lái</span>
//             </div>
//           </Link>
//         </div>
        
//         <nav className="main-nav">
//           <ul>
//             <li className={location.pathname === "/" ? "active" : ""}>
//               <Link to="/">Trang chủ</Link>
//             </li>
//             <li className={location.pathname === "/learning" ? "active" : ""}>
//               <Link to="/learning">Học lý thuyết</Link>
//             </li>
//             <li className={location.pathname === "/practice" ? "active" : ""}>
//               <Link to="/practice">Luyện tập</Link>
//             </li>
//             <li className={location.pathname === "/exam" ? "active" : ""}>
//               <Link to="/exam">Thi thử</Link>
//             </li>
//           </ul>
//         </nav>
        
//         <div className="mobile-menu-toggle">
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "../styles/Header.css"

function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Tắt menu khi chuyển route
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Toggle class trên <body>
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("mobile-menu-open")
    } else {
      document.body.classList.remove("mobile-menu-open")
    }
  }, [menuOpen])

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <div className="logo-icon">
              <i className="icon-car"></i>
            </div>
            <div className="logo-text">
              <span className="logo-title">DriveTest</span>
              <span className="logo-subtitle">Học & Thi Bằng Lái</span>
            </div>
          </Link>
        </div>

        <nav className="main-nav">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Trang chủ</Link>
            </li>
            <li className={location.pathname === "/learning" ? "active" : ""}>
              <Link to="/learning">Học lý thuyết</Link>
            </li>
            <li className={location.pathname === "/practice" ? "active" : ""}>
              <Link to="/practice">Luyện tập</Link>
            </li>
            <li className={location.pathname === "/exam" ? "active" : ""}>
              <Link to="/exam">Thi thử</Link>
            </li>
          </ul>
        </nav>

        <div
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
