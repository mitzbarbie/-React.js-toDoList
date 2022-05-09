import { useState, useEffect } from "react";
// useEffect is a function that takes two arguments

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  // [value, modifier function]
  // value : value / setValue : value를 수정하기 위한 function
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log("i run all the time");

  // const iRunOnlyOnce = () => {
  //   console.log("i run only once");
  // };
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  // useEffect function allows us the basically protect our code to only be called one time. This is why we use useEffect function.

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here!"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
