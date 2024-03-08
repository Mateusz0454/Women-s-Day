function OpeningPage() {
    const DateOfOpening = new Date("2024-03-08T08:08:00"); // Year-Month-DayTHours:Minute:Second

    const now = new Date();

    const TimeDifference = Math.floor((DateOfOpening - now) / 1000);
    const days = Math.floor(TimeDifference / (3600 * 24));
    const RestOfHours = TimeDifference % (3600 * 24);
    const hours = Math.floor(RestOfHours / 3600);
    const RestOfMinute = RestOfHours % 3600;
    const minutes = Math.floor(RestOfMinute / 60);
    const seconds = RestOfMinute % 60;

    if (now >= DateOfOpening) {
        const url = "./page/choice.html";
        window.open(url, '_self');
    } else {
        setTimeout(OpeningPage, 1000);
    }

    document.getElementById('odliczanie').innerHTML = days + ' dni ' + hours + ' godzin ' + minutes + ' minut ' + seconds + ' sekund ';

}
window.onload = OpeningPage;
