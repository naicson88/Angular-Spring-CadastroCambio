package com.naicson.cambio.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naicson.cambio.model.Tabela;
import com.naicson.cambio.repositories.TabelaRepository;

@Service
public class TabelaServiceImpl implements TabelaDetailService {
	
	@Autowired
	
	private TabelaRepository tabelaRepository;
	
	@Override
	public List<Tabela> listar() {
		return tabelaRepository.findAll();
	}

	@Override
	public Tabela listarId(int id) {
		return tabelaRepository.findById(id);
	}

	@Override
	public Tabela add(Tabela tabela) {
		return tabelaRepository.save(tabela);
	}

	@Override
	public Tabela editar(Tabela tabela) {
		return tabelaRepository.save(tabela);
	}

	@Override
	public Tabela deletar(int id) {
		Tabela tabela = tabelaRepository.findById(id);
		if (tabela != null) {
			tabelaRepository.delete(tabela);
		}
		
		return tabela;
	}
	
	@Override
	public List<Tabela> findPorDia() {
		return tabelaRepository.findPorDia();
	}

}
