'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './turmas.css'; 

export default function TurmasPage() {
  const router = useRouter();
  
  const [usuario, setUsuario] = useState(null);
  const [turmas, setTurmas] = useState([]);
  const [nomeNovaTurma, setNomeNovaTurma] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTurmas = async (professorId) => {
    try {
      const response = await fetch(`/api/turmasCadastro?professorId=${professorId}`);
      if (!response.ok) throw new Error('Falha ao carregar as turmas.');
      const data = await response.json();
      setTurmas(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario'));
    if (!usuarioLogado || usuarioLogado.tipoUsuario !== 'Professor') {
      setError("Acesso negado. Apenas para professores.");
      setIsLoading(false);
      return;
    }
    setUsuario(usuarioLogado);
    fetchTurmas(usuarioLogado.id_usuario);
    setIsLoading(false);
  }, []);

  const handleInserir = async (e) => {
    e.preventDefault();
    if (!nomeNovaTurma.trim()) return;

    try {
      const response = await fetch('/api/turmasCadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: nomeNovaTurma,
          id_professor: usuario.id_usuario,
        }),
      });
      if (!response.ok) throw new Error('Falha ao criar a turma.');
      
      setNomeNovaTurma(''); 
      fetchTurmas(usuario.id_usuario); 
    } catch (err) {
      setError(err.message);
    }
  };

  const renderContent = () => {
    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
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
              <td>{turma.media_turma.toFixed(1).replace('.', ',')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>
      <div className="close" onClick={() => router.back()}>&lt;</div>

      <div id="centro_avisos">
        <h2>Turmas Cadastradas</h2>
        <div className="box_avisos">
          <form onSubmit={handleInserir} className="form-inserir-turma">
            <input 
              type="text" 
              value={nomeNovaTurma}
              onChange={(e) => setNomeNovaTurma(e.target.value)}
              placeholder="Insira uma nova turma" 
            /> 
            <button type="submit">Inserir</button>
          </form>
          {renderContent()}
        </div>
      </div>
    </>
  );
}
