import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


refs ={
    btnStartRef: document.querySelector('[data-start]'),
    inputRef: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
   
}
let dateSelected = null;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        dateSelected = selectedDates[0].getTime()
        // выбрaнное время
       const delta = dateSelected - date;
        if (delta < 0) {
            Notify.failure('ERROR');
            return
        }
        refs.btnStartRef.disabled = false
    },
  };
flatpickr(refs.inputRef, options);

const timer = {
    intervallId: null,
    isActive : false,
    start(){
        if(this.isActive){
            return
        }
        this.isActive = true;
        this.intervallId = setInterval(()=>{
            const deltaTime = dateSelected - Date.now()
            if (deltaTime < 0) {
                return
            }
            const convertedTime = convertMs(deltaTime)
        Object.entries(convertedTime).forEach(([name, value]) => {
            refs[name].textContent = addLeadingZero(value);
          });


        },1000)
}
}
const date = new Date();
refs.btnStartRef.addEventListener('click',onsStartClick);
function onsStartClick(e) {
   timer.start()
    
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }