'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './treinamentosLista.css'; // Usando seu CSS existente

export default function TreinamentosListaPage() {
  const router = useRouter();
  
  const [usuario, setUsuario] = useState(null);
  const [treinamentos, setTreinamentos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Busca os dados do usuário logado e, em seguida, os treinamentos
    const carregarDados = async () => {
      const usuarioLogado = JSON.parse(localStorage.getItem('usuario'));
      if (!usuarioLogado) {
        setError("Usuário não encontrado. Por favor, faça login.");
        setIsLoading(false);
        return;
      }
      setUsuario(usuarioLogado);

      // Constrói a URL da API com base no tipo de usuário
      let apiUrl = '';
      if (usuarioLogado.tipoUsuario === 'Aluno') {
        apiUrl = `/api/treinamentos?alunoId=${usuarioLogado.id_usuario}`;
      } else if (usuarioLogado.tipoUsuario === 'Professor') {
        apiUrl = `/api/treinamentos?professorId=${usuarioLogado.id_usuario}`;
      } else {
        setError("Tipo de usuário inválido.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Falha ao carregar os treinamentos.');
        }
        const data = await response.json();
        setTreinamentos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    carregarDados();
  }, []);

  const renderTabela = () => {
    if (isLoading) return <p>Carregando treinamentos...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (treinamentos.length === 0) return <p>Nenhum treinamento encontrado.</p>;

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            {/* Oculta a coluna "Aluno" se for um aluno logado */}
            {usuario?.tipoUsuario === 'Professor' && <th>Aluno</th>}
            <th>Turma</th>
            <th>Média</th>
            <th>Nota</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {treinamentos.map((treino) => (
            <tr key={treino.id}>
              <td>{treino.id}</td>
              <td>{new Date(treino.data_hora).toLocaleString('pt-BR')}</td>
              {/* Mostra o nome do aluno apenas para o professor */}
              {usuario?.tipoUsuario === 'Professor' && <td>{treino.aluno.nome}</td>}
              <td>{treino.turma.nome}</td>
              <td>{treino.media_acertos.toFixed(2)*10}</td>
              <td>{treino.avaliacao_prof ? <b>{treino.avaliacao_prof}</b> : ''}</td>
              <td>
                {/* O link agora é dinâmico, apontando para uma página de detalhes com o ID */}
                <Link href={`/treinamento/${treino.id}`}>Abrir</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div className="close" onClick={() => router.back()}>&lt;</div>
      
      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>

      <div id="centro_avisos" style={{ marginTop: '30px' }}>
        <h2 className="texto-central">Treinamentos Realizados</h2>
        <div className="box_avisos">
          {renderTabela()}
        </div>
      </div>
    </>
  );
}
