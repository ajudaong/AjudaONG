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
	       
	     }
	});



}