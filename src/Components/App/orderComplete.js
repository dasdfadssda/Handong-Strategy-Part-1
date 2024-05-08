import React, { useState } from "react";
import styled from "styled-components";
import checkMark from "../../Asset/CheckGreen.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const CheckIcon = styled.img`
  width: 16%; // Adjust size as needed
  margin-bottom: 6vw;
  margin-top: 30vw;
`;

const Message = styled.div`
  color: #000;
  font-family: "Noto Sans";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  span {
    font-weight: 700;
  }
`;

const AcountText = styled.div`
  color: var(--Color-2, #363636);

  text-align: center;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-top: 3.7333vw;
`;

const SubmitText = styled.div`
  color: var(--Color-2, #363636);
  text-align: center;
  font-family: "Noto Sans";
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 0.8vw;
  margin-bottom: 3.2vw;
`;

const Button = styled.button`
  width: 26vw;
  padding: 1vw;
  background-color: #00a86b;
  color: white;
  border: none;
  font-size: 3.7333vw;
  font-weight: 500;
  cursor: pointer;
  border-radius: 2.9333vw;
  border: 1px solid #00a86b; // 초록색 태두리
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #00a86b;
  }
`;

const Icon = styled.img`
  width: 5.6vw;
  height: auto;
  margin-right: 1.3333vw;
`;

const ExplainText = styled.div`
  color: var(--Color-2, #363636);
  text-align: center;
  font-family: "Noto Sans";
  font-size: 2.6667vw;
  font-weight: 400;
  line-height: 140%;
  margin-top: 6.1333vw;
`;

const StyledInput = styled.input`
  width: 80%; 
  padding: 3vw 3vw;
  border-radius: 2.9333vw; 
  background: #E5FCF4; 
  border: none; 
  margin-top: 37.3333vw;
  color: #797979; 
  font-family: "Noto Sans"; 
  font-size: 3.7333vw; 
  font-style: normal; 
  font-weight: 400; 
  line-height: 140%; 

  &::placeholder { 
    color: #797979;
  }

  &:focus { // 포커스 시 스타일
    outline: none; // 기본 아웃라인 제거
  }
`;

const SubmitButton = styled.button`
width: 100%;
height: 62px;
background-color: #00A86B;
color: #FFF;
text-align: center;
font-family: "Noto Sans";
font-size: 4.2667vw;
font-style: normal;
font-weight: 500;
line-height: 140%;
border: none;
margin-top: 12.2667vw;
`;

function OrderCompletionScreen() {
  const navigate = useNavigate();

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("28350104203645 국민");
      setIsCopied(true); // 상태를 "복사완료"로 변경
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Container>
      <CheckIcon src={checkMark} alt="Check Mark" />
      <Message>
        <span>주문</span>이 완료되었습니다.
      </Message>
      <AcountText>28350104203645 국민 (한동공략1조)</AcountText>
      <SubmitText>입금 후 내역을 제일 못생긴 친구에게 보여주세요.</SubmitText>
      <Button onClick={handleCopy}>
        <Icon
          src={
            !isCopied
              ? require("../../Asset/copyIcon.png")
              : require("../../Asset/copyfin_icon.png")
          }
        />
        {isCopied ? "복사완료" : "복사하기"}
      </Button>
      <StyledInput placeholder="휴대폰 번호" />
      <ExplainText>
        대기시간이 길거나 예약이 필요한 경우에 작성하여 주세요.
        <br />
        음식이 완료되면, 입력하신 번호로 문자를 보내드립니다!
        <br />
        <br />
        이용해주셔서 감사합니다.
      </ExplainText>
      <SubmitButton>제출</SubmitButton>
    </Container>
  );
}

export default OrderCompletionScreen;
