import React from 'react';
import './App.css';
import {Motion, spring} from 'react-motion';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      array : []
    }
  }

  componentWillMount(){
    this.randomizeValues(15);
  }

  randomizeValues(num){
    let tempArray = new Array(num);
    for(let i = 0; i < num; i++){
      tempArray[i] = Math.floor(Math.random() * 100);
    }
    this.setState({
      array : tempArray
    })
  }

  render() {
    return (
      <div className="center_box">
        {
          this.state.array.map(function(randomNumber, i){
            return (
              <div id={i} className ="array_box">
              <p className="numbers">{randomNumber}</p>
            </div>
            )
          })
        }
      </div>
  );
  }
}