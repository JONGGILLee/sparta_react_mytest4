import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteDict } from "./redux/modules/dict";
import { useSelector, useDispatch } from "react-redux";

const EditPage = (props) => {
  const history = useHistory();
  const my_wrap = React.useRef(null);

  const params = useParams();
  console.log(params);

  const dict_list = useSelector((state) => state.dict.list);
  console.log(dict_list[params.idx]);

  const dispatch = useDispatch();

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
        <h1>{dict_list[params.idx]}</h1>
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          단어장으로 돌아가기
        </button>
        <button
          onClick={() => {
            dispatch(deleteDict(params.idx));
            history.goBack();
          }}
        >
          이 리스트 삭제하기~!
        </button>
      </div>
    </>
  );
};

export default EditPage;
