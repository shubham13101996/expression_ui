import React from "react";

const ExpressionList = ({ expressions, deleteExpression }) => {
  const expression = JSON.parse(localStorage.getItem("expression"))
  console.log(expression);

  return (
    <ul className="list-group">
      {expressions.map((expression, index) => (
        <li key={index} className="list-group-item">
         key: {expression.ruleType} , Operator: {expression.output.operator} , Value: {expression.output.value} , Score:{" "}
          {expression.output.score} , Combinator: {expression.combinator}
          <button
            className="btn btn-danger btn-sm float-end"
            onClick={() => deleteExpression(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpressionList;
