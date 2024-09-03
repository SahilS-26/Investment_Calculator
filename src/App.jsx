import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 700,
    expectedReturn: 6,
    duration: 12,
  });

  const isValidInput = userInput.duration > 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isValidInput && (
        <p className="center">Please enter duration greater than zero.</p>
      )}
      {isValidInput && <Result input={userInput} />}
    </>
  );
}

export default App;
