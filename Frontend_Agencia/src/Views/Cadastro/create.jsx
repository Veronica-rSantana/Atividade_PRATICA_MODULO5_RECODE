import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CadastroService from "../../Services/CadastroService.js";

export default function Create() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarCadastro = (e) => {
    e.preventDefault();

    const cadastro = { nome, cpf, email, telefone, cidade, estado};
    if (id) {
        CadastroService.updateCadastro(id, cadastro)
        .then((response) => {
            navigate("/cadastro-index")
        })

    } else {
        CadastroService.createCadastro(cadastro)
        .then((response) => {
            navigate("/cadastro-index")
        })
    }
  }

  useEffect(() => {
      function getCadastroById() {
        if (id) {
            CadastroService.getCadastroById(id)
            .then((response) => {
                setNome(response.data.nome);
                setCpf(response.data.cpf);
                setEmail(response.data.email);
                setTelefone(response.data.telefone);
                setCidade(response.data.cidade);
                setEstado(response.data.estado);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getCadastroById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cpf" className="form-label">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              className="form-control"
              placeholder="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefone" className="form-label">
              Telefone
            </label>
            <input
              type="text"
              id="telefone"
              className="form-control"
              placeholder="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cidade" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              className="form-control"
              placeholder="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>  

          <div className="mb-3">
            <label htmlFor="estado" className="form-label">
              Estado
            </label>
            <input
              type="text"
              id="estado"
              className="form-control"
              placeholder="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>  

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarCadastro(e)}>
            Enviar
          </button>
          <Link
            to="/cadastro-index"
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