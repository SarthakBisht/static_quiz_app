import React from "react";
import Card from "react-bootstrap/Card";

const Question = ({
  questionData,
  onOptionSelected,
  optionsSelected,
  showQuestion
}) => {
  const { question, options } = questionData;
  return showQuestion ? (
    <Card>
      <Card.Header>{question}</Card.Header>
      <Card.Body>
        {options.map((eachOption, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value="small"
                checked={eachOption === optionsSelected}
                onChange={() => onOptionSelected(eachOption)}
              />
              {eachOption}
            </label>
          </li>
        ))}
      </Card.Body>
    </Card>
  ) : null;
};
export default Question;
