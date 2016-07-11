window.onload = function()
{
	updateDonationLog();
}

function updateDonationLog()
{
	DonationLog.getFromDontpad();

	setTimeout(updateDonationLog, 60000);
}

function writeToDontpad(donationValue) {
	console.log("Enviando para dontpad...");

	var d = new Date;
	var dFormatted = [d.getMonth()+1, d.getDate(), d.getFullYear()].join('/')+' '+
              	  [d.getHours(),d.getMinutes(),d.getSeconds()].join(':');


	readFromDontpad( function(data) {
		var oldContent = data; 
		var toWrite =  oldContent + "\n" + dFormatted + "|" + donationValue;

		$.post( "http://dontpad.com/ajudaong/log.body.json", { text: toWrite } );
	});
}

function readFromDontpad(callback) {
	// $.ajaxPrefilter( function (options) {
	// 	  if (options.crossDomain && jQuery.support.cors) {
	// 	    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
	// 	    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
	// 	    //options.url = "http://cors.corsproxy.io/url=" + options.url;
	// 	  }
	// });
	
	$("#temp-storage").load('http://dontpad.com/!/266af60a32285a665372e6e8670db2cb20ea1277', function() {
		var dontpadContent = document.getElementById('temp-storage').innerHTML;
		callback(dontpadContent);
	});
}

function getTransactionStatus()
{
	checkoutCode = '8F530471B0B0DE06646B2FB7CEB4310F';
	PagSeguroLightbox({code: checkoutCode},
	{
	     success : function(transactionCode) {
	        writeToDontpad("2,00");
	     },
	     abort : function() {
	        writeToDontpad("-2,00");
	     }
	});
}
