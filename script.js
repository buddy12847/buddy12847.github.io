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
if (currentMonth == 2 && currentDay > 20 || currentMonth == 3 && currentDay < 5){
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
	day = 62 + datediff(parseDate("1/1/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "C"){
	day = datediff(parseDate("1/9/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
if (month == "R"){
	day = datediff(parseDate("3/20/" + currentYear), parseDate(currentMonth + 1 + "/" + currentDay + "/" + currentYear))
}
// End of day finding


//end of that

var tzoff = d.getTimezoneOffset() / 60;
// Find year
var year;
if( currentMonth > 3 || currentMonth==3 && currentDay>4){
	year = currentYear - 2017;
	
} else {
	year = currentYear - 2018;
}
// End of year finding

// Below subtracts 1 if before 6am
if(tzoff!=12 && currentHour < 6){
	day=day-1;
	
}

if (month == "G" && day == 1){
	document.getElementById("p2").innerHTML = "Happy Garfunkel and Paw Wah Day! We wish you a happy Garfunkel Year " + year + "!";
}
if (month == "G" && day == 6){
	document.getElementById("p2").innerHTML = "Happy Garfunkian Independence Day!";
}
if (month == "G" && day == 16){
	document.getElementById("p2").innerHTML = "Happy Racism Day!";
}
if (month == "G" && day == 16){
	document.getElementById("p2").innerHTML = "Happy Jesse Dotson Day! He is " + (currentYear - 2005) + " years old today.";
}
if (month == "G" && day == 59){
	document.getElementById("p2").innerHTML = "Happy Convert a Sex Worker Day!";
}
if (month == "L" && day == 8){
	document.getElementById("p2").innerHTML = "Happy Reviewbrah Day and Summer Solstice!";
}
if (month == "L" && day == 10){
	document.getElementById("p2").innerHTML = "Happy Hardee's Day! Drop by and order a bacon, egg, and cheese biscuit.";
}
if (month == "L" && day == 22){
	document.getElementById("p2").innerHTML = "Happy Seinfeld Day!";
}
if (month == "L" && day == 36){
	document.getElementById("p2").innerHTML = "Happy Henrald Legg Day! He is " + (currentYear - 2004) + " years old today.";
}
if (month == "L" && day == 50){
	document.getElementById("p2").innerHTML = "Happy Aidan Orth Day! He is " + (currentYear - 2004) + " years old today.";
}
if (month == "L" && day == 56){
	document.getElementById("p2").innerHTML = "Happy Andrew Davidson Day! He is " + (currentYear - 2005) + " years old today.";
}
if (month == "L" && day == 59){
	document.getElementById("p2").innerHTML = "Today we remember the loss of Terry Davis " + (currentYear - 2018) + " years ago today.";
}
if (month == "L" && day == 63){
	document.getElementById("p2").innerHTML = "War of the Bronies Rememberance Day. " + (currentYear - 2018) + " years ago today, our brave men fought one of the greatest battles in Garfunkian history.";
}
if (month == "L" && day == 68){
	document.getElementById("p2").innerHTML = "Happy Afghan Independence Day! The first ally of Garfunkia.";
}
if (month == "P" && day == 20){
	document.getElementById("p2").innerHTML = "Epic 9/11 Day.";
}
if (month == "P" && day == 26){
	document.getElementById("p2").innerHTML = "Happy Curious George Day!";
}
if (month == "P" && day == 31){
	document.getElementById("p2").innerHTML = "Happy Fall Equinox!";
}
if (month == "P" && day == 37){
	document.getElementById("p2").innerHTML = "Happy Rabies Day!";
}
if (month == "P" && day == 41){
	document.getElementById("p2").innerHTML = "Today is the first day of the Week of Paw Wah. We wish you a merry week of celebrations!";
}
if (month == "P" && day == 50){
	document.getElementById("p2").innerHTML = "Today is the last day of the Week of Paw Wah, we hope you had a great week with your friends and family.";
}
if (month == "D" && day == 17){
	document.getElementById("p2").innerHTML = "Happy Doug Walker Day! He is " + (currentYear - 1981) + " years old today.";
}
if (month == "D" && day == 20){
	document.getElementById("p2").innerHTML = "Happy Raphtalia Conversion Day!";
}
if (month == "D" && day == 20){
	document.getElementById("p2").innerHTML = "Happy スーパードンキーコング2 Day!";
}
if (month == "D" && day == 28){
	document.getElementById("p2").innerHTML = "Happy Zach Dawson Day! He is " + (currentYear - 2004) + " years old today.";
}
if (month == "D" && day == 44){
	document.getElementById("p2").innerHTML = "Happy Alvin and the Chipmunks Day!";
}
if (month == "D" && day == 45){
	document.getElementById("p2").innerHTML = "Happy Nicholas Qualls and Terry Davis Day! They are " + (currentYear - 2004) + " and " + (currentYear - 1969) + " years old today respectively.";
}
if (month == "D" && day == 49){
	document.getElementById("p2").innerHTML = "Happy Tale of Despereaux Day!";
}
if (month == "D" && day == 51){
	document.getElementById("p2").innerHTML = "Happy Winter Solstice!";
}
if (month == "D" && day == 57){
	document.getElementById("p2").innerHTML = "Happy Anti-Woodrow Wilson Day!";
}
if (month == "D" && day == 70){
	document.getElementById("p2").innerHTML = "Happy I am not a crook Day! Richard Nixon is " + (currentYear - 1913) + " years old today.";
}
if (month == "C" && day == 1){
	document.getElementById("p2").innerHTML = "Happy Tintin Day!";
}
if (month == "C" && day == 4){
	document.getElementById("p2").innerHTML = "Happy Explosives Day!";
}
if (month == "C" && day == 20){
	document.getElementById("p2").innerHTML = "Happy Anti-Kansas Day! The worst state.";
}
if (month == "C" && day == 21){
	document.getElementById("p2").innerHTML = "Happy Quick Knowledge Day! Teach us , from the baby nursery please Or after few days on the way , we will be pulling our hair.";
}
if (month == "C" && day == 30){
	document.getElementById("p2").innerHTML = "Happy Misa Day!";
}
if (month == "C" && day == 33){
	document.getElementById("p2").innerHTML = "Happy Alex Jones Day! He is " + (currentYear - 1974) + " years old today.";
}
if (month == "C" && day == 37){
	document.getElementById("p2").innerHTML = "Happy Professor Layton Day!";
}
if (month == "C" && day == 40){
	document.getElementById("p2").innerHTML = "Happy Chad Day! He is " + (currentYear - 2005) + " years old today.";
}
if (month == "C" && day == 62){
	document.getElementById("p2").innerHTML = "Happy Scatman Day! He is " + (currentYear - 1942) + " years old today.";
}
if (month == "C" && day == 67){
	document.getElementById("p2").innerHTML = "Today marks the anniversary of the founding of the Knights of Gangweed.";
}
if (month == "C" && day == 70){
	document.getElementById("p2").innerHTML = "Happy Spring Equinox!";
}
if (month == "R" && day == 1){
	document.getElementById("p2").innerHTML = "Today marks the first day of the month of Repentance. Repent your sins to Garfunkel as the year comes to a close.";
}
if (month == "R" && day == 15){
	document.getElementById("p2").innerHTML = "Today marks the final day of the month of Repentance and New Year's Eve. Garfunkel Year " + year + " comes to an end today as we enter into a new year.";
}

// Below
// exports the day formatted to the correct format into a paragraph with the id of "p1".
document.getElementById("p1").innerHTML = month + day + "-GY" + year;
function sendMessage() {
      var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/781073554459328523/AGJNzngIf0ucxs5LYufzFmL2dUys50xFSiWmGbtnb_QSt9-K0UQ7zzKHAmwEuVnbL3b6");
request.setRequestHeader('Content-type', 'application/json');

      var params = {
        content: month + day + "-GY" + year + "\n   " + "00:00"
      }

      request.send(JSON.stringify(params));
    }







