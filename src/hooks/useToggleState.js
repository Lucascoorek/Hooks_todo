import { useState } from "react";

export default (initState = false) => {
  const [state, setState] = useState(initState);
  const toggleState = () => {
    setState(!state);
  };
  return [state, toggleState];
};
