package com.site.siteagencia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.siteagencia.entities.Destino;

import com.site.siteagencia.repositorys.DestinoRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping(value="/destinos")
public class DestinoController {
	
	@Autowired
	private DestinoRepository destinoRepository;
	
	@GetMapping
	public ResponseEntity<List<Destino>> findAll(){
		List<Destino> destinos = destinoRepository.findAll();
		
		return ResponseEntity.ok().body(destinos);
	}
	
	@GetMapping(value="/{id}")
	public ResponseEntity<Destino> findbyId(@PathVariable Long id){
		
		Destino destino = destinoRepository.findById(id).get();
		
		return ResponseEntity.ok().body(destino);	
	}
	//Create
		@PostMapping
	    public Destino create(@RequestBody Destino destino) {
	    	
	        return destinoRepository.save(destino);
	    }
		//Update
	    @PutMapping("/destinos/{id}")
	    public ResponseEntity<Destino> update(@PathVariable long id,@RequestBody Destino destinoDetails) {
	    	Destino updatedestino = destinoRepository.findById(id).get();

	    	updatedestino.setCidade_destino(destinoDetails.getCidade_destino());
	    	updatedestino.setEstado_destino(destinoDetails.getEstado_destino());
	    	
	        destinoRepository.save(updatedestino);

	        return ResponseEntity.ok(updatedestino);
	    }
	    //Delete
	    @DeleteMapping("/destinos/{id}")
	    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

	    	Destino destino = destinoRepository.findById(id).get();

	    	destinoRepository.delete(destino);

	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	    }

}
