(function clock() {
    const dateInfo = new Date();
    const hour = dateInfo.getHours();
    const minute = dateInfo.getMinutes();
    const second = dateInfo.getSeconds();
    let indicator;
    let hourHTML = document.getElementsByClassName('clock-hours');
    let minuteHTML = document.getElementsByClassName('clock-minutes');
    let secondHTML = document.getElementsByClassName('clock-seconds');
    let indicatorHTML = document.getElementsByClassName('clock-indicator');

    function printTime(element, value) {
        element[0].innerHTML = value < 10 ? `0${value}` : value;
        hour < 12 ? indicator = 'AM' : indicator = 'PM';
        indicatorHTML[0].innerText = indicator;
    }

    printTime(hourHTML, hour);
    printTime(minuteHTML, minute);
    printTime(secondHTML, second);

    setInterval(clock, 1000);
}) ();
