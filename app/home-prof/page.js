"use client";

import { useRouter } from "next/navigation";
import "./home-prof.css";

export default function ProfessorPage() {
  const router = useRouter();

  const handleAviso = () => {
    router.push("/avisos");
  };
  const handleTurmas = () => {
    router.push("/turmas");
  };
  const handleTreinamentos = () => {
    router.push("/treinamentosLista");
  };

  return (
    <>
      {}

      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>

      <main id="centro_menu">
        <h1>TABUFÁCIL</h1>
        <h3>professor</h3> 
        <nav className="botoes" style={{marginTop: "-20px"}}>
          <div className="botao" onClick={handleTreinamentos}>
            Corrigir Treinamentos
          </div>
          <div className="botao" onClick={handleAviso}>
            Avisos
          </div>
          <div className="botao" onClick={handleTurmas}>
            Turmas
          </div>
        </nav>
      </main>

      <footer id="lower_bar"></footer>
    </>
  );
}