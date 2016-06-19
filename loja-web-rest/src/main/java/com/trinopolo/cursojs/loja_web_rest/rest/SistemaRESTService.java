package com.trinopolo.cursojs.loja_web_rest.rest;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/sistema")
@RequestScoped
public class SistemaRESTService {
	
	@GET
    @Produces(MediaType.APPLICATION_JSON)
    public String data() {
        return new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(new Date());
    }

}
