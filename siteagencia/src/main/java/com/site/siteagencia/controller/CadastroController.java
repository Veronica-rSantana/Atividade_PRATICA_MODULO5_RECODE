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

import com.site.siteagencia.entities.Cadastro;
import com.site.siteagencia.repositorys.CadastroRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/")
public class CadastroController {
	
	@Autowired
	private CadastroRepository cadastroRepository;
	
	//List
	@GetMapping("/cadastros")
	public ResponseEntity<List<Cadastro>> findAll(){
		List<Cadastro> cadastros =cadastroRepository.findAll();
		
		return ResponseEntity.ok().body(cadastros);
	}	
	@GetMapping("/cadastros/{id}")
	public ResponseEntity<Cadastro> findbyId(@PathVariable Long id){
		Cadastro cadastro = cadastroRepository.findById(id).get();
		
		return ResponseEntity.ok().body(cadastro);		
	}
	//Create
	@PostMapping("/cadastros")
    public Cadastro create(@RequestBody Cadastro cadastro) {
    	
        return cadastroRepository.save(cadastro);
    }
	//Update
    @PutMapping("/cadastros/{id}")
    public ResponseEntity<Cadastro> update(@PathVariable long id,@RequestBody Cadastro cadastroDetails) {
    	Cadastro updatecadastro = cadastroRepository.findById(id).get();

    	updatecadastro.setNome(cadastroDetails.getNome());
    	updatecadastro.setCpf(cadastroDetails.getCpf());
    	updatecadastro.setEmail(cadastroDetails.getEmail());
    	updatecadastro.setTelefone(cadastroDetails.getTelefone());
    	updatecadastro.setCidade(cadastroDetails.getCidade());
    	updatecadastro.setEstado(cadastroDetails.getEstado());

        cadastroRepository.save(updatecadastro);

        return ResponseEntity.ok(updatecadastro);
    }
    //Delete
    @DeleteMapping("/cadastros/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

    	Cadastro cadastro = cadastroRepository.findById(id).get();

    	cadastroRepository.delete(cadastro);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }


}
