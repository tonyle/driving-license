"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import LawItem from './LawItem'

function LearningPage() {
  const [activeTab, setActiveTab] = useState("rules")
  const laws = [
    {
      id: 1,
      title: "1. Đội mũ bảo hiểm",
      content: "Người điều khiển, người ngồi trên xe mô tô, xe gắn máy phải đội mũ bảo hiểm đạt chuẩn và cài quai đúng quy cách."
    },
    {
      id: 2,
      title: "2. Không lái xe khi đã uống rượu bia",
      content: "Người điều khiển phương tiện giao thông không được sử dụng rượu, bia hoặc các chất kích thích."
    },
    {
      id: 3,
      title: "3. Chấp hành tín hiệu giao thông",
      content: "Dừng đèn đỏ, đi khi đèn xanh, tuân thủ hiệu lệnh của người điều khiển giao thông và biển báo."
    },
    {
      id: 4,
      title: "4. Không sử dụng điện thoại khi lái xe",
      content: "Sử dụng điện thoại khi lái xe làm giảm khả năng tập trung và gây nguy hiểm cho bản thân và người khác."
    },
    {
      id: 5,
      title: "5. Giới hạn tốc độ",
      content: "Tuân thủ tốc độ tối đa và tối thiểu theo từng tuyến đường được quy định."
    }
  ];

  const boards = [
    {
      id: 1,
      image: "bien-canh-bao-giao-thong-2.webp",
    },
    {
      id: 2,
      image: "bien-canh-bao-giao-thong-3.jpg",
    },
    {
      id: 3,
      image: "bien-canh-bao-giao-thong-4.jpg",
    },
    {
      id: 4,
      image: "bien-canh-bao-giao-thong-5.jpg",
    },
    {
      id: 5,
      image: "bien-canh-bao-giao-thong-6.jpg",
    },
    {
      id: 6,
      image: "bien-canh-bao-giao-thong-7.jpg",
    },
    {
      id: 7,
      image: "bien-canh-bao-giao-thong-8.jpg",
    },
    {
      id: 8,
      image: "bien-canh-bao-giao-thong-9.webp",
    },
    {
      id: 9,
      image: "bien-canh-bao-giao-thong-10.webp",
    },
    {
      id: 10,
      image: "bien-canh-bao-giao-thong-11.webp",
    },
    {
      id: 11,
      image: "bien-canh-bao-giao-thong-12.webp",
    },
    {
      id: 12,
      image: "bien-canh-bao-giao-thong-13.webp",
    },
    {
      id: 13,
      image: "bien-canh-bao-giao-thong-14.webp",
    },
    {
      id: 14,
      image: "bien-canh-bao-giao-thong-15.webp",
    },
    {
      id: 15,
      image: "bien-canh-bao-giao-thong-16.webp",
    },
    {
      id: 16,
      image: "bien-canh-bao-giao-thong-17.webp",
    }
  ];
  const drivingTechniques = [
  {
    id: 1,
    title: "1. Điều khiển ly hợp (côn) chính xác",
    content: "Đạp hết côn khi sang số, nhả côn từ từ để tránh chết máy và rung giật xe."
  },
  {
    id: 2,
    title: "2. Khởi hành ngang dốc bằng phanh tay",
    content: "Kéo phanh tay, vào số 1, nhả côn đến điểm tiếp xúc rồi nhả phanh tay khi xe bắt đầu chuyển động."
  },
  {
    id: 3,
    title: "3. Sử dụng đúng cấp số theo tốc độ",
    content: "Tăng/giảm số phù hợp với tốc độ để tránh ép máy và hao nhiên liệu."
  },
  {
    id: 4,
    title: "4. Phanh động cơ (Engine Braking)",
    content: "Về số thấp để giảm tốc độ thay vì chỉ dùng phanh chân, giúp kiểm soát tốt hơn khi xuống dốc."
  },
  {
    id: 5,
    title: "5. Không tỳ tay lên cần số",
    content: "Việc này có thể gây mòn bạc đạn trong hộp số, làm giảm tuổi thọ hộp số."
  },
  {
    id: 6,
    title: "6. Sử dụng đúng các chế độ số (P, R, N, D)",
    content: "P: đỗ xe, R: lùi, N: số mo, D: đi tiến. Luôn đạp phanh khi chuyển giữa các chế độ."
  },
  {
    id: 7,
    title: "7. Khởi hành và dừng xe mượt mà",
    content: "Không cần côn, chỉ cần nhấn nhẹ chân ga khi xe chuyển sang số D để bắt đầu đi."
  },
  {
    id: 8,
    title: "8. Không dùng chân trái",
    content: "Chỉ dùng chân phải cho cả phanh và ga để tránh đạp nhầm, không dùng chân trái."
  },
  {
    id: 9,
    title: "9. Dừng đèn đỏ về số N hoặc giữ phanh?",
    content: "Trong thời gian ngắn, giữ phanh là đủ. Nếu chờ lâu, nên chuyển về N và kéo phanh tay."
  },
  {
    id: 10,
    title: "10. Không về số N khi xe đang chạy",
    content: "Việc này nguy hiểm vì mất khả năng điều khiển động cơ và phanh động cơ."
  }
];

  return (
    <div className="container">
      <div className="page-title">
        <h1>Học lý thuyết</h1>
        <p>Tài liệu học và các quy định về luật giao thông</p>
      </div>

      <div className="tabs">
        <div className={`tab ${activeTab === "rules" ? "active" : ""}`} onClick={() => setActiveTab("rules")}>
          <i className="icon-rules"></i>
          <span>Luật giao thông</span>
        </div>
        <div className={`tab ${activeTab === "signs" ? "active" : ""}`} onClick={() => setActiveTab("signs")}>
          <i className="icon-signs"></i>
          <span>Biển báo</span>
        </div>
        <div className={`tab ${activeTab === "techniques" ? "active" : ""}`} onClick={() => setActiveTab("techniques")}>
          <i className="icon-techniques"></i>
          <span>Kỹ thuật lái xe</span>
        </div>
        {/* <div className={`tab ${activeTab === "documents" ? "active" : ""}`} onClick={() => setActiveTab("documents")}>
          <i className="icon-documents"></i>
          <span>Tài liệu</span>
        </div> */}
      </div>

      <div className="tab-content">
        {activeTab === "rules" && (
          <div className="content-card">
            <div className="content-header">
              <h2>Luật giao thông đường bộ</h2>
              <p>Các quy định cơ bản về luật giao thông đường bộ mà người lái xe cần biết</p>
            </div>
            <div className="content-body">
              {laws.map((law) => (
                <LawItem key={law.id} title={law.title} content={law.content} />
              ))}
            </div>
            <div className="content-footer">
              <Link to="/practice" className="button">
                Luyện tập câu hỏi
              </Link>
            </div>
          </div>
        )}

        {activeTab === "signs" && (
          <div className="content-card">
            <div className="content-header">
              <h2>Biển báo giao thông</h2>
              <p>Các loại biển báo giao thông cơ bản và ý nghĩa</p>
            </div>
            <div className="content-body">
              {boards.map((board, index) => (
                <img src={board.image} alt={`Biển báo giao thông ${index}`} key={board.id}  className="question-image" />
              ))}
            </div>
            <div className="content-footer">
              <Link to="/practice" className="button">
                Luyện tập câu hỏi
              </Link>
            </div>
          </div>
        )}

        {activeTab === "techniques" && (
          <div className="content-card">
            <div className="content-header">
              <h2>Kỹ thuật lái xe</h2>
              <p>Các kỹ thuật cơ bản trong việc điều khiển phương tiện</p>
            </div>
            <div className="content-body">
              {drivingTechniques.map((law) => (
                <LawItem key={law.id} title={law.title} content={law.content} />
              ))}
            </div>
            <div className="content-footer">
              <Link to="/practice" className="button">
                Luyện tập câu hỏi
              </Link>
            </div>
          </div>
        )}

        {/* {activeTab === "documents" && (
          <div className="content-card">
            <div className="content-header">
              <h2>Tài liệu học tập</h2>
              <p>Các tài liệu tham khảo hữu ích cho việc học lý thuyết</p>
            </div>
            <div className="content-body">
              <div className="document-grid">
                <div className="document-card">
                  <div className="document-header">
                    <h3>Sách 150 câu hỏi trắc nghiệm</h3>
                  </div>
                  <div className="document-content">
                    <p>Tổng hợp 150 câu hỏi trắc nghiệm thường gặp trong đề thi sát hạch lý thuyết lái xe.</p>
                  </div>
                  <div className="document-footer">
                    <button className="button outline">Tải xuống PDF</button>
                  </div>
                </div>

                <div className="document-card">
                  <div className="document-header">
                    <h3>Hướng dẫn kỹ năng thực hành</h3>
                  </div>
                  <div className="document-content">
                    <p>Tài liệu hướng dẫn chi tiết các bài thi thực hành lái xe, kèm theo hình ảnh minh họa.</p>
                  </div>
                  <div className="document-footer">
                    <button className="button outline">Tải xuống PDF</button>
                  </div>
                </div>

                <div className="document-card">
                  <div className="document-header">
                    <h3>Luật giao thông đường bộ</h3>
                  </div>
                  <div className="document-content">
                    <p>Văn bản luật giao thông đường bộ mới nhất, cập nhật các quy định hiện hành.</p>
                  </div>
                  <div className="document-footer">
                    <button className="button outline">Tải xuống PDF</button>
                  </div>
                </div>

                <div className="document-card">
                  <div className="document-header">
                    <h3>Hệ thống biển báo giao thông</h3>
                  </div>
                  <div className="document-content">
                    <p>Tổng hợp đầy đủ các loại biển báo giao thông đường bộ tại Việt Nam kèm theo ý nghĩa.</p>
                  </div>
                  <div className="document-footer">
                    <button className="button outline">Tải xuống PDF</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-footer">
              <Link to="/practice" className="button">
                Luyện tập câu hỏi
              </Link>
            </div>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default LearningPage
