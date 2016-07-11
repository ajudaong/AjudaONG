function DonatinonLog(){

}

DonatinonLog.addLog = function(name, value, date){
	var donationLog = document.getElementById("donation-log");
	
	var nameDiv = document.createElement("div");
	nameDiv.classList.add("col-md-4");
	nameDiv.innerHTML = name;
	
	var valueDiv = document.createElement("div");
	valueDiv.classList.add("col-md-4");
	valueDiv.innerHTML = value;
	
	var dateDiv = document.createElement("div");
	dateDiv.classList.add("col-md-4");
	dateDiv.innerHTML = date;

	donationLog.appendChild(nameDiv);
	donationLog.appendChild(valueDiv);
	donationLog.appendChild(dateDiv);
}