import React, { Component } from 'react';
import App from './App';
import './Time.css';

class Time extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            time:0,
            i:true,
            a:0
        }
        
        this.start = this.start.bind(this)
        this.reset = this.reset.bind(this)
       
       
    }
    
    start () {
        this.setState({i:!this.state.i})
    if (this.state.i===true) {
    
    let b=setInterval (
        () => {
            this.setState ({
                time:this.state.time +1000
            })
        },
        1000
    )

    this.setState ({
        a:b
    })
}

    if(this.state.i===false) {
        
        clearInterval(this.state.a)
    }
    console.log(this.state)
}

reset (){
    this.setState ({
        time:0,
    })
    clearInterval(this.state.a)
    
}
   
       
   
     
    render() {
        return(
        <div className="phone">
        <App ms={this.state.time}/>
        <input type="button" value="Start" className="but" onClick={this.start}/>
        <input type="button" value="Reset" className="but" onClick={this.reset}/>
        </div>
        )
    }

}




export default Time;