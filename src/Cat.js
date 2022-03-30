import React from "react";
import { useParams } from "react-router-dom";

const Cat = (props) => {
  const cat_name = useParams();
  console.log(cat_name);
  return <div>고양이 만들기 테스트</div>;
};

export default Cat;
