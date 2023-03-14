var timeArray = [];
var dateObject = {};

for (var i=0; i < 24; i++) {
 // const bodyEl = document.getElementById("body");
 var timeContainer = document.createElement("div");
 var timeOfDay = document.createElement("div");
 var noteContainer = document.createElement("div");
 var inputContainer = document.createElement("textarea");


 timeContainer.setAttribute("id", "timeContainer "+ + i);
 timeOfDay.setAttribute("id", "timeOfDay " + i);
 noteContainer.setAttribute("id", "noteContainer " + i);
 noteContainer.setAttribute("placeholder", "Your note here");
 inputContainer.setAttribute("id", "inputContainer" + i);
 inputContainer.setAttribute("placeholder", "Your note here");
 
 // var inputField = document.getElementById("inputContainer " + i);


 timeArray.push(i+"00");
 console.log("time added :" + i + "00");

 // timeOfDay.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
 timeOfDay.innerHTML += timeArray[i];

 document.body.appendChild(timeContainer);
 timeContainer.appendChild(timeOfDay);
 timeContainer.appendChild(noteContainer);
 noteContainer.appendChild(inputContainer);

 var btn = document.createElement("button");
 btn.setAttribute("id", "saveButton " + i);
 btn.setAttribute("onClick", "saveBtn()");
 btn.innerHTML = "Save";
 timeContainer.appendChild(btn);



//create objects so they are ready to take input values from inputContainer
//day month year for top of daily planner and to save to local storage
var theDate = new Date();
var theMonth = (theDate.getMonth() + 1);
var theDay = theDate.getDate();
var theYear = theDate.getFullYear();

dH = document.getElementById("dateHolder");
m = document.getElementById("monthDisplay");
d = document.getElementById("dayDisplay");
y = document.getElementById("yearDisplay");

dH.style.display = "flex";
dH.style.flexDirection = "row";
dH.style.alignItems = "row";

m.innerHTML = theMonth;
d.innerHTML = theDay;
y.innerHTML = theYear;

var mdyInnerHTML = m.innerHTML + "-" + d.innerHTML + "-" + y.innerHTML;

this["dateObject" + i + "mdy" + mdyInnerHTML] = {};

console.log(this["dateObject" + i]);

//load the inputValue from the localStorage with for loop

// data = JSON.parse(localStorage.getItem(localStorage.key(i)));

console.log(localStorage.length > 0);

//this is gold right here, this is the money right here 
//now the code will be able to iterate through the localStorage and compare the dateValue and the timeValue with the localStorage (should be able to compare tens of thousands of entries within seconds) and whether or not there is anything in the inputValue to display in the inputContainer/textarea

//fix btn so they each have individual saves with this[] instead of the entire page saving which isn't too bad at this point

//maybe create array of months and days for each month and account for leap year if i have time

//could probably recycle some of this code for the mdy buttons and also create a list at the bottom of the page in a scroll box for all the days that have atleast 1 input
if(localStorage.length > 0) {
for(let x=0; x < localStorage.length; x++) {
 var data2 = JSON.parse(localStorage.getItem(localStorage.key(x)));

 console.log("length of localStorage :" + localStorage.length)

 console.log("data2.inputValue :" + data2.inputValue);
 console.log("data2.inputValue true or false :" + data2.inputValue !== 'undefined');
 console.log("data2.inputValue true or false :" + data2.inputValue !== null);
 console.log("data2.inputValue str length :" + data2.inputValue.length !== 0);
 console.log(typeof(data2.inputValue));
 console.log("data2.dateValue :" + data2.dateValue);
 console.log("data2.timeValue :" + data2.timeValue);

 if (data2.dateValue === mdyInnerHTML) {
  console.log("data2 if statement procced");
  for (let z=0; z < timeArray.length; z++) {
   console.log("data2 for loop statement procced");
   if (data2.timeValue === timeArray[z] && data2.inputValue.length > 0) {
    console.log("data2 2nd if statement procced");
    //wasn't working because i did not add the number to the end of the tag, i assumed it was already added like big idiot
 document.getElementById("inputContainer" + z).value = data2.inputValue;
 console.log("its a match :" + data2.inputValue);
   }
  }
}
}
}

// console.log("input value bool :" + data2.timeValue == true);
// console.log("length of timeArray :" + timeArray.length);

this["dateObject" + i + "mdy" + mdyInnerHTML].dateValue = mdyInnerHTML;
this["dateObject" + i + "mdy" + mdyInnerHTML].timeValue = timeArray[i];
this["dateObject" + i + "mdy" + mdyInnerHTML].inputValue = inputContainer.value;

console.log(this["dateObject" + i + "mdy" + mdyInnerHTML]);

localStorage.setItem(["dateObject" + i + "mdy" + mdyInnerHTML], JSON.stringify(this["dateObject" + i + "mdy" + mdyInnerHTML]));
 
// console.log("JSON.parse :" + JSON.parse(this["dateObject" + i + "mdy" + mdyInnerHTML]));

//trying to navigate the local storage and get specific values
console.log("localStorage key :" + localStorage.key(i));
console.log("How to get the object with the key :" + localStorage.getItem(localStorage.key(i)));

//Object.values makes array of single characters
// console.log("How to get the object with the key :" + Object.values(localStorage.getItem(localStorage.key(i))));

//might have to write another for loop outside of this loop to update the document elements
console.log("How to get the object with the key :" + JSON.parse(localStorage.getItem(localStorage.key(i))));

data = JSON.parse(localStorage.getItem(localStorage.key(i)));

console.log("Finally got the time value :" + data.timeValue);
console.log("inputValue :" + data.inputValue);

// console.log("localStorage.key(i).timeValue :" + localStorage.key(i).timeValue)

// if (localStorage.key(i) === this["dateObject" + i + "mdy" + mdyInnerHTML] && localStorage.key(i).timeValue === timeArray[i]) {
//  console.log("it is working")
// }

// console.log("time array :",document.getElementById("inputContainer" + i).textContent = );

 //save button function 
 //for right now saves all but maybe do this[] for saveBtn id
// function saveBtn() {
//  console.log("saveBtn clicked");
//  for (let i=0;i < timeArray.length; i++) {

//   this["dateObject" + i + "mdy" + mdyInnerHTML] = {};

//   this["dateObject" + i + "mdy" + mdyInnerHTML].dateValue = mdyInnerHTML;
//   this["dateObject" + i + "mdy" + mdyInnerHTML].timeValue = timeArray[i];
//   this["dateObject" + i + "mdy" + mdyInnerHTML].inputValue = document.getElementById("inputContainer" + i).value;

//   console.log("this is inputContainer value :" + document.getElementById("inputContainer" + i).value);

//   localStorage.setItem(["dateObject" + i + "mdy" + mdyInnerHTML], JSON.stringify(this["dateObject" + i + "mdy" + mdyInnerHTML]));
//   console.log("saveBtn for loop ran successfully");
//   console.log("inputContainer " + i)
//  }

 // localStorage.setItem(mdyInnerHTML, ["timeOfDay " + [i].value, "inputContainer " + [i].value]);
 // console.log("saveBtn functionality assigned to :" + timeOfDay + "&nbsp" + [i], inputContainer + "&nbsp" + [i]);

 // savedNoteLS = localStorage.getItem(mdyInnerHTML); 

 // console.log(JSON.parse(savedNoteLS));
// }

 console.log(timeContainer);

 //timeContainer styles
 timeContainer.style.display = "flex";
 timeContainer.style.alignItems = "start";
 timeContainer.style.flexDirection = "row";
 timeContainer.style.flexWrap = "wrap";
 timeContainer.style.width = "95%";
 timeContainer.style.height = "100%";
 timeContainer.style.backgroundColor = "white";

//timeOfDay styles
timeOfDay.style.display = "block";
timeOfDay.style.width = "10%";
timeOfDay.style.height = "100px";
timeOfDay.style.fontSize = "20px"
timeOfDay.style.textAlign = "center";
timeOfDay.style.backgroundColor = "dodgerblue";
timeOfDay.style.borderRadius = "2rem 0 0 2rem";
timeOfDay.style.border = "2px solid black"

//noteContainer styles
noteContainer.style.width = "80%";
noteContainer.style.height = "100px";
noteContainer.style.backgroundColor = "springgreen";
noteContainer.style.borderTop = "2px solid black";
noteContainer.style.borderBottom = "2px solid black";

//inputContainer styles
inputContainer.style.display = "block";
inputContainer.style.textAlign = "left";
inputContainer.style.wordBreak = "break-all";
inputContainer.style.overflow = "scroll";
inputContainer.style.overflowY = "scroll";
inputContainer.style.overflowX = "hidden";
inputContainer.style.width = "100%";
inputContainer.style.height = "100px";
inputContainer.style.backgroundColor = "springgreen";
inputContainer.style.fontSize = "20px";
inputContainer.style.fontFamily = "'Shadows Into Light', cursive";


//saveButton btn style
btn.style.width = "10%";
btn.style.height = "100px";
btn.style.backgroundColor = "springgreen";
btn.style.borderRadius = "0 2rem 2rem 0";

//dateChanger Btn style
document.getElementById("dateChangerBtn").style.backgroundColor = "dodgerblue";
document.getElementById("dateChangerBtn2").style.backgroundColor = "dodgerblue";
document.getElementById("dateChangerBtn3").style.backgroundColor = "dodgerblue";
document.getElementById("dateChangerBtn4").style.backgroundColor = "dodgerblue";
document.getElementById("dateChangerBtn5").style.backgroundColor = "dodgerblue";
document.getElementById("dateChangerBtn6").style.backgroundColor = "dodgerblue";

//clearDay btn style
document.getElementById("clearDay").style.backgroundColor = "red";
document.getElementById("clearDay").style.width = "100px";
document.getElementById("clearDay").style.height = "40px";
document.getElementById("clearDay").style.margin = "20px";

//clearAllEntries btn style
document.getElementById("clearAll").style.backgroundColor = "red";
document.getElementById("clearAll").style.width = "100px";
document.getElementById("clearAll").style.height = "40px";
document.getElementById("clearAll").style.margin = "20px";

}



