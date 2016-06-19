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
import javax.mail.MessagingException;
import javax.persistence.EntityManager;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.trinopolo.cursojs.loja_web_rest.dto.RecuperacaoSenhaDto;
import com.trinopolo.cursojs.loja_web_rest.model.Usuario;
import com.trinopolo.cursojs.loja_web_rest.service.UsuarioService;

@Path("/recuperar_senha")
@RequestScoped
public class RecuperarSenhaRESTService {

	@Inject
	EntityManager em;

	@Inject
	UsuarioRESTService usuarioRestService;

	@Inject
	UsuarioService usuarioService;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response gerarNovaSenha(RecuperacaoSenhaDto dto) {

		if (dto.getEmail() == null || dto.getEmail().trim().length() == 0) {
			Map<String, String> responseObj = new HashMap<>();
			responseObj.put("error", "E-mail inválido.");
			return Response.status(Response.Status.UNAUTHORIZED).entity(responseObj).build();
		}

		Usuario usuario = usuarioRestService.buscarPorEmail(dto.getEmail());
		if (usuario == null) {
			Map<String, String> responseObj = new HashMap<>();
			responseObj.put("error", "E-mail não cadastrado.");
			return Response.status(Response.Status.UNAUTHORIZED).entity(responseObj).build();
		}

		usuario.setSenha(Integer.toString((int) (Math.random() * 10000)));
		usuarioService.salvar(usuario);

		try {
			com.trinopolo.cursojs.loja_web_rest.util.EnvioEmail.enviarEmail(usuario.getEmail(), "Recuperação de Senha",
					"Sua nova senha de acesso é: " + usuario.getSenha());
			return Response.status(Response.Status.OK).build();
		} catch (MessagingException e) {
			e.printStackTrace();
			Map<String, String> responseObj = new HashMap<>();
			responseObj.put("error", "Erro ao enviar email com a nova senha: " + e.getMessage());
			return Response.status(Response.Status.UNAUTHORIZED).entity(responseObj).build();
		}

	}

}
