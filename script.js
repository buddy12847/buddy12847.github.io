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
	document.getElementById("titleimage").src="Holiday/garfunkelday.png";
}
if (month == "G" && day == 6){
	document.getElementById("titleimage").src="Holiday/garfunkiaindependence.png";
}
if (month == "G" && day == 16){
	document.getElementById("titleimage").src="Holiday/racism.png";
}
if (month == "G" && day == 55){
	document.getElementById("titleimage").src="Holiday/jesse.png";
}
if (month == "G" && day == 59){
	document.getElementById("titleimage").src="Holiday/jesse.png";
}
if (month == "L" && day == 8){
	document.getElementById("titleimage").src="Holiday/reviewbrah.png";
}
if (month == "L" && day == 22){
	document.getElementById("titleimage").src="Holiday/seinfeld.png";
}
if (month == "L" && day == 36){
	document.getElementById("titleimage").src="Holiday/henrald.png";
}
if (month == "L" && day == 50){
	document.getElementById("titleimage").src="Holiday/aidan.png";
}
if (month == "L" && day == 56){
	document.getElementById("titleimage").src="Holiday/andrew.png";
}
if (month == "L" && day == 59){
	document.getElementById("titleimage").src="Holiday/terry.png";
}
if (month == "L" && day == 63){
	document.getElementById("titleimage").src="Holiday/brony.png";
}
if (month == "L" && day == 68){
	document.getElementById("titleimage").src="Holiday/afghan.png";
}
if (month == "P" && day == 20){
	document.getElementById("titleimage").src="Holiday/911.png";
}
if (month == "P" && day == 26){
	document.getElementById("titleimage").src="Holiday/curiousgeorge.png";
}
if (month == "P" && day == 31){
	document.getElementById("titleimage").src="Holiday/fall.png";
}
if (month == "P" && day == 37){
	document.getElementById("titleimage").src="Holiday/rabies.png";
}
if (month == "P" && day == 41){
	document.getElementById("titleimage").src="Holiday/pawwah.png";
}
if (month == "P" && day == 42){
	document.getElementById("titleimage").src="Holiday/pawwah.png";
}
if (month == "P" && day == 43){
	document.getElementById("titleimage").src="Holiday/pawwah.png";
}
if (month == "P" && day == 44){
	document.getElementById("titleimage").src="Holiday/pawwah.png";
}
if (month == "P" && day == 45){
	document.getElementById("titleimage").src="Holiday/pawwah.png";
}
if (month == "P" && day == 46){
	document.getElementById("titleimage").src="Holiday/pawwah.png";
}
if (month == "P" && day == 47){
	document.getElementById("titleimage").src="Holiday/pawwah.png";
}
if (month == "P" && day == 48){
	document.getElementById("titleimage").src="Holiday/pawwah.png";
}
if (month == "P" && day == 49){
	document.getElementById("titleimage").src="Holiday/pawwah.png";
}
if (month == "P" && day == 50){
	document.getElementById("titleimage").src="Holiday/pawwah.png";
}
if (month == "P" && day == 65){
	document.getElementById("titleimage").src="Holiday/superd.png";
}
if (month == "D" && day == 17){
	document.getElementById("titleimage").src="Holiday/doug.png";
}
if (month == "D" && day == 20){
	document.getElementById("titleimage").src="Holiday/brony.png";
}
if (month == "D" && day == 20){
	document.getElementById("titleimage").src="Holiday/superdonkeykong2.png";
}
if (month == "D" && day == 28){
	document.getElementById("titleimage").src="Holiday/zach.png";
}
if (month == "D" && day == 44){
	document.getElementById("titleimage").src="Holiday/alvin.png";
}
if (month == "D" && day == 45){
	document.getElementById("titleimage").src="Holiday/terrynick.png";
}
if (month == "D" && day == 49){
	document.getElementById("titleimage").src="Holiday/desp.png";
}
if (month == "D" && day == 51){
	document.getElementById("titleimage").src="Holiday/winter.png";
}
if (month == "D" && day == 57){
}
if (month == "D" && day == 70){
	document.getElementById("titleimage").src="Holiday/nixon.png";
}
if (month == "C" && day == 1){
	document.getElementById("titleimage").src="Holiday/tintin.png";
}
if (month == "C" && day == 4){
	document.getElementById("titleimage").src="Holiday/c4.png";
}
if (month == "C" && day == 20){
	document.getElementById("titleimage").src="Holiday/kansas.png";
}
if (month == "C" && day == 21){
	document.getElementById("titleimage").src="Holiday/quick.png";
}
if (month == "C" && day == 30){
	document.getElementById("titleimage").src="Holiday/misa.png";
}
if (month == "C" && day == 33){
	document.getElementById("titleimage").src="Holiday/alex.png";
}
if (month == "C" && day == 37){
	document.getElementById("titleimage").src="Holiday/professor.png";
}
if (month == "C" && day == 40){
	document.getElementById("titleimage").src="Holiday/chad.png";
}
if (month == "C" && day == 62){
	document.getElementById("titleimage").src="Holiday/scatman.png";
}
if (month == "C" && day == 67){
	document.getElementById("titleimage").src="Holiday/gangweed.png";
}
if (month == "C" && day == 70){
	document.getElementById("titleimage").src="Holiday/spring.png";
}
if (month == "R" && day == 1){
	// first day of repentence
}
if (month == "R" && day == 11){
	document.getElementById("titleimage").src="Holiday/yahoo.png";
}
if (month == "R" && day == 15){
	document.getElementById("titleimage").src="Holiday/newyearseve.png";
}

