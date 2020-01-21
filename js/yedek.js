// teams object
let chelsea = {
	type: 'team',
	name: 'Chelsea',
	id: 0,
	point: 0,
	played: 0,
	won: 0,
	drawn: 0,
	lost: 0,
	form: 0,
	motivation: 0,
	goalFor: 0,
	goalAgainst: 0,
	possibility: 0,
	possibilityVar: function(){

		if(this.motivation < 0 && this.form < 0) {
			return this.point;
		}else if(this.motivation < 0) {
			return this.point + this.form;
		}else if(this.form < 0) {
			return this.point + this.motivation;
		}else {
			return this.point + this.motivation + this.form;
		}

	},
}

let arsenal = {
	type: 'team',
	name: 'Arsenal',
	id: 1,
	point: 0,
	played: 0,
	won: 0,
	drawn: 0,
	lost: 0,
	form: 0,
	motivation: 0,
	goalFor: 0,
	goalAgainst: 0,
	possibility: 0,
	possibilityVar: function(){
		
		if(this.motivation < 0 && this.form < 0) {
			return this.point;
		}else if(this.motivation < 0) {
			return this.point + this.form;
		}else if(this.form < 0) {
			return this.point + this.motivation;
		}else {
			return this.point + this.motivation + this.form;
		}

	},
}

let mcity = {
	type: 'team',
	name: 'Manchester City',
	id: 2,
	point: 0,
	played: 0,
	won: 0,
	drawn: 0,
	lost: 0,
	form: 0,
	motivation: 0,
	goalFor: 0,
	goalAgainst: 0,
	possibility: 0,
	possibilityVar: function(){
		
		if(this.motivation < 0 && this.form < 0) {
			return this.point;
		}else if(this.motivation < 0) {
			return this.point + this.form;
		}else if(this.form < 0) {
			return this.point + this.motivation;
		}else {
			return this.point + this.motivation + this.form;
		}

	},
}

let liverpool = {
	type: 'team',
	name: 'Liverpool',
	id: 3,
	point: 0,
	played: 0,
	won: 0,
	drawn: 0,
	lost: 0,
	form: 0,
	motivation: 0,
	goalFor: 0,
	goalAgainst: 0,
	possibility: 0,
	possibilityVar: function(){
		
		if(this.motivation < 0 && this.form < 0) {
			return this.point;
		}else if(this.motivation < 0) {
			return this.point + this.form;
		}else if(this.form < 0) {
			return this.point + this.motivation;
		}else {
			return this.point + this.motivation + this.form;
		}

	},
}

if (window.localStorage.getItem('arsenal') || window.localStorage.getItem('mcity') ||  window.localStorage.getItem('chelsea') || window.localStorage.getItem('liverpool')) {
	objUpdate('chelsea', chelsea);
	objUpdate('liverpool', liverpool);
	objUpdate('mcity', mcity);
	objUpdate('arsenal', arsenal);

	// DOM Manipulation
	objectInfoAdd('chelsea', chelsea);
	objectInfoAdd('liverpool', liverpool);
	objectInfoAdd('mcity', mcity);
	objectInfoAdd('arsenal', arsenal);
}

// dom added
function objectInfoAdd(objName, object) {
	document.getElementById(objName + 'PTS').innerHTML = object.point;
	document.getElementById(objName + 'P').innerHTML = object.played;
	document.getElementById(objName + 'W').innerHTML = object.won;
	document.getElementById(objName + 'D').innerHTML = object.drawn;
	document.getElementById(objName + 'L').innerHTML = object.lost;
	document.getElementById(objName + 'GD').innerHTML = object.goalFor - object.goalAgainst;
}

// object update
// add objName type of String ---> objUpdate('chelse', object)
function objUpdate(objName, object) {
	let objData = objName;
	let objCapsule = {};

	objData = window.localStorage.getItem(objName);
	objCapsule = JSON.parse(objData);

	// update values
	object.point = objCapsule.point;
	object.played = objCapsule.played;
	object.won = objCapsule.won;
	object.drawn = objCapsule.drawn;
	object.lost = objCapsule.lost;
	object.form = objCapsule.form;
	object.motivation = objCapsule.motivation;
	object.goalFor = objCapsule.goalFor;
	object.goalAgainst = objCapsule.goalAgainst;
}

// save on the localstorage
let objTeam = [];
objTeam.push(chelsea);
objTeam.push(mcity);
objTeam.push(liverpool);
objTeam.push(arsenal);

