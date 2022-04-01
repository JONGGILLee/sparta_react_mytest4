import React, { useState } from "react";
import styled from "styled-components";

const Button = (props) => {
  const my_wrap = React.useRef(null);
  console.log(my_wrap); // 콘솔로 확인해봐요!

  const [list, setList] = React.useState([]);

  const addList = () => {
    console.log(my_wrap.current.value);
    setList([...list, my_wrap.current.value]);
  };
  //   window.setTimeout(() => {
  //     // 1초 뒤에는?!
  //     console.log(my_wrap);
  //   }, 1000);
  console.log(list);
  return (
    <>
      <div ref={my_wrap}>
        {list.map((l, index) => {
          return <ItemStyle key={index}>{l}</ItemStyle>;
        })}
      </div>

      <div align="center">
        <input
          type="text"
          ref={my_wrap}
          onChange={() => {
            console.log(my_wrap.current.value);
          }}
        ></input>
        <button onClick={addList}>추가하기</button>
      </div>
    </>
  );
};

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default Button;
