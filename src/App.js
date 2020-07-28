import React, {Component} from "react"



class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count : 0,
      doubleCount: false,
    };
    // this.toggleIt = document.getElementsByClassName("toggle")
  }

  stop = () => {
    this.setState({
      count: this.state.count
    })
  }



  increment = () => {
    
    if(this.state.count < 20){
     this.setState({
      count: this.state.count + 1
      })
    }
     if(this.state.doubleCount && this.state.count < 19){
      this.setState({
        count: this.state.count + 2
      })
    }
  }


  //   this.setState ({
  //     count: this.state.count + 1
  //   })
  //   if(this.state.count >= 20){
  //      this.stop()
  //   }
  // }


  decrement = () => {
    if(this.state.count > 0){
      this.setState({
        count: this.state.count - 1
      })
    }
    if(this.state.doubleCount && this.state.count >1 ){
          this.setState({
            count:this.state.count - 2
          })
    }
  }
    


    
  //   this.setState({
  //     count: this.state.count - 1
  //   })
  //   if (this.state.count === 0){
  //     this.stop()
  //   }
  // }

  clear = () => {
    this.setState({
      count: 0
      // this.state.count - this.state.count
    })
  }

  incrementByTwo = () => {
    // toggleIt[0].innerHTML = 'Single Increment'
    this.setState({
      count: this.state.count + 2
    })
    if(this.state.count >= 19 ){
      this.stop()
    }
  }

  
  double = () => {
    if(this.state.doubleCount){
      this.setState({
        doubleCount: false
      })
    }else {
      this.setState({
          doubleCount: true
      })
    }
  }
    

  

  


 

  render(){
    return(
      <div className="container">
        <div className="navbar"> Counter.js</div>
        <div className="counter">
          <h1 > {this.state.count} </h1>
          <button type="button" className="IncButton" onClick={this.increment}> Increment</button>
          <button type="button" onClick={this.decrement}> Decrement</button>
          <button type="button" onClick={this.clear}> Clear</button>
          <button type="button" onClick={this.double}>
            {this.state.doubleCount ? "Double Count": "Single Count"}
             </button>
        </div>
      </div>
    )
  }
};


export default Counter;