let fixture = {
	firstWeek: '',
	secondWeek: '',
	thirdWeek: '',
	fourthWeek: '',
	fifthWeek: '',
	sixthWeek: '',
}

var firstTeamScore = 0;
var secondTeamScore = 0;

let homeTeam = '';
let guestTeam = '';
let teams = [];
let teamCapsule = [];
let teamContainer = [];
let weekIndex;

// return fixture
function returnWeek(arr) {
	let returnArr = [];

	for (var i = arr.length; i > 0; i--) {
		returnArr[i - 1] = arr[arr.length - i];
	}

	return returnArr;
}

// reset object
function resetObj(obj) {
	obj.point = 0;
	obj.played = 0;
	obj.won = 0;
	obj.drawn = 0;
	obj.lost = 0;
	obj.form = 0;
	obj.motivation = 0;
	obj.goalFor = 0;
	obj.goalAgainst = 0;
}

// play match
function playMatch(firstTeam, secondTeam) {
	firstTeamScore = 0;
	secondTeamScore = 0;

	// referance variable
	if (firstTeam == arsenal.name) {
		firstTeam = arsenal;
	} else if (firstTeam == mcity.name) {
		firstTeam = mcity;
	} else if (firstTeam == liverpool.name) {
		firstTeam = liverpool;
	} else if (firstTeam == chelsea.name) {
		firstTeam = chelsea;
	}

	// referance variable
	if (secondTeam == arsenal.name) {
		secondTeam = arsenal;
	} else if (secondTeam == mcity.name) {
		secondTeam = mcity;
	} else if (secondTeam == liverpool.name) {
		secondTeam = liverpool;
	} else if (secondTeam == chelsea.name) {
		secondTeam = chelsea;
	}

	// home team motivation +0.5
	firstTeam.motivation += 0.5;

	if (Math.random() > 0.5)
		Math.random() + firstTeam.motivation + firstTeam.form > Math.random() + secondTeam.motivation + secondTeam.form ? firstTeamScore += 1 : secondTeamScore += 2;

	if (Math.random() < 0.5)
		Math.random() > 0.5 ? firstTeamScore += 1 : secondTeamScore += 1;

	if (Math.random() > 0.5)
		firstTeam.goalFor - firstTeam.goalAgainst > secondTeam.goalFor - secondTeam.goalAgainst ? firstTeamScore += 1 : secondTeamScore += 1;

	if (firstTeamScore > secondTeamScore) {
		winner(firstTeam, firstTeamScore, secondTeamScore);
		lose(secondTeam, secondTeamScore, firstTeamScore);
	} else if (firstTeamScore < secondTeamScore) {
		winner(secondTeam, firstTeamScore, secondTeamScore);
		lose(firstTeam, firstTeamScore, secondTeamScore);
	} else if (firstTeamScore == secondTeamScore) {
		drawn(firstTeam, secondTeam, firstTeamScore, secondTeamScore);
	}

	window.localStorage.setItem('arsenal', JSON.stringify(arsenal));
	window.localStorage.setItem('mcity', JSON.stringify(mcity));
	window.localStorage.setItem('liverpool', JSON.stringify(liverpool));
	window.localStorage.setItem('chelsea', JSON.stringify(chelsea));
}

// winner & lost team
function winner(teamName, firstTeamScore, secondTeamScore) {
	teamName.played += 1;
	teamName.won += 1;
	teamName.point += 3;
	teamName.motivation += 5;
	teamName.form += 2;
	teamName.goalFor += secondTeamScore;
	teamName.goalAgainst += firstTeamScore;
}

function lose(teamName, secondTeamScore, firstTeamScore) {
	teamName.played += 1;
	teamName.lost += 1;
	teamName.motivation -= 5;
	teamName.form -= 2;
	teamName.goalFor += secondTeamScore;
	teamName.goalAgainst += firstTeamScore;
}

function drawn(firstTeamName, secondTeamName, firstTeamScore, secondTeamScore) {
	firstTeamName.played += 1;
	firstTeamName.point += 1;
	firstTeamName.drawn += 1;
	firstTeamName.motivation += 1;
	firstTeamName.form += 1;
	secondTeamName.played += 1;
	secondTeamName.point += 1;
	secondTeamName.drawn += 1;
	secondTeamName.motivation += 1;
	secondTeamName.form += 1;
	firstTeamName.goalFor += secondTeamScore;
	firstTeamName.goalAgainst += firstTeamScore;
	secondTeamName.goalFor += firstTeamScore;
	secondTeamName.goalAgainst += secondTeamScore;
}

