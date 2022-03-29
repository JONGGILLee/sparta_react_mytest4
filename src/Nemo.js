import React from "react";

const Nemo = (props) => {
  const nemo_count = Array.from({ length: 5 }, (v, i) => i);
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
            nemo
          </div>
        );
      })}

      <div>
        <button> 추가버튼</button>
      </div>
    </>
  );
};

export default Nemo;
