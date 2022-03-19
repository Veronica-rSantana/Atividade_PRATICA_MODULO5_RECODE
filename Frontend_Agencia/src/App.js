import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./Views/Home.jsx";
import Passagens from "./Views/Passagens/index";
import Pacotes from "./Views/Pacotes.jsx";
import "./Layout/Styles/Menu.css"
import Menu from "./Components/Menu.jsx";
import MenuBootstrap from "./Components/Menu_bootstrap.jsx";
import Footer from "./Components/Footer.jsx";

import "./Layout/Styles/Form.css";
import "./Layout/Styles/Footer.css";
import "./Layout/Styles/Fundo.css";
import "./Layout/Styles/cadback.css";
import "./Layout/Styles/Slide.css";
import Create from "./Views/Cadastro/create.jsx";
import Index from "./Views/Cadastro/index.jsx"
import CreatePassagem from "./Views/Passagens/create.jsx"

function App() {
  return(
    <>
      <BrowserRouter>
     
        <MenuBootstrap></MenuBootstrap>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Passagens" element={<Passagens/>} />
            <Route path="/Pacotes" element={<Pacotes/>} />
            
            <Route path="/cadastro-index" element={<Index/>}/>
            <Route path="/cadastro-create" element={<Create/>}/>
            <Route path="/passagem-create" element={<CreatePassagem/>}/>
            <Route path="/passagens-update/:id" element={<CreatePassagem/>}/>
            </Routes>
      </BrowserRouter>
<Footer />    
    </>
 ); 
}

export default App;