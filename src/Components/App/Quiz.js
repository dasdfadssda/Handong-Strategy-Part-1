import React, { useState, useEffect } from "react";
import styled from "styled-components";
import questions from "../../model/Question"; // 문제 목록 가져오기
import ProgressComponent from "./quizNum";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
  margin-top: 20px;
`;

const QuestionText = styled.div`
  font-size: 24px;
  width: 80%;
  word-break: break-word;
`;

const QuestionNum = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 250px;
  padding: 10px;
  margin: 10px;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &.selected {
    border-color: green;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ResultIcon = styled.img`
  width: 100%;
  height: auto;
  margin-top: 100px;
`;

const ExplanationPage = styled.div`
  font-size: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ExplanationText = styled.div`
  margin-top: 20px;
  width : 80%;
  font-size : 20px;
  word-break: break-word;
`;



function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function selectQuestions() {
  let shuffledQuestions = shuffleArray(questions);
  const highDifficultyQuestions = shuffledQuestions.filter(
    (q) => q.difficulty === "high"
  );
  const lowDifficultyQuestions = shuffledQuestions.filter(
    (q) => q.difficulty === "low"
  );

  let selectedQuestions = [];
  if (highDifficultyQuestions.length > 0) {
    selectedQuestions.push(highDifficultyQuestions[0]); // 최소 하나의 high difficulty 문제 추가
  }

  // 나머지 문제들을 추가하여 총 5문제가 되도록 함
  selectedQuestions = selectedQuestions.concat(
    lowDifficultyQuestions.slice(0, 5 - selectedQuestions.length)
  );
  return selectedQuestions;
}

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setshowQuiz] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    setSelectedQuestions(selectQuestions());
  }, []);

  useEffect(() => {
    if (selectedAnswer !== null) {
      setShowModal(true);
      const timer = setTimeout(() => {
        setShowModal(false);
        setCurrentQuestionIndex(
          (current) => (current + 1) % selectedQuestions.length
        );
        setshowQuiz(true);
        setSelectedAnswer(null);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, selectedQuestions.length]);

  if (!selectedQuestions.length) return <div>Loading...</div>;

  const question = selectedQuestions[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((current) => (current + 1) % selectedQuestions.length);
    setShowModal(false);
    setshowQuiz(false);
  };

  return (
    <Container>
      <ProgressComponent step={currentQuestionIndex}/>
      {!showQuiz ? (
        <>
          <QuestionNum>Q{currentQuestionIndex + 1}.</QuestionNum>
          <QuestionText>{question.question}</QuestionText>
          {question.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className={selectedAnswer === option ? "selected" : ""}
            >
              {option}
            </Button>
          ))}
          <Modal show={showModal}>
            {selectedAnswer === question.answer ? (
              <ResultIcon src={require("../../Asset/O_icon.png")} />
            ) : (
              <ResultIcon src={require("../../Asset/X_icon.png")} />
            )}
          </Modal>
        </>
      ) : (
        <>
          <ExplanationPage>
            <QuestionNum>정답.</QuestionNum>
          <ExplanationText>{question.explain}</ExplanationText>
          <Button onClick={handleNextQuestion}>다음 문제로</Button>
        </ExplanationPage>
        </>
      )}
    </Container>
  );
}

export default QuizApp;
