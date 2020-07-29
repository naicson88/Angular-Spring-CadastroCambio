package com.naicson.cambio.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.naicson.cambio.model.Tabela;

@Service
public interface TabelaDetailService {
	List<Tabela> listar();
	Tabela listarId(int id);
	Tabela add(Tabela pessoa);
	Tabela editar(Tabela pessoa);
	Tabela deletar(int id );
}
