import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../../Style/theme";

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92%;
  margin-bottom: 65px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #C4E8DB;
    ${(props) =>
      props.active &&
      css`
        background-color: #00A86B;
      `};
`;

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  border-top: 2px dashed #C4E8DB;
  margin-left: 5px;
  margin-right: 5px;

  ${(props) =>
    props.active &&
    css`
      border-color: #00A86B;
    `}
`;

const ProgressComponent = ({ step }) => {
  return (
    <ThemeProvider theme={theme}>
      <ProgressBar>
        <Circle active={step > 0} />
        <Line active={step > 0} />
        <Circle active={step > 1} />
        <Line active={step > 2} />
        <Circle active={step > 2} />
        <Line active={step > 3} />
        <Circle active={step > 3} />
        <Line active={step > 4} />
        <Circle active={step > 4} />
      </ProgressBar>
    </ThemeProvider>
  );
};

export default ProgressComponent;
