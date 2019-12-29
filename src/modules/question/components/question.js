import React from "react";
import Card from "react-bootstrap/Card";
import "./question.style.css";

const Question = ({
  questionData,
  onOptionSelected,
  optionsSelected,
  showQuestion
}) => {
  const { question, options } = questionData;
  return showQuestion ? (
    <div className="question-wrapper">
      <Card>
        <Card.Header>{question}</Card.Header>
        <Card.Body>
          <ul>
            {options.map((eachOption, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    checked={eachOption === optionsSelected}
                    onChange={() => onOptionSelected(eachOption)}
                  />
                  {eachOption}
                </label>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  ) : null;
};
export default Question;
