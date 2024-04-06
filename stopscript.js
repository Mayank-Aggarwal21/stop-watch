let timerDisplay = document.querySelector('.timerDisplay');
let stop = document.getElementById('stop');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let lap = document.getElementById('lap');
let resume = document.getElementById('resume');
let lapList = document.getElementById('lapList');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

start.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stop.addEventListener('click', function(){
    clearInterval(timerId);
});

reset.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
    lapList.innerHTML = '';
});

resume.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

lap.addEventListener('click', function () {
  let lapTime = timerDisplay.innerHTML;
  let lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  lapList.appendChild(lapItem);
  
});


function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}

start.addEventListener('click', function(){
  start.parentNode.replaceChild(stop,start);
  stop.style.display= 'inline-block';
  lap.style.display= 'inline-block';
});

stop.addEventListener('click', function(){
  stop.parentNode.replaceChild(resume,stop);
  resume.style.display= 'inline-block';
  lap.parentNode.replaceChild(reset,lap);
  reset.style.display= 'inline-block';
});

reset.addEventListener('click', function(){
  resume.parentNode.replaceChild(start,resume);
  start.style.display= 'inline-block';
  reset.parentNode.replaceChild(lap,reset);
  lap.style.display='inline-block';

});

resume.addEventListener('click', function(){
  resume.parentNode.replaceChild(stop,resume);
  stop.style.display= 'inline-block';
  reset.parentNode.replaceChild(lap,reset);
  lap.style.display='inline-block';

});


