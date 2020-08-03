package com.naicson.cambio.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;


@Entity
@Table(	name = "tabela")
public class Tabela {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private Date vencimento;
	@Size(max = 50)
	private String fornecedor;
	@Size(max = 50)
	private String invoice;
	@Size(max = 20)
	private String tipo;
	@Size(max = 50)
	private String numDI;
	
	private Double valorInvoice;
	
	private Double valorPago;
	
	private Double cotacao;
	
	private Double valorReal;
	
	private Date dtFechamento;
	@Size(max = 50)
	private String banco;
	@Size(max = 50)
	private String numContrato;
	@Size(max = 50)
	private String modal;
	@Size(max = 50)
	private String conhecimento;
	

	public Tabela () {}
	
	public Tabela(int id, @Size(max = 20) Date vencimento, @Size(max = 50) String fornecedor,
			@Size(max = 50) String invoice, @Size(max = 20) String tipo, @Size(max = 50) String numDI,
			@Size(max = 20) Double valorInvoice, @Size(max = 20) Double valorPago, @Size(max = 20) Double cotacao,
			@Size(max = 20) Double valorReal, @Size(max = 20) Date dtFechamento, @Size(max = 50) String banco,
			@Size(max = 50) String numContrato, @Size(max = 50) String modal, @Size(max = 50) String conhecimento) {
		super();
		this.id = id;
		this.vencimento = vencimento;
		this.fornecedor = fornecedor;
		this.invoice = invoice;
		this.tipo = tipo;
		this.numDI = numDI;
		this.valorInvoice = valorInvoice;
		this.valorPago = valorPago;
		this.cotacao = cotacao;
		this.valorReal = valorReal;
		this.dtFechamento = dtFechamento;
		this.banco = banco;
		this.numContrato = numContrato;
		this.modal = modal;
		this.conhecimento = conhecimento;
	}


	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Date getDtFechamento() {
		return dtFechamento;
	}

	public void setDtFechamento(Date dtFechamento) {
		this.dtFechamento = dtFechamento;
	}

	public String getModal() {
		return modal;
	}

	public void setModal(String modal) {
		this.modal = modal;
	}

	public int getId() {
		return id;
	}

	public void setId(int id2) {
		id = id2;
	}

	public Date getVencimento() {
		return vencimento;
	}

	public void setVencimento(Date vencimento) {
		this.vencimento = vencimento;
	}

	public String getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(String fornecedor) {
		this.fornecedor = fornecedor;
	}

	public String getInvoice() {
		return invoice;
	}

	public void setInvoice(String invoice) {
		this.invoice = invoice;
	}

	public Double getValorInvoice() {
		return valorInvoice;
	}

	public void setValorInvoice(Double valorInvoice) {
		this.valorInvoice = valorInvoice;
	}

	public Double getValorPago() {
		return valorPago;
	}

	public void setValorPago(Double valorPago) {
		this.valorPago = valorPago;
	}

	public Double getCotacao() {
		return cotacao;
	}

	public void setCotacao(Double cotacao) {
		this.cotacao = cotacao;
	}

	public String getBanco() {
		return banco;
	}

	public void setBanco(String banco) {
		this.banco = banco;
	}

	public Double getValorReal() {
		return valorReal;
	}

	public void setValorReal(Double valorReal) {
		this.valorReal = valorReal;
	}

	public @Size(max = 50) String getNumContrato() {
		return numContrato;
	}

	public void setNumContrato(@Size(max = 50) String numContrato) {
		this.numContrato = numContrato;
	}

	public String getNumDI() {
		return numDI;
	}

	public void setNumDI(String numDI) {
		this.numDI = numDI;
	}

	public String getConhecimento() {
		return conhecimento;
	}

	public void setConhecimento(String conhecimento) {
		this.conhecimento = conhecimento;
	}

	@Override
	public String toString() {
		return "Tabela [id=" + id + ", vencimento=" + vencimento + ", fornecedor=" + fornecedor + ", invoice=" + invoice
				+ ", tipo=" + tipo + ", numDI=" + numDI + ", valorInvoice=" + valorInvoice + ", valorPago=" + valorPago
				+ ", cotacao=" + cotacao + ", valorReal=" + valorReal + ", dtFechamento=" + dtFechamento + ", banco="
				+ banco + ", numContrato=" + numContrato + ", modal=" + modal + ", conhecimento=" + conhecimento + "]";
	}

	
	
	
}
