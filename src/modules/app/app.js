import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import StartQuizContainer from "../../screens/startQuiz";
import SecondScreen from "../../screens/secondScreen/components/secondScreenContainer";

const Login = () => {
  return <h1>Login</h1>;
};

const User = props => {
  return <h1>user is {props.match.params && props.match.params.username}</h1>;
};
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ color: "red" }}>
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/quiz" activeStyle={{ color: "red" }}>
                Quiz
              </NavLink>
            </li>
            <li>
              <NavLink to="/count" activeStyle={{ color: "red" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/sarthak" activeStyle={{ color: "red" }}>
                user sarthak
              </NavLink>
            </li>
          </ul>
          <Route path="/" exact strict component={Login} />
          <Route path="/quiz" exact strict component={StartQuizContainer} />
          <Route path="/count" exact strict component={SecondScreen} />
          <Route
            path="/count/new"
            exact
            strict
            render={() => {
              return <h1>New window</h1>;
            }}
          />
          <Route path="/user/:username" exact strict component={User} />
          <Route
            path="/profile/:profile"
            exact
            strict
            render={props =>
              props.match.params.profile === "abc" ? (
                <Redirect to="/quiz"></Redirect>
              ) : (
                <div>{props.match.params.profile}</div>
              )
            }
          />
        </Router>
      </div>
    );
  }
}

export default App;
