/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package websocket;

import com.google.gson.Gson;
import helpers.AlumnoHelper;
import java.util.List;
import javax.websocket.OnMessage;
import javax.websocket.server.ServerEndpoint;
import pojos.Alumno;

/**
 *
 * @author tarkus
 */
@ServerEndpoint("/endpoint")
public class WSEndpoint {
    AlumnoHelper ah = new AlumnoHelper();
    @OnMessage
    public String onMessage(String message) {
        if(message.equals("cargar")){
            Gson gson = new Gson();
            Alumno al = new Alumno();
            String json = "[";
            int contador = 0;
            
            for (Alumno alumno : (List<Alumno>)ah.getAlumnos()) {
                json = json + gson.toJson(alumno)+',';

            }
            json = json.substring(0, json.length()-1);
            json=json+']';
            System.out.println("ENVIANDO MENSAJE: " + json);


            return json;
        } else{
            System.out.println("ENVIANDO MENSAJE: 0");
            return "0";
        }
    }
    
}
