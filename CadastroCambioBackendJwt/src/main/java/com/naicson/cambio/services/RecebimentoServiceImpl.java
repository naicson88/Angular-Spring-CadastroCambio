package com.naicson.cambio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naicson.cambio.model.Recebimento;
import com.naicson.cambio.repositories.RecebimentoRepository;

@Service
public class RecebimentoServiceImpl implements RecebimentoDetailService {
	
	@Autowired
	RecebimentoRepository recebimentoRepository;
	
	@Override
	public List<Recebimento> listar() {
		return recebimentoRepository.findAll();
	}

	@Override
	public Recebimento listarId(int id) {
		return recebimentoRepository.findById(id);
	}

	@Override
	public Recebimento add(Recebimento recebimento) {
		return recebimentoRepository.save(recebimento);
	}

	@Override
	public Recebimento editar(Recebimento recebimento) {
		return recebimentoRepository.save(recebimento);
	}

	@Override
	public Recebimento deletar(int id) {
		Recebimento recebimento = recebimentoRepository.findById(id);
		if ( recebimento != null ) {
			recebimentoRepository.delete(recebimento);
		}
		return recebimento;
	}
}
