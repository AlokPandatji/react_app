import React,{Component} from 'react'

export default class button extends Component{

    constructor(){
        super();
        this.state = {
            num : 0
        }
    }


    render(){

        return(
            <div>
                <h1> State Class component </h1>

                <h2> {this.state.num} </h2>

                <button onClick={() => this.setState({num : this.state.num + 1})}> Increment </button>

                <button onClick={() => this.setState({num : this.state.num + 5})}> Increment + 5 </button>

                <button onClick={() => this.setState({num : this.state.num - 1})}> Decrement </button>

                <button onClick={() => this.setState({num: 0})}> Reset </button>
            </div>
        )


    }

}