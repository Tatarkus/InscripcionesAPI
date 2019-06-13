

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
    console.log("SE RECIBE "+evt);
    procesarMensaje(evt.data);
    //document.getElementById("cantidad") = "10";
}
function onError(evt){
    console.log("ERROR!");
}
function doSend(message) {
    console.log("Enviado mensaje: " + message);
    websocket.send(message);
}

function procesarMensaje(json){

    
   // console.log(alumnos.length);
    //console.log(alumnos[0].nombre);
    alumnos = JSON.parse(json);
    var tableRef = document.getElementById('mi_tabla').getElementsByTagName('tbody')[0];
    var newRow   = tableRef.insertRow(tableRef.rows.length);
    var newCell  = newRow.insertCell(0);
    var newText  = document.createTextNode(alumnos[0].nombre);
    newCell.appendChild(newText);
    //for (var i = alumnos.length - 1; i >= 0; i--) {
    //    document.getElementById("mi_tabla").innerHTML += "<tr>";

        
    //}
    
}
window.addEventListener("load",init,false);
