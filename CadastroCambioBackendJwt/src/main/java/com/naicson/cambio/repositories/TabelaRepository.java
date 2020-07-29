package com.naicson.cambio.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.naicson.cambio.model.Tabela;


@Repository
public interface TabelaRepository extends JpaRepository<Tabela, Long> {
	List<Tabela>findAll();
	Tabela findById(int id);
	Tabela save(Tabela tabela);
	void delete(Tabela tabela);
}
