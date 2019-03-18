import anime from 'animejs';

async function swapAnimation(leftSquarePos, rightSquarePos, dataPointOne, dataPointTwo){
  const element = document.getElementById(leftSquarePos);
  const elementTwo = document.getElementById(rightSquarePos);
  let temp;
  let elementHeight = elementTwo.clientHeight;
  await anime({
    targets: element,
    translateY: elementHeight,
    backgroundColor: '#f8d568',
  });
  await anime({
    targets: elementTwo,
    translateY: -elementHeight,
    backgroundColor: '#f8d568'
  }).finished;
  await anime({
    targets: element,
    translateY: elementHeight,
    translateX: dataPointTwo - dataPointOne,
  })
  await anime({
    targets: elementTwo,
    translateY: -elementHeight,
    translateX: dataPointOne - dataPointTwo,
  }).finished;
  await anime({
    targets: element,
    translateY: 0,
    translateX: dataPointTwo - dataPointOne,
  })  
  await anime({
    targets: elementTwo,
    translateY: 0,
    translateX: dataPointOne - dataPointTwo,
  }).finished;
  await anime({
    targets: element,
    translateY: 0,
    trasnlateX: 0,
  })
  await anime({
    targets: elementTwo,
    translateY: 0,
    trasnlateX: 0,
  })
  temp = element.firstChild.innerHTML;
  element.firstChild.innerHTML = elementTwo.firstChild.innerHTML;
  elementTwo.firstChild.innerHTML = temp;
  element.style.backgroundColor = "lightskyblue";
  elementTwo.style.backgroundColor = "lightskyblue";
}

function paintCompleted(position){
  const element = document.getElementById(position);
  element.style.backgroundColor = "#90ee90";
}

function selectColorIndex(position){
  const element = document.getElementById(position);
  element.style.backgroundColor = "#02fff6";
}

function deselectColorIndex(position){
  const element = document.getElementById(position);
  element.style.backgroundColor = "lightskyblue";
}

export {swapAnimation, paintCompleted, selectColorIndex, deselectColorIndex};