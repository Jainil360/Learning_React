import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Hey there",
    };
  }
  greetParent = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };
  render() {
    return <div className="container text-center">
        <ChildComponent greetHandler={this.greetParent} />
    </div>;
  }
}

export default ParentComponent;
