async function fetchData(){

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;

const res = await fetch(`https://www.balldontlie.io/api/v1/games?dates[]=${today}`);
const record = await res.json();

document.getElementById("today").innerHTML = `${today}`

document.getElementById("mac").innerHTML = record.data.map(item => 
	`<li class="mt-2">
	<div class="dıkdortgen rounded-4">
		<div class="birdiv"></div>
		<div class="ikidiv">
		<span class="homename text-center">${item.home_team.full_name}</span>
		<span class="homescore">${item.home_team_score}</span>
		<span class="home">HOME</span>
		<span class="home3 text-center">${item.home_team.abbreviation}</span>
		<div class="icon1">
			<img src="ball.ico" style="width: 25px; height: 25px" />
		</div>
		</div>
		<div class="div3">
		<span class="visitor3 text-center">${item.visitor_team.abbreviation}</span>
		<span class="visitorname text-center">${item.visitor_team.full_name}</span>
		<span class="visitorscore">${item.visitor_team_score}</span>
		<span class="visitor">VISITOR</span>
		<div class="icon2">
			<img src="ball.ico" style="width: 25px; height: 25px" />
		</div>
		</div>
		<div class="div4">
		<span class="saat text-center">${item.status}</span>
		<span class="tire">-</span>
		</div>
		</div>
		</li>`
	).join('');

}
fetchData();