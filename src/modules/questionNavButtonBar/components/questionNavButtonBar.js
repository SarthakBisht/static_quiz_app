import React from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const QuestionNavButtonBar = ({
  selectedQuestion,
  numberOfQuestions,
  setSelectedQuestion
}) => (
  <div data-testid="question-nav-bar-container">
    <Button
      variant="primary"
      disabled={selectedQuestion === 1}
      onClick={() => setSelectedQuestion(selectedQuestion - 1)}
    >
      Previous
    </Button>
    <ButtonToolbar>
      <ButtonGroup className="mr-2">
        {[...Array(numberOfQuestions)].map((eachQuestion, index) => (
          <Button
            key={index}
            data-testid={`nav-Buttpon-${index + 1}`}
            variant={
              index + 1 === selectedQuestion ? "primary" : "outline-secondary"
            }
            onClick={() => setSelectedQuestion(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </ButtonGroup>
    </ButtonToolbar>
    <Button
      variant="primary"
      disabled={selectedQuestion === numberOfQuestions}
      onClick={() => setSelectedQuestion(selectedQuestion + 1)}
    >
      Next
    </Button>
  </div>
);

export default QuestionNavButtonBar;
