import anime from 'animejs';

async function swapAnimation(leftSquarePos, rightSquarePos, dataPointOne, dataPointTwo){
  const element = document.getElementById(leftSquarePos);
  const elementTwo = document.getElementById(rightSquarePos);
  let temp;
  console.log(dataPointTwo);
  await anime({
    targets: element,
    translateY: 100,
    backgroundColor: '#33ccff',
  });
  await anime({
    targets: elementTwo,
    translateY: -100,
    backgroundColor: '#33ccff'
  }).finished;
  await anime({
    targets: element,
    translateY: 100,
    translateX: dataPointTwo - dataPointOne,
  })
  await anime({
    targets: elementTwo,
    translateY: -100,
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
  element.style.backgroundColor = "red";
  elementTwo.style.backgroundColor = "red";
}

export {swapAnimation};