import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinoService from "../../services/DestinoService";

export default function Index() {
    const [destino, setEDestino] = useState([]);

    const getAllDestino = ()=>{
        DestinoService.getAllEDestino()
        .then((response) => {
            setEDestino(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getAllDestino();
    }, []);

    const  deleteDestino = (destinoId) => {
        DestinoService.deleteDestino(destinoId)
        .then((response) => {
            getAllEDestino();
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
            <h1 className="container">Cadastro Destino</h1>
        </header>
        <div className="container py-3">
            <Link to="/destinos-Create" className="btn btn-primary mb-2">
            Criar Destino
            </Link>
            <div className="table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Cidade_destino</th>
                    <th>Estado_destino</th>
                </tr>
                </thead>
                <tbody>
                {destino.map((destino) => (
                    <tr key={destino.id}>
                    <td>{destino.id}</td>
                    <td>{destino.Cidade_destino}</td>
                    <td>{destino.Estado_destino}</td>
                    <td className="d-flex">
                        <Link
                        to={`/destino-Update/${destino.id}`}
                        className="btn btn-info"
                        >
                        Editar
                        </Link>
                        <button
                        className="btn btn-danger"
                        onClick={() => deleteDestino(destino.id)}
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
