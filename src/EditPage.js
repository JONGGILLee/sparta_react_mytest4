import React from "react";
import { useHistory } from "react-router-dom";

const EditPage = (props) => {
  const history = useHistory();
  const my_wrap = React.useRef(null);

  return (
    <>
      <div align="center">
        <input
          type="text"
          ref={my_wrap}
          onChange={() => {
            console.log(my_wrap.current.value);
          }}
        />
      </div>
      <div>
        <h1>단어장을 작성해주세요</h1>
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          단어장으로 돌아가기
        </button>
      </div>
    </>
  );
};

export default EditPage;
