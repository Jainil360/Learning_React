import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {

    //Approch 1: IF ELSE

    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h1>Welcome John</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="container text-center">
    //       <h1>Welcome Guest</h1>
    //     </div>
    //   );
    // }


    //Approch 2: element Variable

    // let message
    // if (this.state.isLoggedIn) {
    //     message = <h1>Welcome John</h1>
    //     }
    // else {
    //     message = <h1>Welcome Guest</h1>
    // }
    // return (
    //     <div className="container text-center">
    //         {message}
    //     </div>
    // );


    //Approch 3: Turnery Operator
    
    // return (
    //     <div className="container text-center">
    //         {this.state.isLoggedIn ? <h1>Welcome John</h1> : <h1>Welcome Guest</h1>}
    //     </div>
    // );

    //Approch 4: short-circuit operator

    return (
        <div className="container text-center">
            {this.state.isLoggedIn && <h1>Welcome John</h1>}
        </div>) 


  }
}

export default UserGreeting;