function leagueOrder(obj1, obj2, obj3, obj4){

	let percentTotalVal = Math.round(obj1.possibilityVar() + obj2.possibilityVar() + obj3.possibilityVar() + obj4.possibilityVar());

	obj1.possibility = Math.round((obj1.possibilityVar() * 100) / percentTotalVal);
	obj2.possibility = Math.round((obj2.possibilityVar() * 100) / percentTotalVal);
	obj3.possibility = Math.round((obj3.possibilityVar() * 100) / percentTotalVal);
	obj4.possibility = Math.round((obj4.possibilityVar() * 100) / percentTotalVal);

	let order = [obj1, obj2, obj3, obj4];
	let newOrder = [];
	var maxValue = 0;
	var index = 0;


	do{

		for(var i=0 ; i<order.length ; i++){

			if(maxValue <= order[i].possibility){
				maxValue = order[i].possibility;
				index = i;
			}

		}

		newOrder.push(order[index]);	
		order.splice(index, 1);
		maxValue = 0;



	}while(order.length != 0);

	document.getElementById('info').innerHTML = '';

	for(var i=0 ; i<newOrder.length ; i++){

		document.getElementById('posTeam' + i).innerHTML = newOrder[i].name;
		document.getElementById('pos' + i).innerHTML = '%' + newOrder[i].possibility.toFixed(0);

	}


}

// fixture to be determined at the start of simulation
function startLeague() {

	let matchFixture = ['Chelsea', 'Arsenal', 'Manchester City', 'Liverpool'];

	for (var i = 0; i < matchFixture.length; i++) {
		// first week
		// home team
		homeTeam = Math.floor(Math.random() * matchFixture.length);
		teams.push(matchFixture[homeTeam]);
		matchFixture.splice(homeTeam, 1);

		// guest team
		guestTeam = Math.floor(Math.random() * matchFixture.length);
		teams.push(matchFixture[guestTeam]);
		matchFixture.splice(guestTeam, 1);

		fixture.firstWeek = teams;
	}

	teams = [];

	// second week
	teams[0] = fixture.firstWeek[3];
	teams[1] = fixture.firstWeek[0];
	teams[2] = fixture.firstWeek[1];
	teams[3] = fixture.firstWeek[2];

	fixture.secondWeek = teams;

	teams = [];

	// third week
	teams[0] = fixture.firstWeek[0];
	teams[1] = fixture.firstWeek[2];
	teams[2] = fixture.firstWeek[1];
	teams[3] = fixture.firstWeek[3];

	fixture.thirdWeek = teams;

	// fourth week
	fixture.fourthWeek = returnWeek(fixture.thirdWeek);

	// fifth week
	fixture.fifthWeek = returnWeek(fixture.secondWeek);

	// sixth week
	fixture.sixthWeek = returnWeek(fixture.firstWeek);

	// save to localstorage
	window.localStorage.setItem('fixture', JSON.stringify(fixture));
	// week
	window.localStorage.setItem('week', 1);

}

if (window.localStorage.getItem('fixture') == null)
	startLeague();

if (window.localStorage.getItem('week') != 1) {
	document.getElementById('infoWeek').innerHTML = '';
	document.getElementById('week').innerHTML = 'Welcome again,<br> Will continue from week ' + window.localStorage.getItem('week');
}

