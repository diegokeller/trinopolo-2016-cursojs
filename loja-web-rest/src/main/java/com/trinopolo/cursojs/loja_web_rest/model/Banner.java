package com.trinopolo.cursojs.loja_web_rest.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Entity implementation class for Entity: Banner
 *
 */
@Entity

public class Banner implements Serializable {

	@Id
	private Integer id;
	private String url;
	private static final long serialVersionUID = 1L;

	public Banner() {
		super();
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Banner(Integer id, String url) {
		super();
		this.id = id;
		this.url = url;
	}

	@Override
	public String toString() {
		return "Banner [id=" + id + ", url=" + url + "]";
	}

}
