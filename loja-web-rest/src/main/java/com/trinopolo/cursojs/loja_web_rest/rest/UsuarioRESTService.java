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

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.trinopolo.cursojs.loja_web_rest.model.Usuario;

@Path("/usuario")
@RequestScoped
public class UsuarioRESTService {

	@Inject
	EntityManager em;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Usuario> buscarTodos() {
		TypedQuery<Usuario> query = em.createQuery("SELECT e FROM Usuario AS e ORDER BY e.nome", Usuario.class);
		return query.getResultList();
	}

	@GET
	@Path("/{chave}")
	@Produces(MediaType.APPLICATION_JSON)
	public Usuario buscarPorEmail(@PathParam("chave") String chave) {
		Integer id = null;
		String email = null;
		try {
			id = Integer.parseInt(chave);
		} catch (NumberFormatException e) {
			email = chave;
		}
		if (id != null) {
			return em.find(Usuario.class, id);
		}
		if (email != null) {
			TypedQuery<Usuario> query = em.createQuery("SELECT e FROM Usuario AS e WHERE e.email = :email", Usuario.class);
			query.setParameter("email", email);
			try {
				return query.getSingleResult();
			} catch (NoResultException e) {
				return null;
			}
		}
		return null;
	}

}
