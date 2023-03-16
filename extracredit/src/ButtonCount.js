import { useState } from "react";

const ButtonCount = () => {
  const [clickCount, setClickCount] = useState(0);
  return <button onClick={() => setClickCount(c => c + 1)}>Times Clicked: {clickCount}</button>;
};

export default ButtonCount;
