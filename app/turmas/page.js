"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from 'next/head';
import './turma.css'

export default function TurmasPage() {
  const [turmas, setTurmas] = useState([]);
  const [novaTurma, setNovaTurma] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    buscarTurmas();
  }, []);

const buscarTurmas = async () => {
  // 1. Inicia o processo: ativa o loading e limpa erros antigos.
  setIsLoading(true);
  setError(null);

  try {
    // 2. Faz a chamada à API, AGORA INCLUINDO AS CREDENCIAIS
    const response = await fetch("/api/turmas", {
      method: 'GET', // É uma boa prática ser explícito
      credentials: 'include', // <-- A SOLUÇÃO! Envia o cookie de sessão.
    });

    // 3. Verifica se a requisição falhou (ex: erro 401, 404, 500)
    if (!response.ok) {
      // Tenta extrair uma mensagem de erro específica do backend
      const errorData = await response.json();
      throw new Error(errorData.mensagem || `Erro: ${response.status}`);
    }

    // 4. Se a requisição foi um sucesso, extrai os dados e atualiza o estado
    const data = await response.json();
    setTurmas(data);

  } catch (error) {
    // Se qualquer passo do `try` falhar, o erro é capturado aqui
    console.error("Erro ao buscar turmas:", error);
    setError(error.message); // Define a mensagem de erro para a UI
    setTurmas([]); // Limpa as turmas para não mostrar dados antigos

  } finally {
    // Este bloco é executado sempre, seja em caso de sucesso ou falha
    setIsLoading(false); // Garante que o loading sempre termine
  }
};

  const handleCriarTurma = async () => {
    if (!novaTurma.trim()) return;
    try {
      const res = await fetch("/api/turmas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: novaTurma }),
      });

      if (!res.ok) throw new Error("Erro ao criar turma");

      setNovaTurma("");
      buscarTurmas();
    } catch (err) {
      alert("Erro ao criar turma: " + err.message);
    }
  };
  if (!mounted) return null;
  return (
    <>
      <head>
        <title>Tabufácil | Turmas</title>
      </head>

      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>

      <div className="close" onClick={() => router.back()}>&lt;</div>

      <div id="centro_avisos" style={{ marginTop: 0 }}>
        <h2>Turmas Cadastradas</h2>
        <div className="box_avisos">
          <input
            type="text"
            id="turma"
            name="turma"
            placeholder="Insira uma nova turma"
            style={{ margin: "15px 0" }}
            value={novaTurma}
            onChange={(e) => setNovaTurma(e.target.value)}
          />
          <button type="button" onClick={handleCriarTurma}>Inserir</button>

          {isLoading ? (
            <p style={{ marginTop: "1rem", textAlign: "center" }}>Carregando turmas...</p>
          ) : error ? (
            <p style={{ marginTop: "1rem", color: "red", textAlign: "center" }}>Erro: {error}</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Média da Turma</th>
                </tr>
              </thead>
              <tbody>
                {turmas.map((turma) => (
                  <tr key={turma.id}>
                    <td>{turma.id}</td>
                    <td>{turma.nome}</td>
                    <td>{turma.media ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
