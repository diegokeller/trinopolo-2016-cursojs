/*
 * JBoss, Home of Professional Open Source
 * Copyright 2013, Red Hat, Inc. and/or its affiliates, and individual
 * contributors by the @authors tag. See the copyright.txt in the
 * distribution for a full listing of individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.trinopolo.cursojs.loja_web_rest.rest;

import java.util.HashMap;
import java.util.Map;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.trinopolo.cursojs.loja_web_rest.dto.AutenticacaoDto;
import com.trinopolo.cursojs.loja_web_rest.model.Usuario;

@Path("/autenticacao")
@RequestScoped
public class AutenticacaoRESTService {

	@Inject
	EntityManager em;

	@Inject
	UsuarioRESTService usuarioService;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response autentica(AutenticacaoDto dto) {
		if (dto.getEmail() != null && dto.getEmail().trim().length() > 0) {

			Usuario usuario = usuarioService.buscarPorEmail(dto.getEmail());

			if (usuario == null) {
				Map<String, String> responseObj = new HashMap<>();
				responseObj.put("error", "Usuário não encontrado.");
				return Response.status(Response.Status.UNAUTHORIZED).entity(responseObj).build();
			}

			if (!usuario.getAtivo()) {
				Map<String, String> responseObj = new HashMap<>();
				responseObj.put("error", "Usuário inativo.");
				return Response.status(Response.Status.UNAUTHORIZED).entity(responseObj).build();
			}

			if (usuario.getSenha().equals(dto.getSenha())) {
				Map<String, String> responseObj = new HashMap<>();
				responseObj.put("usuarioId", usuario.getId().toString());
				return Response.status(Response.Status.OK).entity(responseObj).build();
			}
		}
		Map<String, String> responseObj = new HashMap<>();
		responseObj.put("error", "Usuário ou senha inválidos.");
		return Response.status(Response.Status.UNAUTHORIZED).entity(responseObj).build();
	}

}
