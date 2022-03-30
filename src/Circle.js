import React from "react";

const Circle = (props) => {
  const circle = React.useRef(null);
  const hoverEvent = () => {
    circle.current.style.background = "yellow";
  };

  React.useEffect(() => {
    circle.current.addEventListener("mouseover", hoverEvent);
    // addEventListener("어떤 이벤트면", "어떤 행동 할게")

    return () => {
      circle.current.removeEventListener("mouseover", hoverEvent);
    };
    // useEffect에서 return 값은 componentWillUnmount 를 의미한다.
  }, []);
  return <h1 ref={circle}> 동그라미입니다.!</h1>;
};

export default Circle;
