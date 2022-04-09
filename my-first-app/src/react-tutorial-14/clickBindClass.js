import React, { Component } from 'react'

//bind using arrow functions
//  class clickBindClass extends Component {
//      constructor(){
//          super();
//          this.state = {
//              count: 0
//          }
//         }
//          incrementCount = () => {
//                 this.setState({
//                     count: this.state.count + 1
//                 })
     
//          }
        
     
//   render() {
//     return (
//       <div className='container text-center'>
//           <h1>{this.state.count}</h1>
//           <button type="button" className="btn btn-primary" onClick={this.incrementCount}>Change State</button>
          
//       </div>
//     )
//   }
// }


//binding using bind()
// class clickBindClass extends Component {
//     constructor(){
//         super();
//         this.state = {
//             message: "Hey there"
//         }
//        }
//         changeMessage (){
//                this.setState({
//                    message: "Hello World"
//                })
    
//         }
       
    
//  render() {
//    return (
//      <div className='container text-center'>
//          <h1>{this.state.message}</h1>
//          <button type="button" className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Change State</button>
         
//      </div>
//    )
//  }
// }


//binding in constructor
class clickBindClass extends Component {
    constructor(){
        super();
        this.state = {
            message: "Hey there"
        }

        this.changeMessage = this.changeMessage.bind(this);
       }
        changeMessage (){
               this.setState({
                   message: "Hello World"
               })
    
        }
       
    
 render() {
   return (
     <div className='container text-center'>
         <h1>{this.state.message}</h1>
         <button type="button" className="btn btn-primary" onClick={this.changeMessage}>Change State</button>
         
     </div>
   )
 }
}
export default clickBindClass