// nextWeek button function
document.getElementById('nextWeek').onclick = function (e) {
	document.getElementById('nextWeek').innerHTML = 'Next Week';

	for (var i = 0; i <= 6; i++) {
		if (window.localStorage.getItem('week') == i) {

			let fixtureWeek = window.localStorage.getItem('fixture');
			fixtureWeek = JSON.parse(fixtureWeek);

			switch (i) {
				case 1:
					// first week

					// first match
					var matchFirstTeam = fixtureWeek.firstWeek[0];
					var matchSecondTeam = fixtureWeek.firstWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('infoWeek').innerHTML = '';
					document.getElementById('week').innerHTML = window.localStorage.getItem('week') + '. Week Match Result';
					document.getElementById('firstMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;

					// second match
					var matchFirstTeam = fixtureWeek.firstWeek[2];
					var matchSecondTeam = fixtureWeek.firstWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('secondMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;
					break;
				case 2:
					// second week

					// first match
					var matchFirstTeam = fixtureWeek.secondWeek[0];
					var matchSecondTeam = fixtureWeek.secondWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('week').innerHTML = window.localStorage.getItem('week') + '. Week Match Result';
					document.getElementById('firstMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;

					// second match
					var matchFirstTeam = fixtureWeek.secondWeek[2];
					var matchSecondTeam = fixtureWeek.secondWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('secondMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;

					break;
				case 3:
					// third week

					// first match
					var matchFirstTeam = fixtureWeek.thirdWeek[0];
					var matchSecondTeam = fixtureWeek.thirdWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('week').innerHTML = window.localStorage.getItem('week') + '. Week Match Result';
					document.getElementById('firstMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;

					// second match
					var matchFirstTeam = fixtureWeek.thirdWeek[2];
					var matchSecondTeam = fixtureWeek.thirdWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('secondMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;
					break;
				case 4:
					// fourth week

					// first match
					var matchFirstTeam = fixtureWeek.fourthWeek[0];
					var matchSecondTeam = fixtureWeek.fourthWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('week').innerHTML = window.localStorage.getItem('week') + '. Week Match Result';
					document.getElementById('firstMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;

					// second match
					var matchFirstTeam = fixtureWeek.fourthWeek[2];
					var matchSecondTeam = fixtureWeek.fourthWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('secondMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;
					break;
				case 5:
					// fifth week

					// first match
					var matchFirstTeam = fixtureWeek.fifthWeek[0];
					var matchSecondTeam = fixtureWeek.fifthWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('week').innerHTML = window.localStorage.getItem('week') + '. Week Match Result';
					document.getElementById('firstMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;

					// second match
					var matchFirstTeam = fixtureWeek.fifthWeek[2];
					var matchSecondTeam = fixtureWeek.fifthWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('secondMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;
					break;
				case 6:
					// sixth week

					// first match
					var matchFirstTeam = fixtureWeek.sixthWeek[0];
					var matchSecondTeam = fixtureWeek.sixthWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('week').innerHTML = window.localStorage.getItem('week') + '. Week Match Result';
					document.getElementById('firstMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;

					// second match
					var matchFirstTeam = fixtureWeek.sixthWeek[2];
					var matchSecondTeam = fixtureWeek.sixthWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

					// DOM manipulation
					document.getElementById('secondMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' :' + matchSecondTeam;
					break;
				default:
			}

			// possibility of championship
			if(window.localStorage.getItem('week') == 4){

				leagueOrder(chelsea, liverpool, mcity, arsenal);

				// if his score is greater than 6, he guaranteed the championship.
				/*if(chelsea.point > mcity.point + 6 && chelsea.point >  arsenal.point + 6 && chelsea.point > liverpool.point + 6){
					console.log('Chelsea is guaranteed');
				}else if(mcity.point > chelsea.point + 6 && mcity.point > arsenal.point + 6 && mcity.point > liverpool.point + 6){
					console.log('Mcity is guaranteed');
				}else if(liverpool.point > chelsea.point + 6 && liverpool.point > arsenal.point + 6 && liverpool.point > mcity.point + 6){
					console.log('liverpool is guaranteed');
				}else if(arsenal.point > chelsea.point + 6 && arsenal.point > mcity.point + 6 && arsenal.point > liverpool.point + 6){
					console.log('chelse is guaranteed');
				}*/

			}else if(window.localStorage.getItem('week') == 5){
				
				leagueOrder(chelsea, liverpool, mcity, arsenal);

				// if his score is greater than 3, he guaranteed the championship.
				/*if(chelsea.point > mcity.point + 3 && chelsea.point >  arsenal.point + 3 && chelsea.point > liverpool.point + 3){
					console.log('chelsea is guaranteed');
				}else if(mcity.point > chelsea.point + 3 && mcity.point > arsenal.point + 3 && mcity.point > liverpool.point + 3){
					console.log('Mcity is guaranteed');
				}else if(liverpool.point > chelsea.point + 3 && liverpool.point > arsenal.point + 3 && liverpool.point > mcity.point + 3){
					console.log('liverpool is guaranteed');
				}else if(arsenal.point > chelsea.point + 3 && arsenal.point > mcity.point + 3 && arsenal.point > liverpool.point + 3){
					console.log('chelse is guaranteed');
				}*/

			}

			// DOM Manipulation
			// chelsea
			document.getElementById("chelseaPTS").innerHTML = chelsea.point;
			document.getElementById("chelseaP").innerHTML = chelsea.played;
			document.getElementById("chelseaW").innerHTML = chelsea.won;
			document.getElementById("chelseaD").innerHTML = chelsea.drawn;
			document.getElementById("chelseaL").innerHTML = chelsea.lost;
			document.getElementById("chelseaGD").innerHTML = chelsea.goalFor - chelsea.goalAgainst;

			// mcity
			document.getElementById("mcityPTS").innerHTML = mcity.point;
			document.getElementById("mcityP").innerHTML = mcity.played;
			document.getElementById("mcityW").innerHTML = mcity.won;
			document.getElementById("mcityD").innerHTML = mcity.drawn;
			document.getElementById("mcityL").innerHTML = mcity.lost;
			document.getElementById("mcityGD").innerHTML = mcity.goalFor - mcity.goalAgainst;

			// arseal
			document.getElementById("arsenalPTS").innerHTML = arsenal.point;
			document.getElementById("arsenalP").innerHTML = arsenal.played;
			document.getElementById("arsenalW").innerHTML = arsenal.won;
			document.getElementById("arsenalD").innerHTML = arsenal.drawn;
			document.getElementById("arsenalL").innerHTML = arsenal.lost;
			document.getElementById("arsenalGD").innerHTML = arsenal.goalFor - arsenal.goalAgainst;

			// liverpool
			document.getElementById("liverpoolPTS").innerHTML = liverpool.point;
			document.getElementById("liverpoolP").innerHTML = liverpool.played;
			document.getElementById("liverpoolW").innerHTML = liverpool.won;
			document.getElementById("liverpoolD").innerHTML = liverpool.drawn;
			document.getElementById("liverpoolL").innerHTML = liverpool.lost;
			document.getElementById("liverpoolGD").innerHTML = liverpool.goalFor - liverpool.goalAgainst;

			if (window.localStorage.getItem('week') == 6) {

				// Champion team
				if (chelsea.point > mcity.point && chelsea.point > liverpool.point && chelsea.point > arsenal.point)
					document.getElementById('championsTeam').innerHTML = 'Chelsea <br> is the champion of the season';
				else if (mcity.point > chelsea.point && mcity.point > liverpool.point && mcity.point > arsenal.point)
					document.getElementById('championsTeam').innerHTML = 'Manchester City <br> is the champion of the season';
				else if (liverpool.point > mcity.point && liverpool.point > chelsea.point && liverpool.point > arsenal.point)
					document.getElementById('championsTeam').innerHTML = 'Liverpool <br> is the champion of the season';
				else if (arsenal.point > mcity.point && arsenal.point > chelsea.point && arsenal.point > liverpool.point)
					document.getElementById('championsTeam').innerHTML = 'Arsenal <br> is the champion of the season';

				document.getElementById('nextWeek').innerHTML = 'start new season';

				// reset
				startLeague();

				resetObj(chelsea);
				resetObj(mcity);
				resetObj(liverpool);
				resetObj(arsenal);

				weekIndex = 1;
			} else {
				weekIndex = i + 1;
				document.getElementById('championsTeam').innerHTML = '';
			}
		}
	}

	window.localStorage.setItem('week', weekIndex);
}

// playAll button function 
document.getElementById('playAll').onclick = function (e) {
	// catch week
	for (var i = 0; i < 6; i++) {
		if (window.localStorage.getItem('week') == i) {
			let week = i;
			let fixtureWeek = window.localStorage.getItem('fixture');
			fixtureWeek = JSON.parse(fixtureWeek);
			let weekIndex = window.localStorage.getItem(week);

			for (week; week <= 6; week++) {
				weekIndex = i + 1;
				if (week == 1) {
					var matchFirstTeam = fixtureWeek.firstWeek[0];
					var matchSecondTeam = fixtureWeek.firstWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					var matchFirstTeam = fixtureWeek.firstWeek[2];
					var matchSecondTeam = fixtureWeek.firstWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

				} else if (week == 2) {
					var matchFirstTeam = fixtureWeek.secondWeek[0];
					var matchSecondTeam = fixtureWeek.secondWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					matchFirstTeam = fixtureWeek.secondWeek[2];
					matchSecondTeam = fixtureWeek.secondWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

				} else if (week == 3) {
					var matchFirstTeam = fixtureWeek.thirdWeek[0];
					var matchSecondTeam = fixtureWeek.thirdWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					matchFirstTeam = fixtureWeek.thirdWeek[2];
					matchSecondTeam = fixtureWeek.thirdWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

				} else if (week == 4) {
					var matchFirstTeam = fixtureWeek.fourthWeek[0];
					var matchSecondTeam = fixtureWeek.fourthWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					matchFirstTeam = fixtureWeek.fourthWeek[2];
					matchSecondTeam = fixtureWeek.fourthWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

				} else if (week == 5) {
					var matchFirstTeam = fixtureWeek.fifthWeek[0];
					var matchSecondTeam = fixtureWeek.fifthWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					matchFirstTeam = fixtureWeek.fifthWeek[2];
					matchSecondTeam = fixtureWeek.fifthWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

				} else if (week == 6) {
					var matchFirstTeam = fixtureWeek.sixthWeek[0];
					var matchSecondTeam = fixtureWeek.sixthWeek[1];

					playMatch(matchFirstTeam, matchSecondTeam);

					document.getElementById('firstMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' : ' + matchSecondTeam;

					matchFirstTeam = fixtureWeek.sixthWeek[2];
					matchSecondTeam = fixtureWeek.sixthWeek[3];

					playMatch(matchFirstTeam, matchSecondTeam);

					document.getElementById('secondMatch').innerHTML = matchFirstTeam + ': ' + firstTeamScore + ' - ' + secondTeamScore + ' : ' + matchSecondTeam;

				}
			}

			// DOM Manipulation
			// chelsea
			document.getElementById("chelseaPTS").innerHTML = chelsea.point;
			document.getElementById("chelseaP").innerHTML = chelsea.played;
			document.getElementById("chelseaW").innerHTML = chelsea.won;
			document.getElementById("chelseaD").innerHTML = chelsea.drawn;
			document.getElementById("chelseaL").innerHTML = chelsea.lost;
			document.getElementById("chelseaGD").innerHTML = chelsea.goalFor - chelsea.goalAgainst;

			// mcity
			document.getElementById("mcityPTS").innerHTML = mcity.point;
			document.getElementById("mcityP").innerHTML = mcity.played;
			document.getElementById("mcityW").innerHTML = mcity.won;
			document.getElementById("mcityD").innerHTML = mcity.drawn;
			document.getElementById("mcityL").innerHTML = mcity.lost;
			document.getElementById("mcityGD").innerHTML = mcity.goalFor - mcity.goalAgainst;

			// arseal
			document.getElementById("arsenalPTS").innerHTML = arsenal.point;
			document.getElementById("arsenalP").innerHTML = arsenal.played;
			document.getElementById("arsenalW").innerHTML = arsenal.won;
			document.getElementById("arsenalD").innerHTML = arsenal.drawn;
			document.getElementById("arsenalL").innerHTML = arsenal.lost;
			document.getElementById("arsenalGD").innerHTML = arsenal.goalFor - arsenal.goalAgainst;

			// liverpool
			document.getElementById("liverpoolPTS").innerHTML = liverpool.point;
			document.getElementById("liverpoolP").innerHTML = liverpool.played;
			document.getElementById("liverpoolW").innerHTML = liverpool.won;
			document.getElementById("liverpoolD").innerHTML = liverpool.drawn;
			document.getElementById("liverpoolL").innerHTML = liverpool.lost;
			document.getElementById("liverpoolGD").innerHTML = liverpool.goalFor - liverpool.goalAgainst;

			// DOM manipulation
			document.getElementById('infoWeek').innerHTML = '';
			document.getElementById('week').innerHTML = 6 + '. Week Match Result';

			// Champion team
			if (chelsea.point > mcity.point && chelsea.point > liverpool.point && chelsea.point > arsenal.point)
				document.getElementById('championsTeam').innerHTML = 'Chelsea <br> is the champion of the season';
			else if (mcity.point > chelsea.point && mcity.point > liverpool.point && mcity.point > arsenal.point)
				document.getElementById('championsTeam').innerHTML = 'Manchester City <br> is the champion of the season';
			else if (liverpool.point > mcity.point && liverpool.point > chelsea.point && liverpool.point > arsenal.point)
				document.getElementById('championsTeam').innerHTML = 'Liverpool <br> is the champion of the season';
			else if (arsenal.point > mcity.point && arsenal.point > chelsea.point && arsenal.point > liverpool.point)
				document.getElementById('championsTeam').innerHTML = 'Arsenal <br> is the champion of the season';

			//document.getElementById('playAll').innerHTML = 'start new season';
		}

		// reset

		startLeague();

		resetObj(chelsea);
		resetObj(mcity);
		resetObj(liverpool);
		resetObj(arsenal);

	}
	window.localStorage.setItem('week', 1);

}

// DOM manipulation

if (window.localStorage.getItem('week') < 1) {
	document.getElementById('week').innerHTML = window.localStorage.getItem('week') + '. ';
}

