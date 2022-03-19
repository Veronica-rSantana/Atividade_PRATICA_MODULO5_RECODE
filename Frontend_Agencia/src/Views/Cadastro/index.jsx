import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CadastroService from "../../Services/CadastroService.js";



export default function Index() {
  const [cadastros, setCadastros] = useState([]);

  const getAllCadastro = () => {
    CadastroService.getAllCadastro()
      .then((response) => {
        setCadastros(response.data);
      }).catch((error) => {
        console.log(error);      
      });
    };

  useEffect(() => {
    getAllCadastro();
  }, []);

  const deleteCadastro = (cadastroId) => {
    CadastroService.deleteCadastro(cadastroId)
      .then((response) => {
        getAllCadastro();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (

    <>
      <header className="header">
        
        <h1 className="container">Cadastro </h1>
      </header>
      <div className="container p-5 bg-image">
        <Link to="/cadastro-Create" className="btn btn-primary mb-2">
          Criar Cadastro
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Cidade</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {cadastros.map((cadastro) => (
                <tr key={cadastro.id_cliente}>
                  <td>{cadastro.id_cliente}</td>
                  <td>{cadastro.nome}</td>
                  <td>{cadastro.cpf}</td>
                  <td>{cadastro.email}</td>
                  <td>{cadastro.telefone}</td>
                  <td>{cadastro.cidade}</td>
                  <td>{cadastro.estado}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Cadastro-Update/${cadastro.id_cliente}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCadastro(cadastro.id_cliente)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>

  );
}
