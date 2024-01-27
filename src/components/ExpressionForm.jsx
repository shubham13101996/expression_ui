import React, { useState } from "react";

const ExpressionForm = ({ addExpression }) => {
  const [ruleType, setRuleType] = useState("");
  const [operator, setOperator] = useState("");
  const [value, setValue] = useState("");
  const [score, setScore] = useState("");
  const [combinator, setCombinator] = useState("and"); // default combinator

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((ruleType == "" || operator == "" || value == "", score == "")) {
      alert("Invalid Input");
    }

    if (ruleType && operator && value && score) {
      const output = {
        operator,
        value,
        score,
      };

      addExpression({ ruleType, output, combinator });
      setRuleType("");
      setOperator("");
      setValue("");
      setScore("");
      alert("Expression Created");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Dropdown for Rule Type */}
      <select
        className="form-select mb-2"
        value={ruleType}
        onChange={(e) => setRuleType(e.target.value)}
      >
        <option value="" disabled>
          Select Rule Type
        </option>
        <option value="age">Age</option>
        <option value="creditScore">Credit Score</option>
        <option value="accountBalance">Account Balance</option>
      </select>

      {/* Operator Input */}
      <select
        className="form-select mb-2"
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value="" disabled>
          Operator
        </option>
        <option value=">=">&ge;</option>
        <option value="<=">&le;</option>
        <option value="=">&#61;</option>
        <option value=">">&gt; </option>
        <option value="<">&lt;</option>
      </select>
      {/* Value Input */}
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* Score Input */}
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      {/* Add combinator selection here if needed */}
      <div className="m-6">
        <label>Combinator: </label>
        <select
          className="form-select"
          value={combinator}
          onChange={(e) => setCombinator(e.target.value)}
        >
          <option value="and">AND</option>
          <option value="or">OR</option>
        </select>
      </div>
      {/* Submit Button */}
      <div className="my-5">
        <button type="submit" className="btn btn-primary mt-10">
          Add Expression
        </button>
      </div>
    </form>
  );
};

export default ExpressionForm;
