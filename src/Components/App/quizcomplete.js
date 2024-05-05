import React from 'react';
import styled from 'styled-components';
import checkMark from '../../Asset/check_icon.png'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #34C759; // Adjust the color to match your design
`;

const CheckIcon = styled.img`
  width: 50px; // Adjust size as needed
`;

const Message = styled.div`
  color: white;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  padding: 0 20px;
`;

const Button = styled.button`
  background-color: white;
  color: #34C759;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  margin-top: 30px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #f0f0f0;
  }
`;

function QuizCompletionScreen() {
  const handleRestart = () => {
    // Implement restart logic
    console.log('Restart or review quiz');
  };

  return (
    <Container>
      <CheckIcon src={checkMark} alt="Check Mark" />
      <Message>모든 문제를 다 풀었습니다! 정답을 확인하거나 가실까요?</Message>
      <Button onClick={handleRestart}>정답 확인하러 가기</Button>
    </Container>
  );
}

export default QuizCompletionScreen;
