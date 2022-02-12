
window.onload = function(){
	x = document.getElementById("intout");
	x.style.visibility = "hidden";
}

function calcint(){
	document.getElementById("calcbtn").style.borderStyle = "inset";
	document.getElementById("calcbtn").style.color = "#FF0000";
	var pamt = document.getElementById("intprin").value;
	var intper = document.getElementById("intper").value / 100;
	var intyear = document.getElementById("intyear").value;
	var intmon = document.getElementById("intmonth").value / 12;
	y = document.getElementById("bstyle");	
	
	if(pamt == 0 || intper == 0 || (intyear == 0 && intmon == 0))
	{
		x = document.getElementById("intout");
		x.style.color = "Red";
		if(pamt == 0){
		x.innerHTML = "Please enter the Principal Amount!";
		x.style.visibility = "visible";
		y.style.borderColor = "#FF0000";
		return 0;
		}else if (intper == 0){
		x.innerHTML = "Please enter the Rate of Interest!";
		y.style.borderColor = "#FF0000";
		}else{
			x.innerHTML = "Please enter the Time period for interest!";
			x.style.visibility = "visible";
			y.style.borderColor = "#FF0000";
		}
	}
	else
	{	
	var totint = pamt * (1 + intper * (parseInt(intyear) + parseInt(intmon)));
	x = document.getElementById("intout");
		x.style.color = "Green";
	x.innerHTML = "Calculated Interest: " + Math.floor(totint);
	x.style.visibility = "visible";
	y.style.borderColor = "#66CC33";
	}
}

function calcvr(){
	document.getElementById("calcbtn").style.borderStyle = "outset";
	document.getElementById("calcbtn").style.color = "#66CC33";
}

function rst(){
	document.getElementById("rstbtn").style.borderStyle = "inset";
	document.getElementById("rstbtn").style.color = "#66CC33";
	document.getElementById("intprin").value = "";
	document.getElementById("intper").value = "";
	document.getElementById("intyear").value = "";
	document.getElementById("intmonth").value = "";	
		x = document.getElementById("intout");
	x.style.visibility = "hidden";
	y = document.getElementById("bstyle");	
y.style.borderColor = "black";
}

function rstvr(){
	document.getElementById("rstbtn").style.borderStyle = "outset";
	document.getElementById("rstbtn").style.color = "#FF0000";
}

function bnorm(){
y = document.getElementById("bstyle");	
y.style.borderColor = "black";
}