"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import fullQuestionList from "../data/questions.json"

function ExamPage() {
  const [examQuestions, setExamQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const fixedQuestionIds = [
      19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 32, 34, 35,
      47, 48, 52, 53, 55, 58, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74,
      85, 86, 87, 88, 89, 90, 91, 92, 93, 97, 98, 102, 117, 163, 165, 167,
      197, 198, 206, 215, 226, 234, 245, 246, 252, 253, 254, 255, 260
  ];
  function getRandomQuestions(allQuestions) {
    const fixedSet = new Set(fixedQuestionIds);

    const getRandomFromRange = (start, end, count) => {
      const range = [];
      for (let i = start; i <= end; i++) {
        if (!fixedSet.has(i)) {
          range.push(i);
        }
      }
      const selected = [];
      while (selected.length < count && range.length > 0) {
        const index = Math.floor(Math.random() * range.length);
        selected.push(range[index]);
        range.splice(index, 1);
      }
      return selected.map(i => allQuestions[i - 1]); // 0-based index
    };

    const selectedQuestions = [
      ...getRandomFromRange(1, 180, 8),
      ...getRandomFromRange(181, 205, 1),
      ...getRandomFromRange(206, 263, 1),
      ...getRandomFromRange(264, 300, 1),
      ...getRandomFromRange(301, 485, 9),
      ...getRandomFromRange(486, 600, 9),
    ];

    const selectedIds = new Set(selectedQuestions.map(q => q.id));
    const remainingFixed = fixedQuestionIds.filter(id => !selectedIds.has(id));

    if (remainingFixed.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingFixed.length);
      const fixedQuestion = allQuestions[remainingFixed[randomIndex] - 1];
      selectedQuestions.push(fixedQuestion);
    }

    return selectedQuestions;
  }

  useEffect(() => {
    const count = 30;
    const shuffled = getRandomQuestions(fullQuestionList);
    setExamQuestions(shuffled);
    setSelectedAnswers(Array(count).fill(-1));
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timeLeft, setTimeLeft] = useState(20 * 60)
  const [isExamFinished, setIsExamFinished] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [showConfirmFinish, setShowConfirmFinish] = useState(false)
  const [showTimeoutDialog, setShowTimeoutDialog] = useState(false)

  useEffect(() => {
    if (isExamFinished) return

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          setIsExamFinished(true)
          setShowTimeoutDialog(true)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isExamFinished])

  const handleAnswerSelect = (answerIndex) => {
    if (isExamFinished) return

    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleFinishExam = () => {
    setIsExamFinished(true)
    setShowResults(true)
    setShowConfirmFinish(false)
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const calculateScore = () => {
    let correctCount = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === examQuestions[index].correct_answer) {
        correctCount++
      }
    })
    return correctCount
  }

  const isPassed = () => {
    const score = calculateScore();
    const minScore = Math.ceil((examQuestions.length - 1) * 0.8);
    return score >= minScore && selectedAnswers[29] === examQuestions[29].correct_answer;;
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

  const progress = ((currentQuestion + 1) / examQuestions.length) * 100
  const answeredCount = selectedAnswers.filter((answer) => answer !== -1).length

  if (examQuestions.length === 0) {
    return <div className="loading">Đang tải đề thi...</div>;
  }
  return (
    <div className="container">
      <div className="page-title">
        <h1>Thi thử bằng lái xe</h1>
        <div className="exam-info">
          <p>Mô phỏng đề thi thật với thời gian giới hạn</p>
          <div className="timer">
            <i className="icon-clock"></i>
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-info">
          <span>
            Câu hỏi {currentQuestion + 1}/{examQuestions.length}
          </span>
          <span>
            Đã trả lời: {answeredCount}/{examQuestions.length}
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {!showResults && (
        <div className="question-navigation">
          {examQuestions.length >= 0 && (
            <div className="pagination-scroll">
              {examQuestions.map((_, index) => (
                <button
                  key={index}
                  className={`question-number ${
                    index === currentQuestion
                      ? "current"
                      : selectedAnswers[index] === -1
                        ? "unanswered"
                        : "answered"
                  }`}
                  onClick={() => {setCurrentQuestion(index);}}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      {!showResults ? (
        <div className="question-card">
          <div className="question-footer">
            <div className="navigation-buttons">
              <button className="button" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
                Câu trước
              </button>
              <p className="instruction-text">Bạn có thể sử dụng mũi tên ⬅️ hoặc ➡️ trên bàn phím để thay đổi câu hỏi</p>
              {currentQuestion === examQuestions.length - 1 ? (
                <button className="button success" onClick={() => setShowConfirmFinish(true)}>
                  Nộp bài
                </button>
              ) : (
                <button className="button" onClick={handleNextQuestion}>
                  Câu tiếp
                </button>
              )}
            </div>
          </div>
          <div className="question-header">
            <h2>Câu hỏi {currentQuestion + 1}</h2>
            <p>{examQuestions[currentQuestion].question}</p>
            <p>
            {examQuestions[currentQuestion].question_images &&
              examQuestions[currentQuestion].question_images.map((image, index) => (
                <img key={index} src={`images/${image}`} alt={`Question ${index + 1} image ${index + 1}`} className="question-image" />
              ))}
            </p>
          </div>
          <div className="question-body">
            <div className="options">
              {examQuestions[currentQuestion].options.map((option, index) => (
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
        </div>
      ) : (
        <div className="result-card">
          <div className="result-header">
            <h2>Kết quả thi</h2>
            <p>
              Bạn đã hoàn thành bài thi trong {20 - Math.floor(timeLeft / 60)} phút {60 - (timeLeft % 60)} giây
            </p>
          </div>
          <div className="result-body">
            <div className="result-summary">
              <div className={`result-icon ${isPassed() ? "passed" : "failed"}`}>
                <i className={isPassed() ? "icon-check" : "icon-x"}></i>
              </div>
              <h3 className={isPassed() ? "text-success" : "text-danger"}>{isPassed() ? "Đạt" : "Không đạt"}</h3>
              <p>
                Số câu đúng:{" "}
                <strong>
                  {calculateScore()}/{examQuestions.length}
                </strong>
              </p>
              <p className="result-message">
                {isPassed()
                  ? "Chúc mừng! Bạn đã vượt qua bài thi thử. Hãy tiếp tục ôn luyện để đạt kết quả tốt nhất trong kỳ thi thật."
                  : "Bạn cần ôn tập thêm. Hãy xem lại các câu hỏi sai và thử lại sau."}
              </p>
            </div>

            <div className="result-details">
              <h4>Chi tiết câu trả lời:</h4>
              <div className="question-navigation result-navigation">
                {examQuestions.map((_, index) => {
                  const isCorrect = selectedAnswers[index] === examQuestions[index].correct_answer
                  const isAnswered = selectedAnswers[index] !== -1

                  return (
                    <button
                      key={index}
                      className={`question-number ${!isAnswered ? "unanswered" : isCorrect ? "correct" : "incorrect"}`}
                      onClick={() => {
                        setCurrentQuestion(index)
                        setShowResults(false)
                      }}
                    >
                      {index + 1}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="result-footer">
            <Link to="/" className="button">
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      )}

      {showConfirmFinish && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Xác nhận nộp bài</h2>
            </div>
            <div className="modal-body">
              <p>
                Bạn đã trả lời {answeredCount}/{examQuestions.length} câu hỏi.
              </p>
              {answeredCount < examQuestions.length && (
                <div className="warning">
                  <i className="icon-warning"></i>
                  <span>Bạn còn {examQuestions.length - answeredCount} câu chưa trả lời.</span>
                </div>
              )}
              <p>Bạn có chắc chắn muốn nộp bài không?</p>
            </div>
            <div className="modal-footer">
              <button className="button outline" onClick={() => setShowConfirmFinish(false)}>
                Quay lại làm bài
              </button>
              <button className="button" onClick={handleFinishExam}>
                Nộp bài
              </button>
            </div>
          </div>
        </div>
      )}

      {showTimeoutDialog && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Hết thời gian làm bài</h2>
            </div>
            <div className="modal-body">
              <p>Thời gian làm bài đã kết thúc. Hệ thống sẽ tự động nộp bài của bạn.</p>
            </div>
            <div className="modal-footer">
              <button
                className="button"
                onClick={() => {
                  setShowTimeoutDialog(false)
                  setShowResults(true)
                }}
              >
                Xem kết quả
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExamPage
