import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(input, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput input={userInput} onChange={handleChange} />
    </>
  );
}

export default App;
