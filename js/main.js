$(document).ready(function () {
    let timer_begin = new Date("Jan 4, 2020 06:14:04").getTime();
    let countDownFunction = setInterval(function() {
        let now = new Date("Jan 4, 2020 00:01:00").getTime();
        let distance = timer_begin - now;

        let seconds = Math.floor((distance / 1000) % 60);
        let minutes = Math.floor((distance / 1000 / 60) % 60);
        let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        var days = Math.floor( distance/(1000*60*60*24) );

        $(".header__timer-digits").html(days + " : " + hours + " : " + minutes + " : " + seconds);
        console.log(distance)
        // console.log(hours + " : " + minutes + " : " + seconds)
    })
});  