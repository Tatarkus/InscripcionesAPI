

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

    
    console.log(json);
    //console.log(alumnos[0].nombre);
    alumnos = JSON.parse(json);
    var tableRef = document.getElementById('mi_tabla').getElementsByTagName('tbody')[0];
    var contador = 0; 
    for (var i = alumnos.length - 1; i >= 0 && contador < 20; i--) {
        var newRow   = tableRef.insertRow(tableRef.rows.length);

        var newCell  = newRow.insertCell(0);
        var newText  = document.createTextNode(i+1);
        newCell.appendChild(newText);

        var newCell  = newRow.insertCell(1);
        var newText  = document.createTextNode(alumnos[i].nombre);
        newCell.appendChild(newText);

        var newCell  = newRow.insertCell(2);
        var newText  = document.createTextNode(alumnos[i].apPaterno);
        newCell.appendChild(newText);

        var newCell  = newRow.insertCell(3);
        var newText  = document.createTextNode(alumnos[i].apMaterno);
        newCell.appendChild(newText);

        var newCell  = newRow.insertCell(4);
        var newText  = document.createTextNode(alumnos[i].correo);
        newCell.appendChild(newText);

        var newCell  = newRow.insertCell(5);
        var newText  = document.createTextNode(alumnos[i].sexo);
        newCell.appendChild(newText);

        var newCell  = newRow.insertCell(6);
        var newText  = document.createTextNode(alumnos[i].comuna);
        newCell.appendChild(newText);
        contador++;
 

    }
    document.getElementById("cantidad").innerHTML = "Cantidad de Alumnos: "+alumnos.length;
    
}
window.addEventListener("load",init,false);
