import React from "react";
import Question from "../../question";
import Button from "react-bootstrap/Button";
import QuestionNavButtonBar from "../../questionNavButtonBar";

const QuizContainer = ({
  quizData,
  onOptionSelected,
  optionsSelected,
  selectedQuestion,
  setSelectedQuestion,
  onCancel,
  onQuizSubmit
}) => {
  const getAllQuizQuestions = () =>
    quizData.map((eachQuestion, index) => (
      <Question
        key={eachQuestion.id}
        questionData={eachQuestion}
        onOptionSelected={onOptionSelected(eachQuestion.id)}
        optionsSelected={optionsSelected[eachQuestion.id]}
        showQuestion={index + 1 === selectedQuestion}
      />
    ));

  const quizQuestions = getAllQuizQuestions();

  return (
    <div data-testid="quiz-container">
      <QuestionNavButtonBar
        selectedQuestion={selectedQuestion}
        numberOfQuestions={quizData.length}
        setSelectedQuestion={setSelectedQuestion}
      />
      <div>{quizQuestions}</div>
      <div>
        <Button
          data-testid="cancel-button"
          variant="outline-secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          data-testid="submit-quiz-button"
          variant="primary"
          onClick={onQuizSubmit}
        >
          Submit Quiz
        </Button>
      </div>
    </div>
  );
};

export default QuizContainer;
