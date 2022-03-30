import React from "react";
import { useHistory } from "react-router-dom";

const Dog = (props) => {
  const history = useHistory();
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          //   props.history.push("/");
          //   push 는 페이지 이동
          history.push("/Cat");
        }}
      >
        댕댕이 만들기 테스트
      </button>
    </div>
  );
};

export default Dog;
