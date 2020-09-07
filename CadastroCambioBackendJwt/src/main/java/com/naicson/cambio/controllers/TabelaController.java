package com.naicson.cambio.controllers;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.naicson.cambio.model.Tabela;
import com.naicson.cambio.services.TabelaDetailService;

@RestController
@RequestMapping({"/cambio/tabela"})
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class TabelaController {
	
	@Autowired
	TabelaDetailService tabelaService;
	
	@GetMapping
	public List<Tabela> listar(){
		return tabelaService.listar();
	}
	
	@PostMapping
	public Tabela adicionar(@RequestBody Tabela tabela) {
		return tabelaService.add(tabela);
	}
	
	@GetMapping(path = {"/{id}"})
	public Tabela listarId(@PathVariable("id") int id) {
		return tabelaService.listarId(id);
	}
	
	@PutMapping(path = {"/{id}"})
	public Tabela editar(@RequestBody Tabela tabela, @PathVariable("id") int id) {
		tabela.setId(id);
		return tabelaService.editar(tabela);
	}
	
	@DeleteMapping(path = ("/{id}"))
	public Tabela deletar(@PathVariable("id") int id) {
		return tabelaService.deletar(id);
	}
	
	@GetMapping("/pordia")
	public List<Tabela> findPorDia() {
	
			return tabelaService.findPorDia();
		
	}
	
	@GetMapping("/ultimosFechados")
	public List<Tabela> ultimosFechados(){
		return tabelaService.ultimosFechados();
	}
}
