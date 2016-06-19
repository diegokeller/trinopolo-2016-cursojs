package com.trinopolo.cursojs.loja_web_rest.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AutenticacaoDto implements Serializable {

	private static final long serialVersionUID = 1L;

	@XmlElement(name = "email")
	public String email;

	@XmlElement(name = "senha")
	public String senha;

	public AutenticacaoDto() {
	}

	public AutenticacaoDto(String email, String senha) {
		super();
		this.email = email;
		this.senha = senha;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

}
