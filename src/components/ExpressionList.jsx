import React from "react";

const ExpressionList = ({ expressions, deleteExpression }) => {
  return (
    <ul className="list-group">
      {expressions.map((expression, index) => (
        <li key={index} className="list-group-item">
          {expression.ruleType} {expression.operator} {expression.value} Score:{" "}
          {expression.score}
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
