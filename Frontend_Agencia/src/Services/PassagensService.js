import axios from "axios";

const PASSAGENS_API_URL = "http://localhost:8080/passagens";

class PassagensService {
  getAllPassagens() {
    return axios.get(PASSAGENS_API_URL);
  }

  createPassagens(Passagem) {
    return axios.post(PASSAGENS_API_URL, Passagem);
  }

  getPassagensById(PassagemId) {
    return axios.get(PASSAGENS_API_URL + "/" + PassagemId);
  }

  updatePassagens(PassagemId, Passagens) {
    return axios.put(PASSAGENS_API_URL + "/" + PassagemId, Passagens);
  }

  deletePassagens(PassagemId) {
    return axios.delete(PASSAGENS_API_URL + "/" + PassagemId);
  }
}

export default new PassagensService();