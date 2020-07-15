$(document).ready(function () {
    let distance = 22392000;
    let countDownFunction = setInterval(function(){
        distance = distance - 10;
        let seconds = Math.floor((distance / 1000) % 60);
        let minutes = Math.floor((distance / 1000 / 60) % 60);
        let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        var days = "00";

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $(".header__timer-digits").text(days + " : " + hours + " : " + minutes + " : " + seconds);
    }, 10);
});  