package com.naicson.cambio.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.naicson.cambio.model.Recebimento;
import com.naicson.cambio.model.Tabela;

@Repository
public interface RecebimentoRepository extends JpaRepository<Recebimento, Long> {
	
	List<Recebimento>findAll();
	Recebimento findById(int id);
	Recebimento save(Tabela recebimento);
	void delete(Recebimento recebimento);
	
}
