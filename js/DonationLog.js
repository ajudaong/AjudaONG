function DonationLog(){}

DonationLog.addLog = function(date, value)
{
	var donationLog = document.getElementById("donation-log");
	
	var valueDiv = document.createElement("div");
	valueDiv.classList.add("col-md-6");
	valueDiv.innerHTML = value;
	
	var dateDiv = document.createElement("div");
	dateDiv.classList.add("col-md-6");
	dateDiv.innerHTML = date;

	donationLog.appendChild(dateDiv);
	donationLog.appendChild(valueDiv);
};

DonationLog.getFromDontpad = function()
{
	readFromDontpad(function(data)
	{
		var logList = data.split("\n");
		for (logEntry of logList){
			var log = logEntry.split("|");
			DonationLog.addLog(log[0], log[1]);
		}
	});
};