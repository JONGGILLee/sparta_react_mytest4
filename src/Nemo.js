import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Nemo = (props) => {
  const [count, setCount] = React.useState(3);
  //   count 를 변경하는 함수가 setCount에 들어간다. 그리고 state 에 들어가는 초기값3을 useState(3)에 넣어준다.
  console.log(count);
  const nemo_count = Array.from({ length: count }, (v, i) => i);
  //   새로 만들 길이가 3인 배열 요소 하나하나에 인덱스 값을 넣어줄거야
  console.log(nemo_count);
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
      {nemo_count.map((n, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              history.push("/EditPage/" + index);
            }}
            // Key 모든 React 요소들이 자동으로 랜덤 생성되는 값. 여기에 인덱스 i 값을 넣어 줄 수 있다.
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "orange",
              margin: "10px",
              borderRadius: "10px",
            }}
          >
            nemo
          </div>
        );
      })}
      <div
        onClick={() => {
          history.push("/EditPage");
        }}
        style={{
          width: "20px",
          heigh: "20px",
          backgroundColor: "#d33636",
          borderRadius: "30px",
        }}
      >
        <hr />
        버튼
      </div>
      <div>
        <button onClick={addNemo}> 추가버튼</button>
        <button onClick={deleteNemo}> 삭제버튼</button>
      </div>
    </>
  );
};

export default Nemo;
