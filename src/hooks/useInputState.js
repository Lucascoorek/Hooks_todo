import { useState } from "react";

function useInputState(initialVal) {
  const [input, setInput] = useState(initialVal);
  const handeChange = e => {
    setInput(e.target.value);
  };
  const reset = () => {
    setInput("");
  };
  return [input, handeChange, reset];
}
export default useInputState;
