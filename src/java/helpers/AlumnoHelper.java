/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package helpers;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import pojos.Alumno;
import util.HibernateUtil;

/**
 *
 * @author tarkus
 */
public class AlumnoHelper {
      Session session=null;
      List <Alumno> alumnos;
    
     public AlumnoHelper(){
        this.session = HibernateUtil.getSessionFactory().openSession();
        Query q = session.createQuery("from Alumno");
        alumnos = (List<Alumno>) q.list();
    }
    
    public void updateAlumnos(){
        
        Query q = session.createQuery("from Alumno");
        alumnos = (List<Alumno>) q.list();
    }
    
    public List getAlumnos(){
        return alumnos;
    }
}
