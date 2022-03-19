package com.site.siteagencia.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.siteagencia.entities.Cadastro;

@Repository
public interface CadastroRepository extends JpaRepository<Cadastro, Long> {

}
