import { useState, useEffect } from "react";
// useEffect is a function that takes two arguments

function App() {
  const [counter, setValue] = useState(0);
  // [value, modifier function]
  // value : value / setValue : value를 수정하기 위한 function
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");

  // const iRunOnlyOnce = () => {
  //   console.log("i run only once");
  // };
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  // useEffect function allows us the basically protect our code to only be called one time. This is why we use useEffect function.

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
