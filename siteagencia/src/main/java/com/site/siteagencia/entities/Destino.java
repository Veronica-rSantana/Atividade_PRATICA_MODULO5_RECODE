package com.site.siteagencia.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Destino implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_destino;
	private String Cidade_destino;
	private String Estado_destino;
	
	public Destino() {
		super();
	}

	public Destino(Long id_destino, String Cidade_destino, String Estado_destino ) {
		super();
		Id_destino = id_destino;
		this.Cidade_destino = Cidade_destino;
		this.Estado_destino = Estado_destino;
		
	}

		
		public Long getId_destino() {
			return Id_destino;
		}
	
		public void setId_destino(Long id_destino) {
			Id_destino = id_destino;
		}
	
		public String getCidade_destino() {
			return Cidade_destino;
		}
	
		public void setCidade_destino(String cidade_destino) {
			Cidade_destino = cidade_destino;
		}
	
		public String getEstado_destino() {
			return Estado_destino;
		}
	
		public void setEstado_destino(String estado_destino) {
			Estado_destino = estado_destino;
		}

	@Override
	public int hashCode() {
		return Objects.hash(Id_destino, Cidade_destino, Estado_destino);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destino other = (Destino) obj;
		return Objects.equals(Id_destino, other.Id_destino) && Objects.equals(Cidade_destino, other.Cidade_destino)
				&& Objects.equals(Estado_destino, other.Estado_destino);
	}
		
}
