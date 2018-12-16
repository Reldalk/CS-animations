import React from 'react';
import {bubbleSort} from '../algorithms/bubbleSort'
import {selectionSort} from '../algorithms/selectionSort'
import './App.css';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      array : [],
      xPos : [],
      number_value: 10,
      selectValue: ''
    }
  }

  componentWillMount(){
    this.randomizeValues();
  }

  randomizeValues(){
    let tempArray = new Array(this.state.number_value);
    for(let i = 0; i < this.state.number_value; i++){
      tempArray[i] = Math.floor(Math.random() * 100);
    }
    this.setState({
      array : tempArray
    })
  }

  setBaseXValues(){
    const array = new Array(this.state.number_value);
    for(let i = 0; i < this.state.number_value; i++){
      array[i] = document.getElementById(i).getBoundingClientRect().left;
    }
    return array;
  }

  swap(positionArray, first, second){
    let temp = positionArray[first];
    positionArray[first] = positionArray[second];
    positionArray[second] = temp;
  }

  async searchingAlgorithm(array){
    const xArray = this.setBaseXValues();
    if(this.state.selectValue === 'Bubble Sort'){
      bubbleSort(array, xArray);
    }
    else if(this.state.selectValue === 'Selection Sort'){
      selectionSort(array, xArray);
    }
  }

  handle_number_change(value){
    let tempArray = this.state.array;
    let length = tempArray.length;
    if(value > length){
      console.log(value > this.state.number_value);
      tempArray.push(Math.floor(Math.random() * 100));
    }
    else{
      tempArray.pop();
    }
    this.setState({
      array: tempArray
    })
    this.setState({
      number_value : value
    })
  }

  handleSelectionChange(value){
    this.setState({
      selectValue: value
    })
  }

  render() {

    return (
      <div className="fullScreen">
        <div className="center_box">
        <span style={{marginLeft: (100 - this.state.number_value*5) / 2 + "%"}}></span>
          {
            this.state.array.map(function(randomNumber, i){
              return (
                <div key={i} id={i} className ="array_box" ref='test' style={{
                  width: '5%',
                }}>
                <p className="numbers">{randomNumber}</p>
              </div>
              )
            })
          }

        <div className="form">
          <select className= "selection"  value={this.state.selectValue} onChange={e => this.handleSelectionChange(e.target.value)}>
            <option value="">Select your Sorting Algorithm</option>
            <option value="Bubble Sort">Bubble Sort</option>
            <option value="Selection Sort">Selection Sort</option>
            <option value="Insertion Sort">Insertion Sort (to be developed)</option>
            <option value="Quick Sort">Quick Sort (to be developed)</option>
          </select>
          <input className="sizeInput" type="number" min="0" max="20" value={this.state.number_value} onChange = {e => this.handle_number_change(e.target.value)}></input>
          <button className="testbutton" onClick={e => this.randomizeValues()}>Reset Array</button>
          <button className="testbutton" onClick={e => this.searchingAlgorithm(this.state.array)}>Start Algorithm</button>
          </div>
        </div>
      </div>
  );
  }
}
