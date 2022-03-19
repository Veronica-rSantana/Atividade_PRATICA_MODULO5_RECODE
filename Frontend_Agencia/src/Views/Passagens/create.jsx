import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import CadastroService from "../../Services/CadastroService";
// import DestinoService from "../../Services/DestinoService";
import PassagensService from "../../Services/PassagensService";

export default function Create() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [dataIda, setDataIda] = useState("");
  const [dataVolta, setDataVolta] = useState("");
  const [valor, setValor] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
 

  // const getAllDestino = () => {
  //   DestinoService.getAllDestino()
  //     .then((response) => {
  //       setDestino(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getAllDestino();
  // }, []);

  // const getAllCadastro = () => {
  //   CadastroService.getAllCadastro()
  //     .then((response) => {
  //       setCadastro(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getAllCadastro();
  // }, []);

  const criarOuEditarCadastro = (e) => {
    e.preventDefault();

    const Passagem = { origem, destino, dataIda, dataVolta, valor };
    console.log(Passagem)
    if (id) {
      PassagensService.updatePassagens(id, Passagem).then((response) => {
        navigate("/Passagens");
      });
    } else {
      PassagensService.createPassagens(Passagem).then((response) => {
        navigate("/Passagens");
      });
    }
  };

  useEffect(() => {
    function getPassagensById() {
      if (id) {
        PassagensService.getPassagensById(id)
          .then((response) => {
            setOrigem(response.data.origem);
            setDestino(response.data.destino);
            setDataIda(response.data.dataIda);
            setDataVolta(response.data.dataVolta);
            setValor(response.data.valor);
          //   setCadastro({
          //     id_cliente: response.data.cadastro.id_cliente,
          //     nome: response.data.cadastro.nome,
          // });
          // setDestino({id_destino: response.data.destino.id_destino,
          // cidade_destino: response.data.destino.cidade_destino,});
           })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getPassagensById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="origem" className="form-label">
              Origem
            </label>
            <input
              type="text"
              id="origem"
              className="form-control"
              placeholder="origem"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <lDataIda htmlFor="destino" className="form-label">
            Destino
            </lDataIda>
            <input type="text" id="destino"className="form-control"placeholder="destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="DataIda" className="form-label">
              DataIda
            </label>
            <input
              type="text"
              id="DataIda"
              className="form-control"
              placeholder="DataIda"
              value={dataIda}
              onChange={(e) => setDataIda(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="DataVolta" className="form-label">
              DataVolta
            </label>
            <input
              type="text"
              id="DataVolta"
              className="form-control"
              placeholder="DataIda"
              value={dataVolta}
              onChange={(e) => setDataVolta(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="valor" className="form-label">
              Valor
            </label>
            <input
              type="text"
              id="valor"
              className="form-control"
              placeholder="valor"
              value={valor}
              onChange={(e) => setValor(Number.parseFloat(e.target.value))}
            />
          </div>
          
          

          

         

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarCadastro(e)}
          >
            Enviar
          </button>
          <Link
            to="/Passagens"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}