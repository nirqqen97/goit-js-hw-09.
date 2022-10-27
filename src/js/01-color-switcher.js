const refs ={
    startbnt: document.querySelector('[data-start]'),
    stopbnt: document.querySelector('[data-stop]'),
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
let timerId = null;
const DEFAULT_DELAY = 1000;
refs.startbnt.addEventListener('click',onStartBtnClick);

function onStartBtnClick(e) {
    refs.startbnt.disabled = true;
    refs.stopbnt.disabled = false;

 timerId = setInterval(()=>{
    console.log(getRandomHexColor())
    document.body.style.backgroundColor = getRandomHexColor();
    

},DEFAULT_DELAY);
}
refs.stopbnt.addEventListener('click',onStopBtnClick)

function onStopBtnClick(e) {
    refs.startbnt.disabled = false;
    refs.stopbnt.disabled = true;

    clearInterval(timerId);
console.log(`Interval with id ${timerId} has stopped!`);
}

