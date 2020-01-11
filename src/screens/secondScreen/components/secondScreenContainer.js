import React, { Component } from "react";
import { getCount } from "../secondScreen.selector";
import { addCount, subCount } from "../secondScreen.action";
import { connect } from "react-redux";

class SecondScreen extends Component {
  add = () => {
    this.props.addCount(2);
  };
  sub = () => {
    this.props.subCount(2);
  };
  componentDidMount() {
    console.log("1");
    setTimeout(() => console.log("2"), 0);
    console.log("3");
    setTimeout(() => console.log("4"), 0);
    console.log("4");
    console.log("5");
    console.log("6");
    console.log("7");
    console.log("8");
    console.log("9");
  }
  render() {
    const { count } = this.props;
    return (
      <div>
        count :{count}
        <button onClick={() => this.add()}> Add</button>
        <button onClick={() => this.sub()}> Sub</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: getCount(state)
});

const mapDispatchToProps = { addCount, subCount };

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
