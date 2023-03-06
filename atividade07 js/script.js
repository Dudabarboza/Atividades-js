const countdown = () =>{

    const countDate = new Date('June 05, 2023 00:00:00').getTime();
    const nowDate = new Date().getTime();
    const gapToEvent = countDate - nowDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gapToEvent / day);
    const textHour = Math.floor((gapToEvent % day) / hour);
    const textMinute = Math.floor((gapToEvent % hour) / minute);
    const textSecond = Math.floor((gapToEvent % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

}

setInterval(countdown, 1000);