//audio-video nonesense

var g = document.getElementById("garfunkiaAudio"); 
g.volume = 0.5;
document.getElementById("titlecc").style.width = "auto";

// Functions for flag clicks.

function flagclicked(){
	if (month == "R" && day == 15){
		var embedCode = '<video controls autoplay><source src="Video/newyear.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
	}
	if (month == "D" && day == 44){
		var embedCode = '<video controls autoplay><source src="Video/alvin.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
	}
	if (month == "L" && day == 22){
		var embedCode = '<video controls autoplay><source src="Video/seinfeld.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
	}
	if (month == "L" && day == 59){
		document.getElementById("gfaudio").src="Sound/terry.mp3";
		g.play();
	}
	if (month == "P" && day == 65){
		document.getElementById("gfaudio").src="Sound/superd.mp3";
		g.play();
	}
	if (month == "L" && day == 68){
		document.getElementById("gfaudio").src="Sound/afghan.mp3";
		g.play();
	}
	if (month == "P" && day == 26){
		var embedCode = '<video controls autoplay><source src="Video/curious.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
	}
	if (month == "C" && day == 1){
		var embedCode = '<video controls autoplay><source src="Video/tintin.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
	}
	if (month == "C" && day == 37){
		document.getElementById("gfaudio").src="Sound/professor.mp3";
		g.play();
	}
	if (month == "P" && day == 20){
		var embedCode = '<video controls autoplay><source src="Video/911.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
	}
	
	
	
	if (month == "P" && day == 41){
	var embedCode = '<video controls autoplay><source src="Video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 42){
	var embedCode = '<video controls autoplay><source src="Video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 43){
	var embedCode = '<video controls autoplay><source src="Video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 44){
	var embedCode = '<video controls autoplay><source src="Video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 45){
	var embedCode = '<video controls autoplay><source src="Video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 46){
	var embedCode = '<video controls autoplay><source src="Video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 47){
	var embedCode = '<video controls autoplay><source src="Video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 48){
	var embedCode = '<video controls autoplay><source src="Video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 49){
	var embedCode = '<video controls autoplay><source src="Video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
if (month == "P" && day == 50){
	var embedCode = '<video controls autoplay><source src="Video/pawwah.mp4" type="video/mp4"></video>'
		document.getElementById('titlecc').innerHTML = embedCode;
}
}





// Below
// exports the day formatted to the correct format into a paragraph with the id of "p1".
document.getElementById("p1").innerHTML = month + day + "-GY" + year;
{}







