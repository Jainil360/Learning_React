import React, { Component } from "react";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "John",
    };

    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
    }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

   getSnapshotBeforeUpdate() {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    }

changeFirstName = () => {
    this.setState({
        firstName: "Jaynil",
    });
}

  render() {
    console.log("LifeCycleA render");
    return <div>
        <h1>LifeCycleA</h1>
        <button onClick={this.changeFirstName}>Change First Name</button>
    </div>;
  }
}

export default LifeCycleA;
