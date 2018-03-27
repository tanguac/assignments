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



function dailyHours(hours) {
  var i;
  for (i=0; i<hours.length; i++) {
      displayHours(hours[i]);
  }
}


function displayHours(dayHours) {
  let parts=dayHours.split(": ");
  if (parts[1]==="closed") {
    renderOutput("On "+parts[0]+" the library is closed");
  } else {
    renderOutput("On "+parts[0]+" the hours are "+parts[1]);
  }
}

dailyHours(hours);

// function displayOneDaysHours(one_days_hours){
//   let parts_of_hours=one_days_hours.split(": ");
//   if (parts_of_hours[0]==="Sunday"){
//     renderOutput("On Sunday the Library is closed");
//   } else {
//     renderOutput("On "+parts_of_hours[0]+"the hours are "+parts_of_hours[1]);}
// }

// function dailyHours(hours){
//   hours.forEach(displayOneDaysHours);
// }
// dailyHours(hours);