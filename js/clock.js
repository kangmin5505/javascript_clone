const clock = document.querySelector("#clock");

function setClock() {
  const date = new Date();
  // padStart(length, 문자) vs padEnd(length, 문자)
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 처음에 바로 실행되고 이후 1000ms마다 실행
setClock();
// setInterval vs timeout
setInterval(setClock, 1000);
