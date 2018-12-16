import React from 'react';
import {bubbleSort} from '../algorithms/bubbleSort'
import {selectionSort} from '../algorithms/selectionSort'
import './App.css';

let arraySize = 5;

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      array : [],
      xPos : []
    }
  }

  componentWillMount(){
    this.randomizeValues();
  }

  randomizeValues(){
    let tempArray = new Array(arraySize);
    for(let i = 0; i < arraySize; i++){
      tempArray[i] = Math.floor(Math.random() * 100);
    }
    this.setState({
      array : tempArray
    })
  }

  setBaseXValues(){
    const array = new Array(arraySize);
    for(let i = 0; i < arraySize; i++){
      array[i] = document.getElementById(i).getBoundingClientRect().left;
    }
    return array;
  }

  swap(positionArray, first, second){
    let temp = positionArray[first];
    positionArray[first] = positionArray[second];
    positionArray[second] = temp;
  }

  async searchingAlgorithm(){
    const xArray = this.setBaseXValues();
    bubbleSort(this.state.array, xArray);
  }

  render() {
    return (
      <div className="center_box">
        {
          this.state.array.map(function(randomNumber, i){
            return (
              <div key={i} id={i} className ="array_box" ref='test'>
              <p className="numbers">{randomNumber}</p>
            </div>
            )
          })
        }
      <button className="testbutton" onClick={e => this.searchingAlgorithm()}></button>
      </div>
  );
  }
}
