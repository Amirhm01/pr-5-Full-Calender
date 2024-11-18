let checkdropCall = false;
let callDrop = $('#call-drop');
$('#call-li').click(function (e) {
    if (checkdropCall == false) {
        callDrop.css('display', 'block');
        callDrop.css('height', '17em');
        callDrop.css('animation', 'opencalldrop .5s');
        checkdropCall = true;

    }
    else {
        callDrop.css('height', '0em');
        callDrop.css('animation', 'closecalldrop .5s');
        checkdropCall = false;

    }

});
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'fa', // Persian locale
        direction: 'rtl', // Right-to-left text direction
        timeZone: 'UTC',
        initialView: 'timeGridWeek',
        timeZone: 'Asia/Tehran',
        slotMinTime: '07:00:00',
        titleFormat: { year: 'numeric', month: 'long' },
        dayHeaderFormat: { day: 'numeric', weekday: 'short', },
        slotLabelFormat: [
            { hour: '2-digit', minute: '2-digit', hour12: false },
        ],
        headerToolbar: {
            right: ''
        },



        events: [
            {
                title: 'Follow up',
                start: '2024-09-08T09:00:00', // Event start time
                end: '2024-09-08T11:00:00',
                backgroundColor: '#E8F6F1',
                borderColor: '#4B6265',
                className: 'custom-event',
                imageUrl: ['./img/1.png',]

            },
            {
                title: 'Follow up',
                start: '2024-09-09T07:00:00', // Event start time
                end: '2024-09-09T08:00:00',
                backgroundColor: '#F5DDF2',
                borderColor: '#7A4B6D',
                className: 'custom-event',
                imageUrl: ['./img/1.png',]
            },
            {
                title: 'Follow up',
                start: '2024-09-10T11:00:00', // Event start time
                end: '2024-09-10T13:00:00',
                backgroundColor: '#E7F6FF',
                borderColor: '#3E6672',
                className: 'custom-event',
                imageUrl: ['./img/1.png',]
            }
        ],
        eventContent: function (arg) {
            // title
            let eventTitle = document.createElement('div');
            eventTitle.classList.add('event-title');
            eventTitle.innerText = arg.event.title;
            // time
            let timeText = arg.timeText.replace(' - ', ' ');
            let arrtime = timeText.split(' ');
            let eventTime = document.createElement('div');
            eventTime.classList.add('event-time');
            let htmlTime = `
            <span class="time-span" style="background-color: `+ arg.event.borderColor + `;">` + arrtime[1] + `</span>
            <span class="time-span" style="background-color: `+ arg.event.borderColor + `;">` + arrtime[0] + `</span>
            `
            eventTime.innerHTML = htmlTime;
            // img
            let imgElement = document.createElement('img');
            imgElement.src = arg.event.extendedProps.imageUrl;
            //tooltip
            let tooltipDiv = document.createElement('div');
            tooltipDiv.classList.add('div-tool')
            let htmlTooltip = `
            <span class="tooltip" id="tooltip">
                <div class="tool-title">
                    <p class="title-tool-text">تسک ۲۴ مرداد ساعت `+ arrtime[0] + ` الی ` + arrtime[1] + `</p>
                </div>
                <div class="info-tool">
                    <p class="lable-task">تسک: `+ arg.event.title + `</p>
                    <p class="lable-status">وضعیت: عدم تکمیل</p>
                    <div class="inp-rang-tool">
                        <p class="persent-navar-task">۳۵٪</p>
                        <input type="range" id="rangeValue" class="navar-tool" min="3" max="10" value="3" oninput="outputUpdate(value)>
                        <p class="navar-task">کل: ۱۰</p>
                    </div>
                    <div class="question-tool">
                        <div class="question-text-div">
                            <p class="question-text">آیا تمایل دارید تسک را تکمیل کنید؟</p>
                        </div>
                        <div class="butt-tool-div">
                            <button id="butt-yes-tool" class="butt-tool">خیر</button>
                            <button id="butt-no-tool" class="butt-tool">بله</button>
                        </div>
                    </div>
                </div>
            </span>
            `
            tooltipDiv.innerHTML = htmlTooltip;


            let arrayOfDomNodes = [eventTime, eventTitle, imgElement, tooltipDiv];
            return { domNodes: arrayOfDomNodes };
        },







    });
    calendar.render();





    var headers = document.querySelectorAll('.fc-col-header .fc-col-header-cell');
    headers.forEach(function (header) {
        var wordsArray = header.textContent.split("");
        wordsArray.pop();
        header.textContent = wordsArray.join('');
        var wordsArray2 = header.textContent.split(" ");
        let htmlDay = `
        <span style="margin: 0 1em 0 .5em;">` + wordsArray2[1] + `</span>` + wordsArray2[0];
        header.innerHTML = htmlDay;

        var today = new Date().toISOString().split('T')[0];
        var data = header.getAttribute('data-date');
        if (today == data) {
            let htmlDay = `
            <span class="today-highlight">` + wordsArray2[1] + `</span>` + wordsArray2[0];
            header.innerHTML = htmlDay;
        }

    });


    var fctitle = document.getElementById('fc-dom-1');
    let titlearr = fctitle.textContent.split(" ");
    var newtitlearr = titlearr[1] + " " + titlearr[0];
    fctitle.textContent = newtitlearr;
});


function outputUpdate(value) {
    document.querySelector('#rangeValue').value = value;
}






