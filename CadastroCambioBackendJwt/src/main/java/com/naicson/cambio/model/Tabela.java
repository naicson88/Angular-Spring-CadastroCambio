package com.naicson.cambio.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;


@Entity
@Table(	name = "tabela")
public class Tabela {
	
	@Id
	private int id;
	@Size(max = 20)
	private Date vencimento;
	@Size(max = 50)
	private String fornecedor;
	@Size(max = 50)
	private String invoice;
	@Size(max = 20)
	private Double valorInvoice;
	@Size(max = 20)
	private Double valorPago;
	@Size(max = 20)
	private Double cotacao;
	@Size(max = 50)
	private String banco;
	@Size(max = 20)
	private Double valorReal;
	@Size(max = 50)
	private Integer numContrato;
	@Size(max = 50)
	private String numDI;
	@Size(max = 50)
	private String conhecimento;
	
	public Tabela () {}

	public Tabela(int id, Date vencimento, String fornecedor, String invoice, Double valorInvoice, Double valorPago,
			Double cotacao, String banco, Double valorReal, Integer numContrato, String numDI, String conhecimento) {
		super();
		id = id;
		this.vencimento = vencimento;
		this.fornecedor = fornecedor;
		this.invoice = invoice;
		this.valorInvoice = valorInvoice;
		this.valorPago = valorPago;
		this.cotacao = cotacao;
		this.banco = banco;
		this.valorReal = valorReal;
		this.numContrato = numContrato;
		this.numDI = numDI;
		this.conhecimento = conhecimento;
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

	public Integer getNumContrato() {
		return numContrato;
	}

	public void setNumContrato(Integer numContrato) {
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
		return "Tabela [Id=" + id + ", vencimento=" + vencimento + ", fornecedor=" + fornecedor + ", invoice=" + invoice
				+ ", valorInvoice=" + valorInvoice + ", valorPago=" + valorPago + ", cotacao=" + cotacao + ", banco="
				+ banco + ", valorReal=" + valorReal + ", numContrato=" + numContrato + ", numDI=" + numDI
				+ ", conhecimento=" + conhecimento + "]";
	}
	
	
}
