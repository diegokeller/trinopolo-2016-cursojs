package com.trinopolo.cursojs.loja_web_rest.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class TrocarSenhaDto implements Serializable {

	private static final long serialVersionUID = 1L;

	@XmlElement(name = "usuarioId")
	private Integer usuarioId;

	@XmlElement(name = "atual")
	private String atual;

	@XmlElement(name = "nova")
	private String nova;

	@XmlElement(name = "confirmacao")
	private String confirmacao;

	public TrocarSenhaDto(Integer id, String atual, String nova, String confirmacao) {
		super();
		this.usuarioId = id;
		this.atual = atual;
		this.nova = nova;
		this.confirmacao = confirmacao;
	}

	public TrocarSenhaDto() {
		super();
	}

	public Integer getUsuarioId() {
		return usuarioId;
	}

	public void setUsuarioId(Integer usuarioId) {
		this.usuarioId = usuarioId;
	}

	public String getAtual() {
		return atual;
	}

	public void setAtual(String atual) {
		this.atual = atual;
	}

	public String getNova() {
		return nova;
	}

	public void setNova(String nova) {
		this.nova = nova;
	}

	public String getConfirmacao() {
		return confirmacao;
	}

	public void setConfirmacao(String confirmacao) {
		this.confirmacao = confirmacao;
	}

}