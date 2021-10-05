import React, {useState} from "react";
import styled from 'styled-components'


const Container = styled.div`
  max-width: 100%;
  width: 50rem;
  margin: 0 auto;
  padding: 0 50%;
  height: 100%;

  @media screen and (max-width: 568px) {
   width: 30rem;
  }

`;


const CorpoCalculadora = styled.div`
  width: 30%;
  height: 30rem;
  border: 1px solid #ccc;
  margin: 40px 0px;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: ease-in .3s;

  &:hover {
    box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.6);
  }

  @media screen and (max-width: 568px) {
    width: 100%;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    padding-top: 50px;
    margin-top: 20px;
    position: absolute;
    top: 55%;

    &:hover {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    padding-top: 50px;
    margin-top: 20px;

    &:hover {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 1024px) {
    top: 60%;
    border: none;

    &:hover {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 1365.9px) {
    width: 80%;
    border: none;
    padding-top: 50px;
    margin-top: 20px;
    height: 50rem;
  }
`;

const Titulo = styled.h2`
  text-align: center;
  margin: 15px 0px;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    margin-top: 40px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2.3rem;
  }

  @media screen and (max-width: 1365.9px) {
    font-size: 2.7rem;
  }

`;

const P = styled.p`
  text-align: center;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 1365.9px) {
    font-size: 2rem;
  }
`;

const VisorCalculadora = styled.input`
  width: 35%;
  margin: 10px 32.5%;
  height: 2.2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1.1rem;

  @media screen and (max-width: 768px) {
    width: 40%;
    height: 3rem;
    margin: 10px 30%;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    height: 3.5rem;
    font-size: 1.7rem;
  }

`;

function App() {

  const [ subTotal, setSubTotal ] = useState('');
  const [ gorjeta, setGorjeta ] = useState(0);

  const ContaSubTotal = (event) => {
    setSubTotal(event.target.value);
  }

  const TotalGorjeta = (event) => {
      setGorjeta(event.target.value);
  }

  function TotalConta(valor1, valor2) {
      return parseInt(valor1) + valor2;
  }

  const ValorTotalGorjeta = (gorjeta * (subTotal /100));


  return (
    <>
    <Container>
      <CorpoCalculadora>
        <Titulo>Calculadora de Gorjetas</Titulo>
        <P>Quanto deu a conta?</P>
        <VisorCalculadora onChange={ContaSubTotal} placeholder="Digite o valor da conta"></VisorCalculadora>
        <P>Qual a porcentagem da gorjeta?</P>
        <VisorCalculadora value={gorjeta} onChange={TotalGorjeta} placeholder="Digite a porcentagem"></VisorCalculadora>
        <P>Sub-total: R$ {subTotal}</P>
        <P>Gorjeta: {gorjeta} %</P>
        <P>Total: R$ {TotalConta(subTotal,ValorTotalGorjeta)}</P>
      </CorpoCalculadora>
    </Container>

    </>  
  );
}

export default App;
