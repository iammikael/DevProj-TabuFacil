'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import './treinamento.module.css'; // Use seu CSS

export default function DetalheTreinamentoPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params; // Pega o ID da URL

  const [treinamento, setTreinamento] = useState(null);
  const [obsProfessor, setObsProfessor] = useState('');
  const [nota, setNota] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [usuario, setUsuario] = useState(null);
  const isProfessor = usuario?.tipoUsuario === 'Professor';

  useEffect(() => {
    // Busca o usuário logado
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioLogado) {
      setUsuario(usuarioLogado);
    }

    // Busca os dados do treinamento se o ID estiver disponível
    if (id) {
      const fetchDetalhes = async () => {
        try {
          const response = await fetch(`/api/treinamento/${id}`);
          if (!response.ok) throw new Error('Falha ao buscar dados do treinamento.');
          const data = await response.json();
          setTreinamento(data);
          // Preenche os campos de correção se já existirem dados
          setObsProfessor(data.comentarios[0]?.comentario_professor || '');
          setNota(data.avaliacao_prof || '');
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchDetalhes();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`/api/treinamento/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ obsProfessor, nota }),
        });
        if (!response.ok) throw new Error('Falha ao salvar a correção.');
        alert('Correção salva com sucesso!');
        router.push('/treinamentosLista'); // Volta para a lista
    } catch (err) {
        setError(err.message);
        alert(`Erro: ${err.message}`);
    }
  };

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p style={{color: 'red'}}>Erro: {error}</p>;
  if (!treinamento) return <p>Treinamento não encontrado.</p>;

  // Formata os dados para exibição
  const dataFormatada = new Date(treinamento.data_hora).toISOString().slice(0, 16);
  const mediaFormatada = (treinamento.media_acertos * 10).toFixed(2);
  const obsAluno = treinamento.comentarios[0]?.comentario_aluno || 'Nenhuma observação do aluno.';

  return (
    <>
      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>
      <div className="close" onClick={() => router.back()}>&lt;</div>
      
      <div id="centro_avisos" style={{ marginTop: 0 }}>
        <h2>Correção de Treinamento</h2>
        <div className="box_correcao">
          <form onSubmit={handleSubmit}>
            <label htmlFor="codigo">Código:</label>
            <input type="text" id="codigo" value={treinamento.id} disabled
                    style={{fontFamily: "Arial, Helvetica, sans-serif", fontSize: '12px', textAlign: "left"}} />

            <label htmlFor="data">Data:</label>
            <input type="datetime-local" id="data" value={dataFormatada} disabled />

            {isProfessor && (
                <>
                    <label htmlFor="aluno">Aluno:</label>
                    <input type="text" id="aluno" value={treinamento.aluno.nome} disabled />
                </>
            )}

            <label>Histórico de Treinamento</label>
            <table style={{ width: '50%', margin: '10px 0' }}>
              <thead>
                <tr>
                  <th>Tabuada</th>
                  <th>Resposta do Aluno</th>
                  <th>Resposta Correta</th>
                </tr>
              </thead>
              <tbody>
                {treinamento.respostas_tabuada.map(resp => (
                  <tr key={resp.id}>
                    <td>{`${resp.primeiro_numero} x ${resp.segundo_numero}`}</td>
                    <td style={{ color: resp.resposta_aluno === resp.resultado ? 'green' : 'red' }}>
                      {resp.resposta_aluno}
                    </td>
                    <td>{resp.resultado}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <label>Média de Acertos</label>
            <input type="text" value={mediaFormatada} disabled />

            <label htmlFor="obsAluno">Observação Aluno:</label>
            <textarea id="obsAluno" value={obsAluno} disabled></textarea>

            <label htmlFor="obsProfessor">Observação Professor:</label>
            <textarea id="obsProfessor" value={obsProfessor} onChange={(e) => setObsProfessor(e.target.value)} disabled={!isProfessor} />

            <label htmlFor="nota">Nota:</label>
            <input type="text" style={{backgroundColor: "white"}} id="nota" value={nota} onChange={(e) => setNota(e.target.value)} disabled={!isProfessor} />

            {isProfessor && <button type="submit">Enviar Correção</button>}
          </form>
        </div>
      </div>
    </>
  );
}
