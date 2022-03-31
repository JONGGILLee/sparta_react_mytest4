import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <MyStyled bg_color={"#e9af45"}>
      <h1 className="head">
        개인사전 만들기 테스트
        <hr className="line" />
      </h1>
    </MyStyled>
  );
};

const MyStyled = styled.div`
  align: center;
  width: 70vw;
  background-color: ${(props) => props.bg_color};
  padding: 15px;
  margin: auto;
  text-align: center;
  border-radius: 10px;
`;
// 백틱 `` 안에서 ${ ()=> () 이용하여 삼항연산자 사용}
// ()=>{ return abc; }
// ()=>(abc)

export default Header;
