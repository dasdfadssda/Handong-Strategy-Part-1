import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 0;
  font-family: "Arial", sans-serif;
`;

const MainText = styled.div`
  font-size: 4.2667vw;
  font-weight: 900;
  margin-bottom: 8.0000vw;
  margin-top: 14vw;
`;

const Message = styled.p`
  font-size: 3.7333vw; // 반응형 글자 크기
  text-align: center;
  margin: 5.3333vw;
  color: #333;
  margin-bottom: 16vw;
`;

const Button = styled.button`
  width: 60vw;
  padding: 2vw; // 반응형 패딩
  margin: 2.6667vw;
  background-color: #00A86B;
  color: white;
  border: none;
  font-size: 4vw; // 반응형 글자 크기
  cursor: pointer;
  border-radius: 41.5px;
  border: 1px solid #00A86B; // 초록색 태두리

  &:hover {
    background-color: #00A86B;
  }
`;

const OrderButton = styled(Button)`
  background-color: white; // 흰색 배경
  color: #00A86B; // 초록색 글자
  border: 1px solid #00A86B; // 초록색 태두리

  &:hover {
    background-color: #f0f0f0; // 호버 시 배경 색 변경
  }
`;

const TextLogo = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10vw;
`;

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <MainText>안녕하세요! 한동 공략 1조입니다.</MainText>
      <Message>
        퀴즈 3개 이상 맞춘 <br />
        가격을 할인해 드리고 있습니다! <br />
        많은 참여 부탁드립니다😊
      </Message>
      <OrderButton onClick={() => navigate("/order")}>주문하기</OrderButton>
      <Button onClick={() => navigate("/order-CheckMan")}>퀴즈풀기</Button>
      <TextLogo src={require("../../Asset/logo.png")} />
    </Container>
  );
}

export default HomePage;
