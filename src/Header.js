import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <MyStyled>
      <h1 className="head">
        개인사전 만들기 테스트
        <hr className="line" />
      </h1>
    </MyStyled>
  );
};

const MyStyled = styled.div`
  align: center;
  background: #e1960b;
  padding: 15px;
  margin: 10px;
  text-align: center;
`;

export default Header;
