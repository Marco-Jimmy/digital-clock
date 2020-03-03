setInterval(get_time, 100)

function get_time() {
    const date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()

    hour = add_zero(hour)
    min = add_zero(min)
    sec = add_zero(sec)

    document.getElementById('time').innerHTML = hour + ':' + min + ':' + sec
        // document.getElementById('hour').innerHTML = hour + ":"
        // document.getElementById('minute').innerHTML = min + ":"
        // document.getElementById('second').innerHTML = sec

}

function add_zero(num) {
    if (num < 10) {
        num = '0' + num
    }
    return num
}