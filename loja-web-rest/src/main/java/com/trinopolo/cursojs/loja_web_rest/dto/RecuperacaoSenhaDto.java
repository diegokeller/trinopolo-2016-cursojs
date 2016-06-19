package com.trinopolo.cursojs.loja_web_rest.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RecuperacaoSenhaDto implements Serializable {

	private static final long serialVersionUID = 1L;

	@XmlElement(name = "email")
	private String email;

	public RecuperacaoSenhaDto(String email) {
		super();
		this.email = email;
	}

	public RecuperacaoSenhaDto() {
		super();
	}

	@Override
	public String toString() {
		return "RecuperacaoSenhaDto [email=" + email + "]";
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}