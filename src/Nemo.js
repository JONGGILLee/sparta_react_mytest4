import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Nemo = (props) => {
  const [count, setCount] = React.useState(2);
  //   count 를 변경하는 함수가 setCount에 들어간다. 그리고 state 에 들어가는 초기값2을 useState(2)에 넣어준다.
  console.log(count);
  const nemo_count = Array.from({ length: count }, (v, i) => i);

  const addNemo = () => {
    setCount(count + 1);
  };
  const deleteNemo = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      window.alert("네모가 없습니다.");
    }
  };

  const history = useHistory();

  return (
    <>
      {nemo_count.map((n, i) => {
        return (
          <div
            key={i}
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "orange",
              margin: "10px",
            }}
          >
            <button
              onClick={() => {
                history.push("/EditPage");
              }}
            >
              nemo
            </button>
          </div>
        );
      })}

      <div>
        <button onClick={addNemo}> 추가버튼</button>
        <button onClick={deleteNemo}> 삭제버튼</button>
      </div>
    </>
  );
};

export default Nemo;
