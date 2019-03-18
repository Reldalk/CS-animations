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
      selectValue: '',
      started: 0,
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


  async resetConditions(){
    this.setState({
      started: 0,
    })
  }

  async searchingAlgorithm(array){
    if(!this.state.started){
      const xArray = this.setBaseXValues();
      if(this.state.selectValue === 'Bubble Sort'){
        this.setState({
          started: 1,
        })
        await bubbleSort(array, xArray);
      }
      else if(this.state.selectValue === 'Selection Sort'){
        this.setState({
          started: 1,
        })
        await selectionSort(array, xArray);
      }
      this.resetConditions();
    }
  }

  handle_number_change(value){
    if(!this.state.started){
      if(value > 20){
        value = 20;
      }
      if(value < 0){
        value = 0;
      }
      let tempArray = this.state.array;
      let length = tempArray.length;
      for(let i = 0; i < length; i++){
        document.getElementById(i).style.backgroundColor = 'lightskyblue';
      }
      if(length < value){
        for(let i = length; i < value; i++){
          tempArray.push(Math.floor(Math.random() * 100));
        }
      }
      else{
        for(let i = length; i > value; i--){
          tempArray.pop();
          length--;
        }
      }
      this.setState({
        array: tempArray
      })
      this.setState({
        number_value : value
      })
    }
  }

  handleSelectionChange(value){
    this.setState({
      selectValue: value
    })
  }

  resetArray(){
    if(!this.state.started){
      this.randomizeValues();
      for(let i = 0; i < this.state.array.length; i++){
        const elementTwo = document.getElementById(i);
        elementTwo.style.backgroundColor = "lightskyblue";
      }
    }
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
            <option value="">Select a Sorting Algorithm</option>
            <option value="Bubble Sort">Bubble Sort</option>
            <option value="Selection Sort">Selection Sort</option>
          </select>
          <input className="sizeInput" type="number" min="0" max="20" value={this.state.number_value} onChange = {e => this.handle_number_change(e.target.value)}></input>
          <button className="testbutton" onClick={e => this.resetArray()}>Reset Array</button>
          <button className="testbutton" onClick={e => this.searchingAlgorithm(this.state.array)}>Start Algorithm</button>
        </div>
          <div className="keyBox">
            <div className="keySection"><div className="colorRect unsorted"><p className="keyText">Unsorted</p></div></div>
            <div className="keySection"><div className="colorRect selected"><p className="keyText">Selected</p></div></div> 
            <div className="keySection"><div className="colorRect sorted"><p className="keyText">Sorted</p></div></div> 
          </div>
        </div>
      </div>
  );
  }
}
