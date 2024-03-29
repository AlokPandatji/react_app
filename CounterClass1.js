import React, { Component } from 'react'

export class CounterClass1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        document.title =` Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count) {
            console.log('updating document title')
            document.title = `Clicked ${this.state.count} place`
        }
        // document.title = `Clicked ${this.state.count} place`
        // console.log('updating document title')
        
        
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} 
        onChange={e =>{
            this.setState({name: e.target.value})
        }}
        />
        <button onClick={()=> this.setState({count: this.state.count + 1})}>Click {this.state.count} times</button>
      </div>
    )
  }
}

export default CounterClass1