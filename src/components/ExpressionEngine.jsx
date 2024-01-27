import React, { useState } from "react";
import ExpressionForm from "./ExpressionForm";
import ExpressionList from "./ExpressionList";

const ExpressionEngine = () => {
  const [expressions, setExpressions] = useState([
    {
      ruleType: "age",
      output: {
        value: 60,
        operator: ">=",
        score: 50,
      },

      combinator: "and",
    },
  ]);
  //   const [combinator, setCombinator] = useState("and"); // default combinator

  localStorage.setItem("expression", JSON.stringify(expressions));
  //   console.log(JSON.stringify(expressions));

  console.log(expressions);
  
  const addExpression = (expression) => {
    // console.log(expression);
    setExpressions([...expressions, expression]);

  };
  const deleteExpression = (index) => {
    const newExpressions = [...expressions];
    newExpressions.splice(index, 1);
    setExpressions(newExpressions);
  };

  return (
    <div className="container mt-5">
      <h2>Expression Engine</h2>
      <ExpressionForm addExpression={addExpression} />
      <ExpressionList
        expressions={expressions}
        deleteExpression={deleteExpression}
      />
      {/* Add combinator selection here if needed
      <div className="mt-3">
        <label>Combinator: </label>
        <select
          className="form-select"
          value={combinator}
          onChange={(e) => setCombinator(e.target.value)}
        >
          <option value="and">AND</option>
          <option value="or">OR</option>
        </select>
      </div> */}
    </div>
  );
};

export default ExpressionEngine;
