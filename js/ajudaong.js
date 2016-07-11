function writeToDontpad() {
	console.log("Enviando para dontpad...");
	$.post( "http://dontpad.com/ajudaong/log.body.json", { text: "teste" } );
}