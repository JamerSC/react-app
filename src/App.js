import { useEffect, useState } from "react"; // react library

export default function App() {
  // useState is a React Hook that lets you add a state variable to your component
  const [advice, setAdvice] = useState(""); // arrays of integer
  const [count, setCount] = useState(0); // arrays of integer
 
  // async getter method
  async function getAdvice(advice) { // async function
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    // alert(data.slip.advice);
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  // useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

  useEffect(function () {
    getAdvice();
  }, [])

  // JSX stands for JavaScript XML
  return (
    <div >
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice!</button>
      <Message count={count} />
    </div>
  );
}

// Components are independent and reusable bits of code. 
// They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

// Props is a special keyword in React that stands for properties 
// and is used for passing data from one component to another. 

function Message(props) {
  return (
    <p>
      Read count total: <strong>{props.count}</strong>
    </p>
  );
}