import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1> hello </h1>
      <button onClick={onClickCountUp}> count up</button>
      <br />
      <button onClick={onClickSwitchShowFlag}> on/off </button>
      <p>{num}</p>
      {faceShowFlag && <p> wow </p>}
    </>
  );
};

export default App;
