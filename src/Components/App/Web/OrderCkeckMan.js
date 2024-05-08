import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { dbService } from "../../../fbase";

const DDiv = styled.div`
  background: #fff;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;

const TitleDiv = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 80px;
  align-items: center;
`;

const HomeTitle = styled.div`
  color: var(--black-background, #1a1a1a);
  font-family: "Pretendard";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

const BodyDiv = styled.div`
  display: flex;
  margin-top: 83px;
  margin-left: 80px;
  height: 744px;
`;

const RightDiv = styled.div`
  width: 100%;
  height: 744px;
  margin-right: 40px;
`;

const ScheduleDiv = styled.div`
  height: 656px;
  margin-top: 30px;
`;

const ScheduleItem = styled.div`
  width: 100%;
  height: 115px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  margin-bottom: 22px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const ScheduleFirstDiv = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6px;
  padding: 10px;
`;

const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: ${(props) => props.top || 0}px;
`;

const NumText = styled.div`
  color: var(--Black-Background, #1a1a1a);
  /* Admin/A4-M-16 */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-right: 20px;
`;

const Button = styled.button`
  width: 120px;
  padding: 1vw; // 반응형 패딩
  background-color: ${(props) => (props.status === 1 ? "red" : "#00a86b")};
  color: white;
  border: none;
  color: #fff;

  font-family: "Noto Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  cursor: pointer;
  border-radius: 5.3333vw;
  margin-top: 20px;

  &:hover {
    background-color: #00a86b;
  }
`;

const OrderCkeckMan = () => {
  const [schedules, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const data = await getDocs(collection(dbService, "order"));
        const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })); // 데이터 매핑 시 각 문서의 id도 저장
        setSchedule(newData);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };

    fetchSchedules();
  }, []);

  const handleStatusChange = async (schedule) => {
    const newStatus = schedule.status === 0 ? 1 : 2;
    const message = schedule.status === 0 
      ? "조리시키겠습니까?" 
      : "주문 처리 하시겠습니까?";

    if (window.confirm(message)) {
      try {
        const docRef = doc(dbService, "order", schedule.id);
        await updateDoc(docRef, { status: newStatus });
        alert("상태가 업데이트되었습니다.");
        // 상태 업데이트 후 컴포넌트의 상태도 업데이트 하여 리렌더링
        const updatedSchedules = schedules.map(s => 
          s.id === schedule.id ? { ...s, status: newStatus } : s
        );
        setSchedule(updatedSchedules);
      } catch (error) {
        console.error("Error updating document: ", error);
        alert("상태 업데이트에 실패했습니다.");
      }
    }
  };

  return (
    <DDiv>
      <TitleDiv>
        <HomeTitle>홈</HomeTitle>
      </TitleDiv>
      <BodyDiv>
        <RightDiv>
          <HomeTitle>일정 업데이트</HomeTitle>
          <ScheduleDiv>
            {schedules.map(
              (
                schedule // 배열의 각 요소를 'schedule'로 참조
              ) => (
                <ScheduleItem key={schedule.id}>
                  <FlexDiv>
                    <ScheduleFirstDiv>
                      <FlexDiv top={-5}>
                        <HomeTitle>일정 업데이트</HomeTitle>
                        <HomeTitle>고객 전화번호</HomeTitle>
                      </FlexDiv>
                      <FlexDiv top={5}>
                        <div>
                          <NumText>
                            삼 + 소 수량 : {schedule.menuCount[0]}
                          </NumText>
                          <NumText>
                            삼 + 비 수량 : {schedule.menuCount[1]}
                          </NumText>
                        </div>
                        <NumText>{schedule.phoneNumber}</NumText>
                      </FlexDiv>
                    </ScheduleFirstDiv>
                    <Button status={schedule.status}  onClick={() => handleStatusChange(schedule)}>
                      {schedule.status === 0 ? "접수중" : "조리중"}
                    </Button>
                  </FlexDiv>
                </ScheduleItem>
              )
            )}
          </ScheduleDiv>
        </RightDiv>
      </BodyDiv>
    </DDiv>
  );
};

export default OrderCkeckMan;
