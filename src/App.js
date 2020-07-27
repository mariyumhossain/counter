import React, {Component} from "react"

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count : 0,
    };
  }

  stopIncrement = () => {
    this.setState({
      count: this.state.count
    })
  }

  stopDecrement = () => {
    this.setState ({
      count: this.state.count
    })
  }

  increment = () => {
    this.setState ({
      count: this.state.count + 1
    })
    if(this.state.count === 20){
       this.stopIncrement()
    }
  }


  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
    if (this.state.count === 0){
      this.stopDecrement()
    }
  }

  clear = () => {
    this.setState({
      count: this.state.count - this.state.count
    })
  }
  render(){
    return(
      <div className="container">
        <div className="navbar"> Counter.js</div>
        <div className="counter">
          <h1> {this.state.count} </h1>
          <button type="button" onClick={this.increment}> Increment</button>
          <button type="button" onClick={this.decrement}> Decrement</button>
          <button type="button" onClick={this.clear}> Clear</button>
        </div>
      </div>
    )
  }
}

export default Counter;