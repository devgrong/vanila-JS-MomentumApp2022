const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
//getClock을 즉시 호출
setInterval(getClock, 1000);
//getClock을 매초마다 반복

// const Seconds = ("00"+ (date.getSeconds()).toString()).slice(-2); 라는 코드도 작동은 한다!
