'use client';

import { useRouter } from 'next/navigation';
import './ModoJogo.css';

export default function EscolherTabuadaPage() {
  const router = useRouter();

  const tabuadaList = [
    "Tabuada do 1", "Tabuada do 2", "Tabuada do 3", "Tabuada do 4", "Tabuada do 5",
    "Tabuada do 6", "Tabuada do 7", "Tabuada do 8", "Tabuada do 9", "Aleatório"
  ];

  const handleSelecionar = (tabuada) => {
    const numero = tabuada === "Aleatório" ? "aleatorio" : tabuada.replace("Tabuada do ", "");
    router.push(`/TelaJogo?tabuada=${numero}`);
  };

  return (
    <>

      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>

      <div className="close" onClick={() => router.back()}>&lt;</div>

      <div id="centro_menu" style={{ marginTop: 0 }}>
        <h2>Selecione sua modalidade de jogo</h2>
        <div className="botoess">
          {tabuadaList.map((item, index) => (
            <div
              key={index}
              className="botaoo"
              onClick={() => handleSelecionar(item)}
              style={{ cursor: 'pointer' }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

    </>
  );
}