let daysItem = document.getElementById('days');
let hoursItem = document.getElementById('hours');
let secItem = document.getElementById('seconds');
let minItem = document.getElementById('minutes');

let newYear = new Date('January 1, 2022 00:00:00') 
let data = Date.now();
let time = newYear - data;
const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);

let times = [
    days,
    hours,
    mins,
    secs,
];


const showTimer = (days,hour, min, sec) => {
  daysItem.innerHTML = days;
  hoursItem.innerHTML = hour ;
  minItem.innerHTML = min  ;
  secItem.innerHTML = sec;
};

const setTimer = times => {
  tm = setInterval(() => {
    times[3]--;

    if (
      times[0] == 0 &&
      times[1] == 0 &&
      times[2] == 0 &&
      times[3] == 0 
    ) {
      clearInterval(tm);
    } else if (times[3] == 0) {
      times[3] = 59;
      times[2]--;
    } else if (times[2] == 0) {
      times[2] = 59;
      times[1]--;
    }else if (times[1] == 0) {
        times[1] = 23;
        times[0]--;
      }

    let d = times[0] < 10 ? '0' + times[0] : times[0], 
      h =
        times[1] < 10 ? '0' + times[1] : times[1],
      m =
        times[2] < 10 ? '0' + times[2] : times[2],
      s =
        times[3] < 10 ? '0' + times[3] : times[3];

    // выводим значение таймера на экран
    showTimer(d,h, m, s);
  }, 1000);
};


setTimer(times)

const laptopBtn = document.querySelector('.laptop-btn')
const headerMenu = document.querySelector('.header_menu')

laptopBtn.addEventListener('click', function(e){
  document.body.classList.toggle('overflow-hidden');
  headerMenu.classList.toggle('active');
  laptopBtn.classList.toggle('active');
})

