// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

let my_name = "Chris";
let your_name = "Rich";

if (my_name === "Chris") {
  renderOutput("That's me!");
} else if (my_name === "Rich") {
  renderOutput("That's Rich!");
} else {
  renderOutput("I must be someone else");
}

//for (var index=0; index<10; index++) {renderOutput(index); }

function helloWorld() {
  renderOutput("Hello World");
}

helloWorld();
helloWorld();
helloWorld();

function helloName(name) {
  renderOutput("Hello "+name);
}

helloName("Ben");
helloName("George");
helloName("Martha");

function todaysHours(days_hours){
  renderOutput(days_hours);
}

//todaysHours("Tuesday: 9a - 5p");
hours.forEach(todaysHours);

//function classifyCallNumbers(callNo){
  //if callNo.startsWith("PQ"){
 //   let lit_type="French";
//  } else if callNo.startsWith("PR") {
 //   let lit_type="English";
//  } else {
//    let lit_type="Other";
//  }
//  renderOutput(callNo+" - "+lit_type+" literature");
  
//}
//all_numbers.forEach(classifyCallNumbers);