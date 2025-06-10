"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './aviso.css'; 

export default function AvisosPage() {
  const router = useRouter();
  
  const [avisos, setAvisos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Obter os dados do usuário do localStorage
    const usuarioString = localStorage.getItem('usuario');
    
    // Se não houver dados do usuário, não prosseguir
    if (!usuarioString) {
      setError("Usuário não logado. Por favor, faça o login para ver os avisos.");
      setIsLoading(false);
      return;
    }
    
    const usuario = JSON.parse(usuarioString);
    const turmaIdDoAluno = usuario.id_turma;

    // Se o usuário não tiver um ID de turma, não prosseguir
    if (!turmaIdDoAluno) {
        setError("Sua conta não está vinculada a nenhuma turma.");
        setIsLoading(false);
        return;
    }

    // 2. Função para buscar os dados da API usando o ID da turma
    const fetchAvisos = async () => {
      try {
        const response = await fetch(`/api/avisos?turmaId=${turmaIdDoAluno}`);
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados.');
        }
        const data = await response.json();
        setAvisos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // 3. Chamar a função para buscar os avisos
    fetchAvisos();
  }, []); // O array vazio [] garante que isso rode apenas uma vez no cliente

  const renderContent = () => {
    if (isLoading) {
      return <p style={{ color: 'white', fontSize: '24px' }}>Carregando avisos...</p>;
    }
    if (error) {
      return <p style={{ color: 'red', fontSize: '24px' }}>{error}</p>;
    }
    if (avisos.length === 0) {
      return <p style={{ color: 'white', fontSize: '24px' }}>Nenhum aviso encontrado para esta turma.</p>;
    }
    return avisos.map(aviso => (
      <div key={aviso.id_aviso} className="box_avisos">
        <h3>{aviso.titulo}</h3>
        <p>{aviso.conteudo}</p>
      </div>
    ));
  };

  return (
    <>
      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>

      <div className="close" onClick={() => router.back()}>
        &lt;
      </div>

      <main id="centro_avisos">
        <h2>Mural de Avisos</h2>
        {renderContent()}
      </main>
    </>
  );
}
