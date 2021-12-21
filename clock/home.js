setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()


let mysong = document.getElementById("mysong");
let mahni = document.getElementById("mahni");
mahni.addEventListener("click", function () {
  console.log(mahni)
  mysong.play();
 
})
let mysong1 = document.getElementById("mysong1");
let mahni1 = document.getElementById("mahni1");
mahni1.addEventListener("click", function () {
  console.log(mahni1)
  mysong1.play();
})
let mysong2 = document.getElementById("mysong2");
let mahni2 = document.getElementById("mahni2");
mahni2.addEventListener("click", function () {
  console.log(mahni2)
  mysong2.play();
})