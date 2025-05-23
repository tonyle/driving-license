"use client"

import { useState, useEffect } from "react"
import questions from "../data/questions.json"

// Mẫu dữ liệu câu hỏi
// const questions = [
//   {
//     id: 1,
//     question:
//       "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
//     options: [
//       "Bị nghiêm cấm",
//       "Không bị nghiêm cấm",
//       "Không bị nghiêm cấm nếu có giấy phép lái xe",
//       "Không bị nghiêm cấm nếu không gây tai nạn",
//     ],
//     correctAnswer: 0,
//     explanation:
//       "Theo Luật Giao thông đường bộ, người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy là bị nghiêm cấm.",
//   }
// ]

function PracticePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(-1))
  const [showExplanation, setShowExplanation] = useState(false)

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
    setShowExplanation(false)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowExplanation(false)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowExplanation(false)
    }
  }

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNextQuestion();
      } else if (event.key === "ArrowLeft") {
        handlePreviousQuestion();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNextQuestion, handlePreviousQuestion]);

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    // <div className="container">
    //   <div className="page-title">
    //     <h1>Luyện tập câu hỏi</h1>
    //     <p>Luyện tập câu hỏi trắc nghiệm theo chủ đề</p>
    //   </div>

    //   <div className="progress-container">
    //     <div className="progress-info">
    //       <span>
    //         Câu hỏi {currentQuestion + 1}/{questions.length}
    //       </span>
    //       <span>{Math.round(progress)}%</span>
    //     </div>
    //     <div className="progress-bar">
    //       <div className="progress-fill" style={{ width: `${progress}%` }}></div>
    //     </div>
    //   </div>
    //   <div className="navigation-buttons">
    //         <button className="button prebutton" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
    //           <i className="icon-prev"></i>
    //           <span>Câu trước</span>
    //         </button>
    //         <p className="instruction-text">Bạn có thể sử dụng mũi tên ⬅️ hoặc ➡️ trên bàn phím để thay đổi câu hỏi</p>
    //         <button className="button nextbutton" onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
    //           <span>Câu tiếp</span>
    //           <i className="icon-next"></i>
    //         </button>
    //   </div>
   

    //   <div className="question-card">
    //     <div className="question-header">
    //       <h2>Câu hỏi {currentQuestion + 1}</h2>
    //       <p>{questions[currentQuestion].question}</p>
    //       <p>
    //         {questions[currentQuestion].question_images &&
    //           questions[currentQuestion].question_images.map((image, index) => (
    //             <img key={index} src={`images/${image}`} alt={`Question ${currentQuestion + 1} image ${index + 1}`} className="question-image" />
    //           ))}
    //       </p>
    //     </div>
    //     <div className="question-body">
    //       <div className="options">
    //         {questions[currentQuestion].options.map((option, index) => (
    //           <div
    //             key={index}
    //             className={`option ${selectedAnswers[currentQuestion] === index ? "selected" : ""}`}
    //             onClick={() => handleAnswerSelect(index)}
    //           >
    //             <div className="option-radio">
    //               {selectedAnswers[currentQuestion] === index && <div className="option-radio-fill"></div>}
    //             </div>
    //             <label>{option}</label>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="question-footer">
    //       {selectedAnswers[currentQuestion] !== -1 && (
    //         <button className="button outline full-width" onClick={toggleExplanation}>
    //           {showExplanation ? "Ẩn giải thích" : "Xem giải thích"}
    //         </button>
    //       )}

    //       {showExplanation && (
    //         <div
    //           className={`explanation ${
    //             selectedAnswers[currentQuestion] === questions[currentQuestion].correct_answer ? "correct" : "incorrect"
    //           }`}
    //         >
    //           <p className="explanation-header">
    //             {selectedAnswers[currentQuestion] === questions[currentQuestion].correct_answer
    //               ? "Chính xác!"
    //               : "Chưa chính xác!"}
    //           </p>
    //           <p className="explanation-text">{questions[currentQuestion].explanation}</p>
    //         </div>
    //       )}
    //     </div>
    //   </div>

    //   <div className="question-navigation">
    //       {
    //       questions.length >= 0 && (
    //         <div className="pagination-scroll">
    //           {questions.map((_, index) => (
    //             <button
    //               key={index}
    //               className={`question-number ${
    //                 index === currentQuestion
    //                   ? "current"
    //                   : selectedAnswers[index] === -1
    //                     ? "unanswered"
    //                     : selectedAnswers[index] === questions[index].correct_answer
    //                       ? "correct"
    //                       : "incorrect"
    //               }`}
    //               onClick={() => setCurrentQuestion(index)}
    //             >
    //               {index + 1}
    //             </button>
    //           ))}
    //         </div>
    //       )}
        
    //   </div>
    // </div>



    <div className="container">
  <div className="page-title">
    <h1>Luyện tập câu hỏi</h1>
    <p>Luyện tập câu hỏi trắc nghiệm theo chủ đề</p>
  </div>

  <div className="progress-container">
    <div className="progress-info">
      <span>
        Câu hỏi {currentQuestion + 1}/{questions.length}
      </span>
      <span>{Math.round(progress)}%</span>
    </div>
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
    </div>
  </div>

  <div className="navigation-buttons">
    <button className="button outline" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
      <i className="icon-prev"></i>
      <span>Câu trước</span>
    </button>
    <p className="instruction-text">Bạn có thể sử dụng mũi tên ⬅️ hoặc ➡️ trên bàn phím để thay đổi câu hỏi</p>
    <button className="button" onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
      <span>Câu tiếp</span>
      <i className="icon-next"></i>
    </button>
  </div>

  <div className="main-content">
    <div className="question-navigation">
      {questions.length >= 23 && (
        <div className="pagination-scroll">
          {questions.map((_, index) => (
            <button
              key={index}
              className={`question-number ${
                index === currentQuestion
                  ? "current"
                  : selectedAnswers[index] === -1
                    ? "unanswered"
                    : selectedAnswers[index] === questions[index].correct_answer
                      ? "correct"
                      : "incorrect"
              }`}
              onClick={() => {setCurrentQuestion(index); setShowExplanation(false)}}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>

    <div className="question-card">
      <div className="question-header">
        <h2>Câu hỏi {currentQuestion + 1}</h2>
        <p>{questions[currentQuestion].question}</p>
        <p>
          {questions[currentQuestion].question_images &&
            questions[currentQuestion].question_images.map((image, index) => (
              <img
                key={index}
                src={`images/${image}`}
                alt={`Question ${currentQuestion + 1} image ${index + 1}`}
                className="question-image"
              />
            ))}
        </p>
      </div>
      <div className="question-body">
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={`option ${selectedAnswers[currentQuestion] === index ? "selected" : ""}`}
              onClick={() => handleAnswerSelect(index)}
            >
              <div className="option-radio">
                {selectedAnswers[currentQuestion] === index && <div className="option-radio-fill"></div>}
              </div>
              <label>{option}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="question-footer">
        {selectedAnswers[currentQuestion] !== -1 && (
          <button className="button outline full-width" onClick={toggleExplanation}>
            {showExplanation ? "Ẩn giải thích" : "Xem giải thích"}
          </button>
        )}

        {showExplanation && (
          <div
            className={`explanation ${
              selectedAnswers[currentQuestion] === questions[currentQuestion].correct_answer ? "correct" : "incorrect"
            }`}
          >
            <p className="explanation-header">
              {selectedAnswers[currentQuestion] === questions[currentQuestion].correct_answer
                ? "Chính xác!"
                : "Chưa chính xác!"}
            </p>
            <p className="explanation-text">{questions[currentQuestion].explanation}</p>
          </div>
        )}
      </div>
    </div>
  </div>
</div>

  )
}

export default PracticePage
