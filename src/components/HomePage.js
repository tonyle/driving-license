import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Ứng dụng học và thi trắc nghiệm bằng lái xe</h1>
        <p>Học lý thuyết và luyện thi trắc nghiệm bằng lái xe một cách hiệu quả</p>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <h2>Học lý thuyết</h2>
            <p>Tài liệu học và các quy định về luật giao thông</p>
          </div>
          <div className="card-content">
            <div className="icon-circle blue">
              <i className="icon-book"></i>
            </div>
          </div>
          <div className="card-footer">
            <Link to="/learning" className="button">
              Bắt đầu học
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Luyện tập</h2>
            <p>Luyện tập câu hỏi trắc nghiệm theo chủ đề</p>
          </div>
          <div className="card-content">
            <div className="icon-circle green">
              <i className="icon-practice"></i>
            </div>
          </div>
          <div className="card-footer">
            <Link to="/practice" className="button">
              Luyện tập
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Thi thử</h2>
            <p>Mô phỏng đề thi thật với thời gian giới hạn</p>
          </div>
          <div className="card-content">
            <div className="icon-circle red">
              <i className="icon-exam"></i>
            </div>
          </div>
          <div className="card-footer">
            <Link to="/exam" className="button">
              Thi thử
            </Link>
          </div>
        </div>
      </div>

      <div className="info-section">
        <h2>Thông tin hữu ích</h2>
        <div className="info-grid">
          <div className="info-item">
            <div className="info-icon">
              <i className="icon-support"></i>
            </div>
            <div>
              <h3>Hỗ trợ trực tuyến</h3>
              <p>Giải đáp thắc mắc về luật giao thông</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="icon-calendar"></i>
            </div>
            <div>
              <h3>Lịch thi cập nhật</h3>
              <p>Thông tin về lịch thi sát hạch</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="icon-update"></i>
            </div>
            <div>
              <h3>Cập nhật luật mới</h3>
              <p>Thông tin về các quy định mới nhất</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="icon-tips"></i>
            </div>
            <div>
              <h3>Mẹo thi thực hành</h3>
              <p>Hướng dẫn kỹ năng lái xe an toàn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
