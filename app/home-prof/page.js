"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
import "./home-prof.css"; // Certifique-se que o caminho esteja correto

export default function ProfessorPage() {
  const router = useRouter();

  const handleAviso = () => {
    router.push("/avisos");
  };
  const handleTurmas = () => {
    router.push("/turmas");
  };

  return (
    <>
      <Head>
        <title>Tabufácil | Professor</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>

      <main id="centro_menu">
        <h1>TABUFÁCIL</h1>
        <h2>Professor</h2>
        <nav className="botoes">
          <button className="botao">Corrigir Treinamentos</button>
          <button className="botao" onClick={handleAviso}>Avisos</button>
          <button className="botao" onClick={handleTurmas}>Turmas</button>
        </nav>
      </main>

      <footer id="lower_bar"></footer>
    </>
  );
}