package com.site.siteagencia.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Passagens implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_passagem;
	private String Origem;
	private String Destino;
	private String DataIda;
	private String DataVolta;
	private Float Valor;
	/*
	public passagens() {
		super();
	}
	
	public passagens( String Origem, String Destino, String DataIda, String DataVolta, Float Valor) {
		super();
		
		this.Origem = Origem;
		this.Destino = Destino;
		this.Destino = DataIda;
		this.Destino = DataVolta;
		this.Valor = Valor;	
	}
*/
	public Long getId_passagem() {
		return Id_passagem;
	}

	public void setId_passagem(Long id_passagem) {
		Id_passagem = id_passagem;
	}

	public String getOrigem() {
		return Origem;
	}

	public void setOrigem(String origem) {
		Origem = origem;
	}

	public String getDestino() {
		return Destino;
	}

	public void setDestino(String destino) {
		Destino = destino;
	}

	public String getDataIda() {
		return DataIda;
	}

	public void setDataIda(String dataIda) {
		DataIda = dataIda;
	}

	public String getDataVolta() {
		return DataVolta;
	}

	public void setDataVolta(String dataVolta) {
		DataVolta = dataVolta;
	}
	
	public Float getValor() {
		return Valor;
	}

	public void setValor(Float valor) {
		Valor = valor;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Id_passagem, Origem, Destino, DataIda, DataVolta, Valor);
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Passagens other = (Passagens) obj;
		return Objects.equals(Id_passagem, other.Id_passagem) && Objects.equals(Origem, other.Origem)
				&& Objects.equals(Destino, other.Destino) && Objects.equals(DataIda, other.DataIda) 
				&& Objects.equals(DataVolta, other.DataVolta) && Objects.equals(Valor, other.Valor);
	}
	
}