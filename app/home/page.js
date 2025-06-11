"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import "./home.css";

export default function MenuPage() {
  const router = useRouter();  // Inicializa o hook de navegação

  const handlePlay = () => {
    router.push("/ModoJogo");  
  };
  const handleAvisos = () => {
    router.push("/avisos");  
  };
  const handleTreinamentos = () => {
    router.push("/treinamentosLista");  
  };
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap"
          rel="stylesheet"
        />
        <title>Tabufácil | Menu</title>
      </Head>
      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>

      <div id="centro_menu">
        <h1>TABUFÁCIL</h1>
        <div className="botoes">
          <div className="botao" onClick={handlePlay}>Jogar</div>
          <div className="botao" onClick={handleTreinamentos}>Visualizar Treinamentos</div>
          <div className="botao" onClick={handleAvisos}>Avisos</div>
        </div>
      </div>

      <div id="lower_bar"></div>
    </>
  );
}