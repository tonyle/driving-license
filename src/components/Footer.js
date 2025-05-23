import { Link } from "react-router-dom"
import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>DriveTest</h3>
            <p>Ứng dụng học và thi trắc nghiệm bằng lái xe hàng đầu Việt Nam. Giúp bạn ôn tập và chuẩn bị tốt nhất cho kỳ thi sát hạch lý thuyết.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="icon-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="icon-youtube"></i>
              </a>
              <a href="#" className="social-link">
                <i className="icon-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="icon-tiktok"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Liên kết nhanh</h3>
            <ul className="footer-links">
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/learning">Học lý thuyết</Link></li>
              <li><Link to="/practice">Luyện tập</Link></li>
              <li><Link to="/exam">Thi thử</Link></li>
            </ul>
          </div>
          
          {/* <div className="footer-section">
            <h3>Hỗ trợ</h3>
            <ul className="footer-links">
              <li><a href="#">Hướng dẫn sử dụng</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </div> */}
          
          <div className="footer-section">
            <h3>Liên hệ</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="icon-email"></i>
                <span>info@drivetest.vn</span>
              </div>
            </div>
            <div className="app-download">
              <h4>Tải ứng dụng</h4>
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <i className="icon-apple"></i>
                  <span>App Store</span>
                </a>
                <a href="#" className="app-button">
                  <i className="icon-android"></i>
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 DriveTest - Ứng dụng học và thi trắc nghiệm bằng lái xe. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
