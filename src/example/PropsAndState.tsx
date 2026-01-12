import React, { useState } from "react";
import { NormalButton } from "../components/Button/NormalButton";
import { NumberLabel } from "../components/Label/NumberLabel";

export const PropsAndState = () => {
  const [count, setCount] = useState(0);

  const sub = () => {
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <>
      <NormalButton onClick={sub} label={"-"}></NormalButton>
      <NumberLabel data={count} />
      <NormalButton onClick={add} label={"+"}></NormalButton>
    </>
  );
};
