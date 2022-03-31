import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = (props) => {
  const history = useHistory();

  return (
    <>
      <h1>올바른 주소가 아닙니다!~</h1>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        홈으로 돌아가기
      </button>
    </>
  );
};

export default NotFound;
