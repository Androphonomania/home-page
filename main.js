// Define a function that takes a date object as a parameter and returns the day value of the fortnight
function getDayOfFortnight(date) {
    // Get the difference in milliseconds between the date and the beginning date of the fortnight
    let diff = date.getTime() - beginDate.getTime();
    // Convert the difference to days and round down
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    // Return the remainder of dividing the days by 14
    return days % 14;
}

// Define the beginning date of the fortnight as a date object
let beginDate = new Date(new Date("2023-01-22").getTime() - 39600000); // Change this to your desired date
console.log(beginDate)
// Get the current date as a date object
let currentDate = new Date();
console.log(currentDate)
// Call the function and print the result
let dayValue = getDayOfFortnight(currentDate);
console.log(dayValue);

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]; // create an array of day names
const today = new Date(); // get the current date
const day = today.getDay(); // get the day of the week
var dayName = weekday[day]; // get the day name from the array
console.log(dayName); // print the day name

const reminders = [
    "Maths and PDHPE Work",
    "Science Presentation"
];

window.onload = function () {
    var dayElement = document.getElementById("day-of-week");

    console.log(dayElement);

    if (dayValue < 7) {
        dayElement.innerHTML = dayName + " - Week A";
    } else if (dayValue > 6) {
        dayElement.innerHTML = dayName + " - Week B";
    }

    var r1 = document.getElementById("r1");
    var r2 = document.getElementById("r2");
    var r3 = document.getElementById("r3");

    if (reminders[0]) {
        r1.innerHTML = reminders[0];
    } else {
        r1.innerHTML = null;
    }
    if (reminders[1]) {
        r2.innerHTML = reminders[1];
    } else {
        r2.innerHTML = null;
    }
    if (reminders[2]) {
        r3.innerHTML = reminders[2];
    } else {
        r3.innerHTML = null;
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
            pl.innerHTML = "12:45 PM - Sport - B14";
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
            pl.innerHTML = "12:45 PM - Sport - B14";
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
    
    let randChance = Math.ceil(Math.random() * 1000);
    console.log(randChance);

    if (randChance === 1000) {
        let h1 = document.getElementById('welcome')
        h1.innerHTML = 'I LIKE MEN!'
    }
};