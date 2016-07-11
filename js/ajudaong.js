function writeToDontpad(donationValue) {
	console.log("Enviando para dontpad...");

	readFromDontpad( function(data) {
		var oldContent = data; 
		var toWrite =  oldContent + "\n" + donationValue;

		$.post( "http://dontpad.com/ajudaong/log.body.json", { text: toWrite } );
	});

}

function readFromDontpad(callback) {
	$.ajaxPrefilter( function (options) {
		  if (options.crossDomain && jQuery.support.cors) {
		    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
		    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
		    //options.url = "http://cors.corsproxy.io/url=" + options.url;
		  }
	});

	$("#temp-storage").load('http://dontpad.com/!/266af60a32285a665372e6e8670db2cb20ea1277', function() {
		var dontpadContent = document.getElementById('temp-storage').innerHTML;
		callback(dontpadContent);
	});
}
