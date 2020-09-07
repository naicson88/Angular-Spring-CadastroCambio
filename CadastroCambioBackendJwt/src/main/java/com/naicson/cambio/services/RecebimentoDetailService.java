package com.naicson.cambio.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.naicson.cambio.model.Recebimento;

@Service
public interface RecebimentoDetailService {
	
	List<Recebimento> listar();
	Recebimento listarId(int id);
	Recebimento add(Recebimento recebimento);
	Recebimento editar(Recebimento recebimento);
	Recebimento deletar(int id );
}
