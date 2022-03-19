import axios from "axios";

const CADASTRO_API_URL = "http://localhost:8080/cadastros"; 

class CadastroService {
  getAllCadastro() {
    return axios.get(CADASTRO_API_URL);
  }

  createCadastro(cadastro) {
    return axios.post(CADASTRO_API_URL, cadastro);
  }

  getById(CadastroId) {
    return axios.get(CADASTRO_API_URL + "/" + CadastroId);
  }

  updateCadastro(cadastroId, cadastro) {
    return axios.put(CADASTRO_API_URL + "/" + cadastroId, cadastro);
  }

  deleteCadastro(CadastroId) {
    return axios.delete(CADASTRO_API_URL + "/" + CadastroId);
  }
}

export default new CadastroService();