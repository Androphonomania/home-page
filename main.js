function getDayOfFortnight(date) {
    let diff = date.getTime() - beginDate.getTime();
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days % 14;
}

let beginDate = new Date(new Date("2023-01-22").getTime() - 39600000);
let currentDate = new Date();
let dayValue = getDayOfFortnight(currentDate);

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const today = new Date();
const day = today.getDay();
var dayName = weekday[day];

if (!localStorage.getItem('reminders')) {
    localStorage.setItem('reminders', JSON.stringify([]));
}

let reminders = JSON.parse(localStorage.getItem('reminders'))

var remindersDiv;

window.onload = function () {
    var dayElement = document.getElementById("day-of-week");

    remindersDiv = document.getElementById("reminders")

    if (dayValue < 7) {
        dayElement.innerHTML = dayName + " - Week A";
    } else if (dayValue > 6) {
        dayElement.innerHTML = dayName + " - Week B";
    }

    for (let i = 0; i < reminders.length; i++) {
        let r = document.createElement("p");
        r.innerHTML = reminders[i];

        remindersDiv.appendChild(r);
    }

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var pr = document.getElementById("pr");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    var pl = document.getElementById("pl");
    var p5 = document.getElementById("p5");

    switch (dayValue) {
        case 0: // sunday A
            p1.innerHTML = "Today is a weekend.";
            p2.innerHTML = null;
            pr.innerHTML = null;
            p3.innerHTML = null;
            p4.innerHTML = null;
            pl.innerHTML = null;
            p5.innerHTML = null;
            break;
        case 1: // monday 
            p1.innerHTML = "9 AM - Photography - D6";
            p2.innerHTML = "10 AM - English - A12";
            pr.innerHTML = "11 AM - Recess";
            p3.innerHTML = "11:20 AM - Geography - D12";
            p4.innerHTML = "12:20 PM - Commerce - DEM4";
            pl.innerHTML = "1:20 PM - Lunch";
            p5.innerHTML = "2 PM - Maths - DEM10";
            break;
        case 2: // tuesday
            p1.innerHTML = "8:50 AM - English - A12";
            p2.innerHTML = "9:50 AM - Science - DEM_LAB";
            pr.innerHTML = "10:50 AM - Recess";
            p3.innerHTML = "11:10 AM - Commerce - DEM4";
            p4.innerHTML = "12:10 PM - Lunch";
            pl.innerHTML = "12:45 PM - Handball - B14";
            p5.innerHTML = null;
            break;
        case 3: // wednesday
            p1.innerHTML = "9 AM - Maths - DEM10";
            p2.innerHTML = "10 AM - English - A12";
            pr.innerHTML = "11 AM - Recess";
            p3.innerHTML = "11:20 AM - PE - Pavillion";
            p4.innerHTML = "12:20 PM - Science - D1";
            pl.innerHTML = "1:20 PM - Lunch";
            p5.innerHTML = "2 PM - Commerce - DEM4";
            break;
        case 4: // thursday
            p1.innerHTML = "8:50 AM - Science - D2";
            p2.innerHTML = "9:48 AM - PDH - B3";
            pr.innerHTML = "10:46 AM - Long Recess";
            p3.innerHTML = "11:26 AM - Geography - D12";
            p4.innerHTML = "12:24 PM - History - A7";
            pl.innerHTML = "1:22 PM - Lunch";
            p5.innerHTML = "2:02 PM - IST - A10";
            break;
        case 5: // friday
            p1.innerHTML = "9 AM - Photography - A11";
            p2.innerHTML = "10 AM - History - B14";
            pr.innerHTML = "11 AM - Recess";
            p3.innerHTML = "11:20 AM - IST - A10";
            p4.innerHTML = "12:20 PM - Maths - DEM10";
            pl.innerHTML = "1:20 PM - Lunch";
            p5.innerHTML = "2 PM - English - A12";
            break;
        case 6: // saturday
            p1.innerHTML = "Today is a weekend.";
            p2.innerHTML = null;
            pr.innerHTML = null;
            p3.innerHTML = null;
            p4.innerHTML = null;
            pl.innerHTML = null;
            p5.innerHTML = null;
            break;
        case 7: // sunday B
            p1.innerHTML = "Today is a weekend.";
            p2.innerHTML = null;
            pr.innerHTML = null;
            p3.innerHTML = null;
            p4.innerHTML = null;
            pl.innerHTML = null;
            p5.innerHTML = null;
            break;
        case 8: // monday
            p1.innerHTML = "9 AM - Commerce - DEM4";
            p2.innerHTML = "10 AM - PDH - GLS1";
            pr.innerHTML = "11 AM - Recess";
            p3.innerHTML = "11:20 AM - Science - D1";
            p4.innerHTML = "12:20 PM - Photography - D6";
            pl.innerHTML = "1:20 PM - Lunch";
            p5.innerHTML = "2 PM - IST - A10";
            break;
        case 9: // tuesday
            p1.innerHTML = "8:50 AM - Geography - D12";
            p2.innerHTML = "9:50 AM - Maths - DEM10";
            pr.innerHTML = "10:50 AM - Recess";
            p3.innerHTML = "11:10 AM - English - A12";
            p4.innerHTML = "12:10 PM - Lunch";
            pl.innerHTML = "12:45 PM - Handball - B14";
            p5.innerHTML = null;
            break;
        case 10: // wednesday
            p1.innerHTML = "9 AM - Commerce - DEM4";
            p2.innerHTML = "10 AM - Science - E1";
            pr.innerHTML = "11 AM - Recess";
            p3.innerHTML = "11:20 AM - Maths - DEM10";
            p4.innerHTML = "12:20 PM - History - B14";
            pl.innerHTML = "1:20 PM - Lunch";
            p5.innerHTML = "2 PM - English - A12";
            break;
        case 11: // thursday
            p1.innerHTML = "9 AM - Photography - D6";
            p2.innerHTML = "10 AM - IST - B6";
            pr.innerHTML = "11 AM - Recess";
            p3.innerHTML = "11:20 AM - History - A5";
            p4.innerHTML = "12:20 PM - Maths - DEM10";
            pl.innerHTML = "1:20 PM - Lunch";
            p5.innerHTML = "2 PM - Geography - D12";
            break;
        case 12: // friday
            p1.innerHTML = "9 AM - IST - A10";
            p2.innerHTML = "10 AM - English - A12";
            pr.innerHTML = "11 AM - Recess";
            p3.innerHTML = "11:20 AM - Science - E5";
            p4.innerHTML = "12:20 PM - Photography - D6";
            pl.innerHTML = "1:20 PM - Lunch";
            p5.innerHTML = "2 PM - PE - Pavillion";
            break;
        case 13: // saturday
            p1.innerHTML = "Today is a weekend.";
            p2.innerHTML = null;
            pr.innerHTML = null;
            p3.innerHTML = null;
            p4.innerHTML = null;
            pl.innerHTML = null;
            p5.innerHTML = null;
            break;
    }

    let randChance = Math.ceil(Math.random() * 20);
    console.log(randChance);

    if (randChance === 20) {
        let h1 = document.getElementById('welcome')
        h1.innerHTML = 'I LIKE MEN!'
    }
};

const men = function() {
    let h1 = document.getElementById('welcome')
    h1.innerHTML = 'I LIKE MEN!'
}

const addReminder = function() {
    let newReminder = prompt('New reminder:');

    if (newReminder === 'nigger') {
        newReminder = 'shut up slok!!';
    }

    reminders.push(newReminder);

    localStorage.setItem('reminders', JSON.stringify(reminders))

    let r = document.createElement("p");
    r.innerHTML = newReminder;

    remindersDiv.appendChild(r);
}

const removeAllReminders = function() {
    reminders = [];

    localStorage.setItem('reminders', JSON.stringify(reminders))

    let reminderElements = remindersDiv.getElementsByTagName('p');

    for (var i = reminderElements.length - 1; i >= 0; i--) {
        console.log(i);
        console.log(reminderElements[i]);
        remindersDiv.removeChild(reminderElements[i]);
    }
}