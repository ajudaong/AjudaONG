function writeToDontpad() {
	console.log("Enviando para dontpad...");
	$.post( "http://dontpad.com/ajudaong/log.body.json", { text: "github" } );
}

function readFromDontpad() {
	console.log('Lendo do dontpad...');
	$.get( "http://dontpad.com/ajudaong/log.body.json", function( data ) {
  		console.log( data );
});
}