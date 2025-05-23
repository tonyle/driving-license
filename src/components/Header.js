import { Link, useLocation } from "react-router-dom"
import "../styles/Header.css"

function Header() {
  const location = useLocation()
  
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
        
        {/* <div className="header-actions">
          <button className="login-button">
            <i className="icon-user"></i>
            <span>Đăng nhập</span>
          </button>
        </div> */}
        
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
