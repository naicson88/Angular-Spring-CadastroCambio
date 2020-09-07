package com.naicson.cambio.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Impostos {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	private String nomeImposto;
	private String bancoImposto;
	private double valorImposto;
}
