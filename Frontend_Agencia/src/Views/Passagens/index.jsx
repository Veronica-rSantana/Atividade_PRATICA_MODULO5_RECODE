import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PassagensService from "../../Services/PassagensService";

export default function Index() {
  const [passagens, setPassagens] = useState([]);

  const getAllPassagens = () => {
    PassagensService.getAllPassagens()
      .then((response) => {
        setPassagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPassagens();
  }, []);

  const deletePassagens = (passagemId) => {
    PassagensService.deletePassagens(passagemId)
      .then((response) => {
        getAllPassagens();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro Passagens</h1>
      </header>
      <div className="container py-3">
        <Link to="/passagem-create" className="btn btn-primary mb-2">
          Criar Passagens
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Origem</th>
                <th>Destino</th>
                <th>Data Ida</th>
                <th>Data Volta</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {passagens.map((passagem) => (
                <tr key={passagem.id_passagem}>
                  <td>{passagem.id_passagem}</td>
                  <td>{passagem.origem}</td>
                  <td>{passagem.destino}</td>
                  <td>{passagem.dataIda}</td>
                  <td>{passagem.dataVolta}</td>
                  <td>{passagem.valor}</td>
                  <td>
                   
                  </td>
                  <td>{}</td>
                  <td className="d-flex">
                    <Link
                      to={`/passagens-update/${passagem.id_passagem}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletePassagens(passagem.id_passagem)}
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