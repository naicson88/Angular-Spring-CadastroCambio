package com.naicson.cambio.controllers;

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

import com.naicson.cambio.model.Recebimento;
import com.naicson.cambio.services.RecebimentoDetailService;

@RestController
@RequestMapping({"/cambio/recebimento"})
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class RecebimentoController {
	
	@Autowired
	RecebimentoDetailService recebimentoService;
	
	@GetMapping
	public List <Recebimento> listar(){
		return recebimentoService.listar();
	}
	
	@PostMapping
	public Recebimento adicionar (@RequestBody Recebimento recebimento) {
		return recebimentoService.add(recebimento);
	}
	
	@GetMapping(path = {"/{id}"})
	public Recebimento listarId(@PathVariable("id") int id) {
		return recebimentoService.listarId(id);
	}
	
	@PutMapping(path = {"/{id}"})
	public Recebimento editar(@RequestBody Recebimento recebimento, @PathVariable("id") int id ) {
		recebimento.setId(id);
		return recebimentoService.editar(recebimento);
	}
	
	@DeleteMapping(path = {"/{id}"})
	public Recebimento deletar(@PathVariable ("id") int id) {
		return recebimentoService.deletar(id);
	}
	
	
	
}
