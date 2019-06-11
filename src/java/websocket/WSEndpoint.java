/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package websocket;

import helpers.AlumnoHelper;
import javax.websocket.OnMessage;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author tarkus
 */
@ServerEndpoint("/endpoint")
public class WSEndpoint {
    AlumnoHelper ah = new AlumnoHelper();
    @OnMessage
    public String onMessage(String message) {
        System.out.println("ENVIANDO MENSAJE...");
        if(message.equals("cargar")){
            return String.valueOf(ah.getAlumnos().size());
        } else{
            return "0";
        }
    }
    
}
