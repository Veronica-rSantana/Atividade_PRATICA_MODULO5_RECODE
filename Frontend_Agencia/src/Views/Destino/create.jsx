import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinoService from "../../Services/DestinoService.jsx";

export default function Create() {
  const [cidade_destino, setCidade_destino] = useState("");
  const [estado_destino, setEstado_destino] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarDestino = (e) => {
    e.preventDefault();

    const destino = { cidade_destino };

    if (id) {
      DestinoService.updateDestino(id, destino).then((response) => {
        navigate("/destinos-index");
      })
    } else {
      DestinoService.createDestino(destino).then((response) => {
        navigate("/destinos-index");
      })
    }
  }

  useEffect(() => {
    function getDestinoById() {
      if (id) {
        DestinoService.getDestinoById(id)
          .then((response) => {
            setCidade_destino(response.data.cidade_destino);
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
  },[id]);

    

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="cidade_destino" className="form-label">
              Cidade destino
            </label>
            <input
              type="text"
              id="cidade_destino"
              className="form-control"
              placeholder="cidade_destino"
              value={cidade_destino}
              onChange={(e) => setCidade_destino(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="estado_destino" className="form-label">
              Estado destino
            </label>
            <input
              type="text"
              id="estado_destino"
              className="form-control"
              placeholder="estado_destino"
              value={estado_destino}
              onChange={(e) => setEstado_destino(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarDestino(e)}
          >
            Enviar
          </button>
          <Link
            to="/destinos-index"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  )
}
