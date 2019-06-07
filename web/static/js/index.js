/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var wsUri = getRootUri() + "/endpoint";

function getRootUri(){
	return	"ws//" + 
			(document.location.hostname == "" ? "localhost" : document.location.hostname) +
			":" +
			(document.location.port == "" ? "8080" : document.location.port)
}