//functions for changing the date
//must add clear input fields then search the database for possible entries and write to corresponding inputContainers on the document

//reminder extra credit is to put scroll box at the bottom of the screen with all days being listed that have atleast 1 entry

function monthUp() {

 console.log("current month :" + m.innerHTML);
 var monthChanger = document.getElementById("monthDisplay");
 mV = monthChanger.innerHTML;
 if (mV < 12) {
 console.log("month variable :" + mV);
 mV++;
 console.log("month up test :" + mV);
 monthChanger.innerHTML = mV;
 }
 loadPage();
}

function monthDown() {

 console.log("current month :" + m.innerHTML);
 var monthChanger = document.getElementById("monthDisplay");
 mV = monthChanger.innerHTML;
 if (mV > 1) {
 console.log("month variable :" + mV);
 mV--;
 console.log("month up test :" + mV);
 monthChanger.innerHTML = mV;
 }
 loadPage();
}

function dayUp() {

 console.log("current day :" + d.innerHTML);
 var dayChanger = document.getElementById("dayDisplay");
 dV = dayChanger.innerHTML;
 if (dV < 31) {
 console.log("day variable :" + dV);
 dV++;
 console.log("day up test :" + dV);
 dayChanger.innerHTML = dV;
}
loadPage();
}

function dayDown() {

 console.log("current day :" + d.innerHTML);
 var dayChanger = document.getElementById("dayDisplay");
 dV = dayChanger.innerHTML;
 if (dV > 1) {
 console.log("day variable :" + dV);
 dV--;
 console.log("day up test :" + dV);
 dayChanger.innerHTML = dV;
}
loadPage();
}

