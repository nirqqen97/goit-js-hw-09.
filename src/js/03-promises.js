import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formRef: document.querySelector('.form')
}
refs.formRef.addEventListener('submit',onHandleClick);

let delayVal = null;
let stepVal = null;
let amountVal = null;

function onHandleClick(e) {
  e.preventDefault();
  const{
    elements: {delay, step, amount},
  } = e.currentTarget
  delayVal = Number(delay.value);
  stepVal = Number(step.value);
  amountVal = Number(amount.value);
  
for (let i = 0; i < amountVal; i++) {
  // ----------тут должен быть создание промисов наверное уже завтра закончу
  createPromise(i, delayVal).then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

  });
  delayVal += stepVal;

}
e.currentTarget.reset()
}


function createPromise(position, delay) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position,delay})
      } else {
        reject({position,delay})
      }
    }, delay);
  })


}
