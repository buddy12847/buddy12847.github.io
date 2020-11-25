// Nonesense that tells you days since a date. //
function parseDate(str) {
	var mdy = str.split('/');
	return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
	// Take the difference between the dates and divide by milliseconds per day.
	// Round to nearest whole number to deal with DST.
	return Math.round((second-first)/(1000*60*60*24));
}
//end of that//

var d = new Date();
var currentMonth = d.getMonth();
var currentYear = d.getFullYear();
var currentDay = d.getDate();
var currentHour = d.getHours();
var month;
var day;
// Finds out the month (Not current set up for leap years. Keep that in mind.) //
if (currentMonth == 3 && currentDay > 4 || currentMonth == 4 || currentMonth == 5 && currentDay < 14){
	var month = "G";
}
if (currentMonth == 5 && currentDay > 13 || currentMonth == 6 || currentMonth == 7 && currentDay < 23){
	var month = "L";
}
if (currentMonth == 7 && currentDay > 22 || currentMonth == 8 || currentMonth == 9){
	var month = "P";
}
if (currentMonth == 10 || currentMonth == 11 || currentMonth == 0 && currentDay < 10){
	var month = "D";
}
if (currentMonth == 0 && currentDay > 9 || currentMonth == 1 || currentMonth == 2 && currentDay < 22){
	var month = "C";
}
if (currentMonth == 2 && currentDay > 21 || currentMonth == 3 && currentDay < 5){
	var month = "R";
}
// Finds out the day.//
if (month == "G"){
	day = datediff(parseDate("4/4/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "L"){
	day = datediff(parseDate("6/13/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "P"){
	day = datediff(parseDate("8/22/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "D" && currentMonth !== 0){
	day = datediff(parseDate("10/31/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "D" && currentMonth == 0){
	day = datediff(parseDate("1/1/" + currentYear) + 1, parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "C"){
	day = datediff(parseDate("1/9/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "R"){
	day = datediff(parseDate("3/21/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
// End of day finding
// Below subtracts 1 if before 6am
if(currentHour<6){
	day=day-1;
	
}

//end of that


// Find year
var year;
if(currentMonth>3 || curentMonth==3 && currentDay>4){
	year = currentYear - 2017;
	
} else {
	year = currentYear - 2018;
}
// End of year finding
// Below exports the day formatted to the correct format into a paragraph with the id of "p1".
document.getElementById("p1").innerHTML = month + day + "-GY" + year;
	