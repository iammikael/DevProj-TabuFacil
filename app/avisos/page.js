"use client";

import Head from "next/head";
import "./aviso.css";

export default function AvisosPage() {
  return (
    <>
      <Head>
        <title>Tabufácil | Avisos</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>

      {/* Botão Voltar (você pode fazer isso interativo com useRouter) */}
      <div className="close">
        &lt;
      </div>

      <main id="centro_avisos" style={{ marginTop: 0 }}>
        <h2>Mural de Avisos</h2>

        <div className="box_avisos">
          <h3>Próximo teste a ser realizado: 30/05/2025</h3>
          <p>
            Olá alunos! Como combinado em sala de aula, nosso próximo treinamento será realizado
            dia 30 de Maio de 2025. Sigam a orientação da Silvana, nossa assistente de sala, para
            que vocês possam entrar no horário e não perderem esse treinamento.
          </p>
        </div>

        <div className="box_avisos">
          <h3>Treinamento de tabuada aleatória</h3>
          <p>
            Foi adicionado na nova versão do jogo a opção de treinarmos multiplicação de números
            aleatórios. Dêem uma conferida ao clicar em "JOGAR" no menu inicial.
          </p>
        </div>

        <div className="box_avisos">
          <h3>Para próxima semana: Tabuada do 7</h3>
          <p>
            Estudem e revisem a tabuada do 7. Semana que vem vamos realizar os testes.
          </p>
        </div>
      </main>
    </>
  );
}