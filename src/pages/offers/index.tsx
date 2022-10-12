import { useNavigate } from "react-router-dom";
import { useReadLocalStorage } from "usehooks-ts";
import { Data } from "../home";
import WifiIcon from "../../assets/wifi.svg";
import Promocao from "../../assets/promocao.webp";
import "./style.scss";

export function Offers() {
  const userAddress = useReadLocalStorage("userAddress") as Data;
  const navigate = useNavigate();
  return (
    <div className="offers">
      <div className="address">
        <p>Seu endereço:</p>
        <span>
          {`${userAddress.uf} 
            ${userAddress.localidade},
            ${userAddress.bairro},
            ${userAddress.logradouro}`}
        </span>
      </div>
      <div className="offer-cards">
        <div className="card card-one">
          <img src={WifiIcon} alt="wifi icon" />
          <h1>100 Mega</h1>
          <p>Com Wifi grátis</p> <p className="money">R$ 100,00/mês</p>
          <button>Assine já</button>
        </div>
        <div className="card card-two">
          <img src={Promocao} alt="promoção imagem" />
          <img src={WifiIcon} alt="wifi icon" />
          <h1>200 Mega</h1>
          <p>Com Wifi grátis</p> <p className="money">R$ 150,00/mês</p>
          <button>Assine já</button>
        </div>
        <div className="card card-three">
          <img src={WifiIcon} alt="wifi icon" />
          <h1>300 Mega</h1>
          <p>Com Wifi grátis</p> <p className="money">R$ 200,00/mês</p>
          <button>Assine já</button>
        </div>
      </div>
      <div className="back-home">
        <button onClick={() => navigate("/")}>Ops, errei meu cep!</button>
      </div>
    </div>
  );
}
