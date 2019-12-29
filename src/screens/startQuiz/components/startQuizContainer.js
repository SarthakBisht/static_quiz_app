import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Quiz from "../../../modules/quiz";
import "./startQuiz.style.css";

class StartQuizContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      quizData: require("../quizData.json"),
      optionsSelected: {},
      startQuiz: false,
      selectedQuestion: 1
    };
  }

  startStopQuiz = () => {
    this.setState({ startQuiz: !this.state.startQuiz });
    this.resetQuiz();
  };

  onOptionSelected = id => solution => {
    const { optionsSelected } = this.state;
    this.setState({ optionsSelected: { ...optionsSelected, [id]: solution } });
  };

  setSelectedQuestion = selectedQuestion => {
    this.setState({ selectedQuestion });
  };

  onQuizSubmit = () => {
    const { quizData, optionsSelected } = this.state;
    const numberOfCorrectAnswers = quizData.filter(
      eachQuestion => eachQuestion.answer === optionsSelected[eachQuestion.id]
    ).length;
    const numberOfWrongAnswers = quizData.length - numberOfCorrectAnswers;
    alert(
      `Your Quiz result is :- Right answers:${numberOfCorrectAnswers} & Wrong answers: ${numberOfWrongAnswers}`
    );
    this.startStopQuiz();
  };

  resetQuiz = () => {
    this.setState({ selectedQuestion: 1, optionsSelected: {} });
  };

  render() {
    const {
      startQuiz,
      quizData,
      optionsSelected,
      selectedQuestion
    } = this.state;
    return (
      <div className="start-quiz-container">
        {startQuiz ? (
          <Quiz
            quizData={quizData}
            onOptionSelected={this.onOptionSelected}
            optionsSelected={optionsSelected}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={this.setSelectedQuestion}
            onCancel={this.startStopQuiz}
            onQuizSubmit={this.onQuizSubmit}
          />
        ) : (
          <div>
            <h2 className="mb-4 text-center">Welcome to quiz</h2>
            <div className="text-center">
              <Button
                data-testid="start-quiz-button"
                onClick={this.startStopQuiz}
                variant="primary"
              >
                Start Quiz
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default StartQuizContainer;
