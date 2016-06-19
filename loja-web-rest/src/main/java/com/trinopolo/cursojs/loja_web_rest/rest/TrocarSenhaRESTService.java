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

import com.trinopolo.cursojs.loja_web_rest.dto.TrocarSenhaDto;
import com.trinopolo.cursojs.loja_web_rest.model.Usuario;
import com.trinopolo.cursojs.loja_web_rest.service.UsuarioService;

@Path("/trocar_senha")
@RequestScoped
public class TrocarSenhaRESTService {

	@Inject
	EntityManager em;

	@Inject
	UsuarioRESTService usuarioRestService;

	@Inject
	UsuarioService usuarioService;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response trocar(TrocarSenhaDto dto) {

		if (dto.getUsuarioId() == null) {
			Map<String, String> responseObj = new HashMap<>();
			responseObj.put("error", "Usuário não informado.");
			return Response.status(Response.Status.BAD_REQUEST).entity(responseObj).build();
		}

		if (dto.getAtual() == null || dto.getAtual().trim().length() == 0) {
			Map<String, String> responseObj = new HashMap<>();
			responseObj.put("error", "Senha atual não informada.");
			return Response.status(Response.Status.BAD_REQUEST).entity(responseObj).build();
		}

		if (dto.getNova() == null || dto.getNova().trim().length() == 0) {
			Map<String, String> responseObj = new HashMap<>();
			responseObj.put("error", "Nova senha não informada.");
			return Response.status(Response.Status.BAD_REQUEST).entity(responseObj).build();
		}

		if (dto.getConfirmacao() == null || dto.getConfirmacao().trim().length() == 0) {
			Map<String, String> responseObj = new HashMap<>();
			responseObj.put("error", "Confirmação da senha não informada.");
			return Response.status(Response.Status.BAD_REQUEST).entity(responseObj).build();
		}

		if (!dto.getConfirmacao().equals(dto.getNova())) {
			Map<String, String> responseObj = new HashMap<>();
			responseObj.put("error", "Confirmação da senha não confere com a nova senha.");
			return Response.status(Response.Status.BAD_REQUEST).entity(responseObj).build();
		}

		Usuario usuario = em.find(Usuario.class, dto.getUsuarioId());
		if (usuario == null) {
			Map<String, String> responseObj = new HashMap<>();
			responseObj.put("error", "Usuário não encontrado.");
			return Response.status(Response.Status.BAD_REQUEST).entity(responseObj).build();
		}

		if (!usuario.getSenha().equals(dto.getAtual())) {
			Map<String, String> responseObj = new HashMap<>();
			responseObj.put("error", "Senha atual incorreta.");
			return Response.status(Response.Status.BAD_REQUEST).entity(responseObj).build();
		}

		usuario.setSenha(dto.getNova());
		usuarioService.salvar(usuario);

		return Response.status(Response.Status.OK).build();

	}

}
