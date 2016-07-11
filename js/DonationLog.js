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

DonationLog.getTransactionStatus = function(checkoutCode)
{
	// checkoutCode = '8F530471B0B0DE06646B2FB7CEB4310F';
	PagSeguroLightbox({
	code: checkoutCode
	}, {
	     success : function(transactionCode) {
	        alert("success - " + transactionCode);
	        writeToDontpad("2,00");
	     },
	     abort : function() {
	       	alert("abort - " + transactionCode);
	        writeToDontpad("-2,00");
	     }
	});

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
