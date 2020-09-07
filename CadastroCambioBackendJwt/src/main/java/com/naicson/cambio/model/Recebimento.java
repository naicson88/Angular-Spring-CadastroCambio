package com.naicson.cambio.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(	name = "recebimento")
public class Recebimento {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int id;
		private String pagador;
		private Double vlrDolar;
		private Double cotacao;
		private Double vlrReal;
		private String banco;
		private String observacao;
		
		public Recebimento() {
			
		}

		public Recebimento(int id, String pagador, Double vlrDolar, Double cotacao, Double vlrReal, String banco,
				String observacao) {
			super();
			this.id = id;
			this.pagador = pagador;
			this.vlrDolar = vlrDolar;
			this.cotacao = cotacao;
			this.vlrReal = vlrReal;
			this.banco = banco;
			this.observacao = observacao;
		}

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getPagador() {
			return pagador;
		}

		public void setPagador(String pagador) {
			this.pagador = pagador;
		}

		public Double getVlrDolar() {
			return vlrDolar;
		}

		public void setVlrDolar(Double vlrDolar) {
			this.vlrDolar = vlrDolar;
		}

		public Double getCotacao() {
			return cotacao;
		}

		public void setCotacao(Double cotacao) {
			this.cotacao = cotacao;
		}

		public Double getVlrReal() {
			return vlrReal;
		}

		public void setVlrReal(Double vlrReal) {
			this.vlrReal = vlrReal;
		}

		public String getObservacao() {
			return observacao;
		}

		public void setObservacao(String observacao) {
			this.observacao = observacao;
		}

		@Override
		public String toString() {
			return "Recebimento [id=" + id + ", pagador=" + pagador + ", vlrDolar=" + vlrDolar + ", cotacao=" + cotacao
					+ ", vlrReal=" + vlrReal + ", observacao=" + observacao + "]";
		}

		public String getBanco() {
			return banco;
		}

		public void setBanco(String banco) {
			this.banco = banco;
		}
		
		
}
