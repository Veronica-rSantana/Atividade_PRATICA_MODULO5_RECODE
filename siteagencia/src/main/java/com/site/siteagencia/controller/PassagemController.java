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

import com.site.siteagencia.entities.Passagens;
import com.site.siteagencia.repositorys.PassagemRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/")
public class PassagemController {
	
	@Autowired
	private PassagemRepository passagemRepository;
	
	@GetMapping("/passagens")
	public ResponseEntity<List<Passagens>> findAll(){
		List<Passagens> passagem =passagemRepository.findAll();
		
		return ResponseEntity.ok().body(passagem);
	}
	
	@GetMapping("/passagens/{id}")
	public ResponseEntity<Passagens> findbyId(@PathVariable Long id){
		
		Passagens passagem = passagemRepository.findById(id).get();
		
		return ResponseEntity.ok().body(passagem);
		
	}
	//Create
		@PostMapping("/passagens")
	    public Passagens create(@RequestBody Passagens passagem) {
	    	
	        return passagemRepository.save(passagem);
	    }
		//Update
	    @PutMapping("/passagens/{id}")
	    public ResponseEntity<Passagens> update(@PathVariable long id,@RequestBody Passagens passagemDetails) {
	    	Passagens updatepassagem = passagemRepository.findById(id).get();
	    	
	    	updatepassagem.setOrigem(passagemDetails.getOrigem());
	    	updatepassagem.setDestino(passagemDetails.getDestino());
	    	updatepassagem.setDataIda(passagemDetails.getDataIda());
	    	updatepassagem.setDataVolta(passagemDetails.getDataVolta());
	    	updatepassagem.setValor(passagemDetails.getValor());
	    	

	        passagemRepository.save(updatepassagem);

	        return ResponseEntity.ok(updatepassagem);
	    }
	    //Delete
	    @DeleteMapping("/passagens/{id}")
	    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

	    	Passagens passagem = passagemRepository.findById(id).get();
	    	
	    	passagemRepository.delete(passagem);

	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	    }
	    
}