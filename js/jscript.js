
function calcint(){
	var pamt = document.getElementById("intprin").value;
	var intper = document.getElementById("intper").value / 100;
	var intyear = document.getElementById("intyear").value;
	var intmon = document.getElementById("intmonth").value / 12;
	
	if(pamt == 0 || intper == 0 || (intyear == 0 && intmon == 0))
	{
		x = document.getElementById("intout");
		x.style.color = "Red";
		if(pamt == 0){
		x.innerHTML = "Please enter the Principal Amount!";
		return 0;
		}else if (intper == 0){
		x.innerHTML = "Please enter the Rate of Interest!";
		}else{
			x.innerHTML = "Please enter the Time period for interest!";
		}
	}
	else
	{	
	var totint = pamt * (1 + intper * (intyear + intmon));
	x = document.getElementById("intout");
		x.style.color = "Green";
	x.innerHTML = "Simple Interest for the above values: " + Math.floor(totint);
	}
}