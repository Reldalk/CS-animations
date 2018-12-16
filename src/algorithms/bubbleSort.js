import {swapAnimation} from '../algorithms/animate'

function swap(array, i, j){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

async function bubbleSort(sortingArray, xArray){
  let length = sortingArray.length;
  for(let i = 0; i < length-1; i++){
    for(let j = 0; j < length-i-1; j++){
      if(sortingArray[j] > sortingArray[j+1]){
        swap(sortingArray, j, j+1);
        await swapAnimation(j, j+1, xArray[j], xArray[j+1]);
      }
    }
  }
}

export {bubbleSort};