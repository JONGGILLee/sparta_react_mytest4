import React from "react";
import styled from "styled-components";

const Button = ({ list }) => {
  const my_lists = list;
  const my_wrap = React.useRef(null);

  console.log(my_wrap); // 콘솔로 확인해봐요!

  window.setTimeout(() => {
    // 1초 뒤에는?!
    console.log(my_wrap);
  }, 1000);
  return (
    <>
      <div ref={my_wrap}>
        {my_lists.map((list, index) => {
          return <ItemStyle key={index}>{list}</ItemStyle>;
        })}
      </div>

      <div align="center">
        <input
          type="text"
          ref={my_wrap}
          onChange={() => {
            console.log(my_wrap.current.value);
          }}
        />
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
