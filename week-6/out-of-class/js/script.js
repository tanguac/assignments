"use strict";

function renderOutput(output) {
    let output_element = document.getElementById("output");
    output_element.innerHTML += "<div>" + output + "</div>"
}

let hours = [
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed"
];
var i;
for (i=0; i<hours.length; i++) {
    dailyHours(hours[i]);
}

function dailyHours(hours) {
  let parts=hours.split(": ");
  if (parts[1]==="closed") {
    renderOutput("On "+parts[0]+" the library is closed");
  } else {
    renderOutput("On "+parts[0]+" the hours are "+parts[1]);
  }
}