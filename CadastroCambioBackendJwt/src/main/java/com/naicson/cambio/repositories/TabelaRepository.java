package com.naicson.cambio.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.naicson.cambio.model.Tabela;


@Repository
public interface TabelaRepository extends JpaRepository<Tabela, Long> {
	
	List<Tabela>findAll();
	Tabela findById(int id);
	Tabela save(Tabela tabela);
	void delete(Tabela tabela);
	
	@Query(value = "(select * from tabela where vencimento >= CURDATE() + 10)", nativeQuery = true)
	List<Tabela> findPorDia();
}
