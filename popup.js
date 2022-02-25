const playBtn = document.getElementById("btn-play");
const stopBtn = document.getElementById("btn-stop");
const resetBtn = document.getElementById("btn-reset");
const counter = document.getElementById("counter")
const alarmAudio = document.getElementById("alarm");

const initialCls = counter.className;
let interval;
let time;
let redoTime;

playBtn.addEventListener("click", ()=>{
  console.log("Counter set:", counter.value);
  counter.readOnly = true;
  console.log("ReadOnly value set:", counter.readOnly);
  playBtn.disabled = true;
  resetBtn.disabled = true;
  alarmAudio.load();
  redoTime = time = parseInt(counter.value);
  interval = setInterval(()=>{
    if(time > 0){
      time--;
      if(time == 10)
        counter.className += "red";
      counter.value = time;
    }
    else{
      clearInterval(interval);
      alarmAudio.play();
      playBtn.disabled = false;
      counter.readOnly = false;
      counter.className = initialCls;
      resetBtn.disabled = false;
    }
  }, 1000)
});

stopBtn.addEventListener("click", ()=>{
  if(interval)
    clearInterval(interval);
  if(resetBtn.disabled)
    resetBtn.disabled = false;
  counter.className = initialCls
  counter.value = 0;
  alarmAudio.pause();
});

resetBtn.addEventListener("click", ()=>{
  counter.value = redoTime;
});