function yearUp() {

 console.log("current year :" + y.innerHTML);
 var yearChanger = document.getElementById("yearDisplay");
 yV = yearChanger.innerHTML;
 if (yV < 40000) {
 console.log("year variable :" + yV);
 yV++;
 console.log("year up test :" + yV);
 yearChanger.innerHTML = yV;
}
loadPage();
}

function yearDown() {

 console.log("current year :" + y.innerHTML);
 var yearChanger = document.getElementById("yearDisplay");
 yV = yearChanger.innerHTML;
 if (yV > 1) {
 console.log("year variable :" + yV);
 yV--;
 console.log("year up test :" + yV);
 yearChanger.innerHTML = yV;
}
loadPage();
}

function clearDayPlan() {
 console.log("clear the day");

 for(let i = 0; i < 24; i++) {
  todaysDate = this["dateObject"+i+"mdy"+mdyInnerHTML];
  todaysDateString = String(["dateObject"+i+"mdy"+mdyInnerHTML]);
  console.log(todaysDateString);
  localStorage.removeItem(todaysDateString);
  console.log("Key removed :" + todaysDateString)
 }
 location.reload();
}

function clearAllEntries() {
 console.log("clear all days")
 localStorage.clear();
 location.reload();
}

function saveBtn() {
 console.log("saveBtn clicked");
 for (let i=0;i < timeArray.length; i++) {

  var mdyInnerHTML = m.innerHTML + "-" + d.innerHTML + "-" + y.innerHTML;

  this["dateObject" + i + "mdy" + mdyInnerHTML] = {};

  this["dateObject" + i + "mdy" + mdyInnerHTML].dateValue = mdyInnerHTML;
  this["dateObject" + i + "mdy" + mdyInnerHTML].timeValue = timeArray[i];
  this["dateObject" + i + "mdy" + mdyInnerHTML].inputValue = document.getElementById("inputContainer" + i).value;

  console.log(String(["dateObject" + i + "mdy" + mdyInnerHTML]));

  console.log("this is inputContainer value :" + document.getElementById("inputContainer" + i).value);

  localStorage.setItem(["dateObject" + i + "mdy" + mdyInnerHTML], JSON.stringify(this["dateObject" + i + "mdy" + mdyInnerHTML]));
  console.log("saveBtn for loop ran successfully");
  console.log("inputContainer " + i);
 }

 
}

