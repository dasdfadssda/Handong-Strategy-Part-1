import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

const MainText = styled.div`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const Message = styled.p`
  font-size: 14px; // 반응형 글자 크기
  text-align: center;
  margin: 20px;
  color: #333;
  margin-bottom: 100px;
`;

const Button = styled.button`
  width: 60vw;
  padding: 2vw; // 반응형 패딩
  margin: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  font-size: 4vw; // 반응형 글자 크기
  cursor: pointer;
  border-radius: 41.5px;

  &:hover {
    background-color: #45a049;
  }
`;

const OrderButton = styled(Button)`
  background-color: white; // 흰색 배경
  color: #4caf50; // 초록색 글자
  border: 2px solid #4caf50; // 초록색 태두리

  &:hover {
    background-color: #f0f0f0; // 호버 시 배경 색 변경
  }
`;

const TextLogo = styled.img`
  width: 70%;
  height: auto;
  margin-top: 100px;
`;

function HomePage() {
  return (
    <Container>
      <MainText>안녕하세요! 한동 공부 1조입니다.</MainText>
      <Message>
        퀴즈 3개 이상 맞춘 <br />
        가족을 환하게 드리고 있습니다! <br />
        많은 참여 부탁드립니다😊
      </Message>
      <OrderButton>주문하기</OrderButton>
      <Button>퀴즈풀기</Button>
      <TextLogo src={require("../../Asset/Text_logo.png")} />
    </Container>
  );
}

export default HomePage;
