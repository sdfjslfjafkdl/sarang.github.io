const clock = document.querySelector('h2#clock')

function getClock(){
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

getClock() //getClock()즉시 호출
setInterval(getClock, 1000) //그 뒤로 1초마다 실행