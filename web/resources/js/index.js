

var wsUri = getRootUri() + "/InscripcionesAPI/endpoint";

function getRootUri(){
	return	"ws://" + 
			(document.location.hostname == "" ? "localhost" : document.location.hostname) +
			":" +
			(document.location.port == "" ? "8080" : document.location.port)
}

function init() {
    console.log(wsUri);
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) {
        onOpen(evt);
    };
    websocket.onmessage = function(evt) {
        onMessage(evt);
    };
    websocket.onerror = function(evt) {
        onError(evt);
    };
}

function onOpen(evt) {
    console.log("CONECTADO");
}
function onMessage(evt) {
    console.log("SE RECIBE: "+evt.data);
    document.getElementById("cantidad") = evt.data;
}
function onError(evt){
    console.log("ERROR!");
}
function doSend(message) {
    console.log("Enviado mensaje: " + message);
    websocket.send(message);
}
window.addEventListener("load",init,false);
