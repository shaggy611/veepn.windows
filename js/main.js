$(document).ready(function () {
    let timer_begin = new Date("jul 4, 2020 06:13:04").getTime();
    console.log(timer_begin.toLocaleString());
    let countDownFunction = setInterval(function(){
        let now = new Date().getTime();
        let distance = timer_begin - now;

        let seconds = Math.floor((distance / 1000) % 60);
        let minutes = Math.floor((distance / 1000 / 60) % 60);
        let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        var days = Math.floor( distance/(1000*60*60*24) );

        // $(".header__timer-digits").html(days + " : " + hours + " : " + minutes + " : " + seconds);
        // console.log(now)
        // console.log(hours + " : " + minutes + " : " + seconds)
    })
}, 1000);  