function loadPage() {

//  for(let i = 0; i < 24; i++) {
//  document.getElementById("inputContainer" + i).value = "";
// }

 for(let i = 0; i < 24; i++) {
 document.getElementById("inputContainer" + i).value = "";
}

if(localStorage.length > 0) {
for(let x=0; x < localStorage.length; x++) {

 var data2 = JSON.parse(localStorage.getItem(localStorage.key(x)));

//to get the new value of mdyInnerHTML
 var mdyInnerHTML = m.innerHTML + "-" + d.innerHTML + "-" + y.innerHTML;

 console.log("length of localStorage :" + localStorage.length)

 console.log("data2.inputValue :" + data2.inputValue);
 console.log("data2.inputValue true or false :" + data2.inputValue !== 'undefined');
 console.log("data2.inputValue true or false :" + data2.inputValue !== null);
 console.log("data2.inputValue str length :" + data2.inputValue.length !== 0);
 console.log(typeof(data2.inputValue));
 console.log("data2.dateValue :" + data2.dateValue);
 console.log("data2.timeValue :" + data2.timeValue);

 if (data2.dateValue === mdyInnerHTML) {
  console.log("data2 if statement procced");
  for (let z=0; z < timeArray.length; z++) {
   console.log("data2 for loop statement procced");
   if (data2.timeValue === timeArray[z] && data2.inputValue.length > 0) {
    console.log("data2 2nd if statement procced");
    //wasn't working because i did not add the number to the end of the tag, i assumed it was already added like big idiot
 document.getElementById("inputContainer" + z).value = data2.inputValue;
 console.log("its a match :" + data2.inputValue);
   }
  }
}
}
}
}


// if (timeArray.length == 23){
// console.log("localStorage key :" + localStorage.key(i));
// console.log("localStorage.key(i).timeValue :" + localStorage.key(i).value.timeValue)

// if (localStorage.key(i) === this["dateObject" + i + "mdy" + mdyInnerHTML] && localStorage.key(i).timeValue === timeArray[i]) {
//  console.log("it is working")
// }
// }



// //day month year for top of daily planner to save to local storage
// var theDate = new Date();
// var theMonth = (theDate.getMonth() + 1);
// var theDay = theDate.getDate();
// var theYear = theDate.getFullYear();

// dH = document.getElementById("dateHolder");
// m = document.getElementById("monthDisplay");
// d = document.getElementById("dayDisplay");
// y = document.getElementById("yearDisplay");

// dH.style.display = "flex";
// dH.style.flexDirection = "row";
// dH.style.alignItems = "row";

// m.innerHTML = theMonth;
// d.innerHTML = theDay;
// y.innerHTML = theYear;

// var mdyInnerHTML = m.innerHTML + "-" + d.innerHTML + "-" + y.innerHTML; 

// console.log(theDate.getDate());
// console.log(theDate.getMonth() + 1);
// console.log(theDate.getFullYear());

// console.log("innerHTML the month :" + m.innerHTML);
// console.log("innerHTML the day :" + d.innerHTML);
// console.log("innerHTML the year :" + y.innerHTML);
// console.log("mdyInnerHTML :" + mdyInnerHTML);

// console.log("Todays date is :" + (theDate.getMonth() + 1) + "-" + theDate.getDate() + "-" + theDate.getFullYear());

// console.log(timeArray);

// //save button function
// function saveBtn() {
//  localStorage.setItem(mdyInnerHTML, [timeOfDay + [i], inputContainer + [i]]);
//  console.log("saveBtn functionality assigned to :" + timeOfDay + [i], inputContainer + [i]);
// }