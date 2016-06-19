package com.trinopolo.cursojs.loja_web_rest.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Entity implementation class for Entity: Produto
 *
 */
@Entity

public class Produto implements Serializable {

	@Id
	private Integer id;
	private String categoria;
	private String nome;

	@Column(length = 2000)
	private String descricao;
	private Integer quantidadeEmEstoque;
	private Float preco;
	private String urlFoto;
	private static final long serialVersionUID = 1L;

	public Produto() {
		super();
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return this.descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Integer getQuantidadeEmEstoque() {
		return this.quantidadeEmEstoque;
	}

	public void setQuantidadeEmEstoque(Integer quantidadeEmEstoque) {
		this.quantidadeEmEstoque = quantidadeEmEstoque;
	}

	public Float getPreco() {
		return this.preco;
	}

	public void setPreco(Float preco) {
		this.preco = preco;
	}

	public String getUrlFoto() {
		return this.urlFoto;
	}

	public void setUrlFoto(String urlFoto) {
		this.urlFoto = urlFoto;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	@Override
	public String toString() {
		return "Produto [id=" + id + ", categoria=" + categoria + ", nome=" + nome + ", descricao=" + descricao + ", quantidadeEmEstoque="
				+ quantidadeEmEstoque + ", preco=" + preco + ", urlFoto=" + urlFoto + "]";
	}

}
