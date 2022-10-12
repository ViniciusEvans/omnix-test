import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch, useLocalStorage } from "usehooks-ts";
import "./style.scss";

export type Data = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};
export function Home() {
  const navigate = useNavigate();
  const [cepInput, setCepInput] = useState("");
  const [userAddress, setUserAddress] = useLocalStorage("userAddress", {});

  async function handleSubmit() {
    if (!cepInput || cepInput.length < 8 || !cepInput.match("[0-9]+")) {
      return;
    }
    const data = await searchCep();

    if (!data) {
      return;
    }
    console.log(data);
    setUserAddress(data);
    navigate("/offers");
  }
  async function searchCep() {
    const response = await fetch(`https://viacep.com.br/ws/${cepInput}/json/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
  return (
    <section className="home">
      <div className="start-message">
        <p className="first--message">Onde a internet é de qualidade</p>
        <p className="second--message">
          Bem vindo a Omnix, sua internet com ultravelocidade para navegar sem
          problemas de travamento!
        </p>
        <p className="thrid--message">
          Digite o número do seu cep abaixo e descubra as ofertas disponíveis
        </p>
      </div>
      <div className="form-zone">
        <input
          id="cep"
          value={cepInput}
          onChange={(e) => setCepInput(e.target.value)}
          type="text"
          placeholder="Digite os números aqui"
        />

        <button onClick={handleSubmit}>Buscar endereço</button>
      </div>
    </section>
  );
}
