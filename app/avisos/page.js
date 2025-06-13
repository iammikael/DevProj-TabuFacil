"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './aviso.css'; 

const FormularioAviso = ({ turmas, idProfessor, onAvisoCriado }) => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [turmaSelecionada, setTurmaSelecionada] = useState('');
  const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });

  const formFieldStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: '#333',
    WebkitTextStroke: '0',
    textAlign: 'left',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '12px',
    width: '100%',
    height: 'auto',
    boxSizing: 'border-box',
    margin: '5px 0'
  };

  const textareaStyle = {
    ...formFieldStyle,
    height: '120px',
    resize: 'vertical'
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!turmaSelecionada || !titulo || !conteudo) {
      setMensagem({ texto: 'Por favor, preencha todos os campos.', tipo: 'erro' });
      return;
    }

    try {
      const response = await fetch('/api/avisos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, conteudo, id_turma: turmaSelecionada }),
      });

      if (!response.ok) throw new Error('Falha ao criar o aviso.');
      
      setMensagem({ texto: 'Aviso criado com sucesso!', tipo: 'sucesso' });
      setTitulo('');
      setConteudo('');
      onAvisoCriado();

    } catch (error) {
      setMensagem({ texto: error.message, tipo: 'erro' });
    }
  };

  return (
    <div className="box_avisos">
      <h3 style={{textAlign: 'center'}}>Criar Novo Aviso</h3>
      <form onSubmit={handleSubmit}>
        <select value={turmaSelecionada} onChange={(e) => setTurmaSelecionada(e.target.value)} required>
          <option value="">Selecione uma turma</option>
          {turmas.map(turma => (
            <option key={turma.id} value={turma.id}>{turma.nome}</option>
          ))}
        </select>
        <input type="text" style={formFieldStyle} placeholder="Título do aviso" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        <textarea style={{width: '100%', height:'80px'}} placeholder="Conteúdo do aviso" value={conteudo} onChange={(e) => setConteudo(e.target.value)} required />
        <button style={{width: '15%', fontSize: '14px', textAlign: 'center', height: 'auto'}} 
                type="submit" className="botao">Enviar Aviso</button>
      </form>
      {mensagem.texto && <p className={`mensagem-${mensagem.tipo}`}>{mensagem.texto}</p>}
    </div>
  );
};


export default function AvisosPage() {
  const router = useRouter();
  
  const [usuario, setUsuario] = useState(null);
  const [avisos, setAvisos] = useState([]);
  const [turmasProfessor, setTurmasProfessor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAvisos = async () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario'));
    if (!usuarioLogado) return;

    let url = '';
    if (usuarioLogado.tipoUsuario === 'Aluno') {
      if (!usuarioLogado.id_turma) {
        setError("Sua conta não está vinculada a nenhuma turma.");
        return;
      }
      url = `/api/avisos?turmaId=${usuarioLogado.id_turma}`;
    } else if (usuarioLogado.tipoUsuario === 'Professor') {
      url = `/api/avisos?professorId=${usuarioLogado.id_usuario}`;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Falha ao carregar os avisos.');
      const data = await response.json();
      setAvisos(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const carregarDadosIniciais = async () => {
      const usuarioLogado = JSON.parse(localStorage.getItem('usuario'));
      if (!usuarioLogado) {
        setError("Usuário não logado. Por favor, faça o login.");
        setIsLoading(false);
        return;
      }
      setUsuario(usuarioLogado);

      if (usuarioLogado.tipoUsuario === 'Professor') {
        try {
          const resTurmas = await fetch(`/api/turmaAvisos?professorId=${usuarioLogado.id_usuario}`);
          if (!resTurmas.ok) throw new Error('Falha ao buscar turmas.');
          const dataTurmas = await resTurmas.json();
          setTurmasProfessor(dataTurmas);
        } catch (err) {
          setError(err.message);
        }
      }

      await fetchAvisos();
      setIsLoading(false);
    };

    carregarDadosIniciais();
  }, []);

  const renderContent = () => {
    if (isLoading) return <p style={{ color: 'white', fontSize: '24px' }}>Carregando...</p>;
    if (error) return <p style={{ color: 'red', fontSize: '24px' }}>{error}</p>;
    if (avisos.length === 0) return <p style={{ color: 'white', fontSize: '24px' }}>Nenhum aviso encontrado.</p>;
    
    return avisos.map(aviso => (
      <div key={aviso.id_aviso} className="box_avisos">
        {/* Mostra o nome da turma para o professor */}
        {usuario.tipoUsuario === 'Professor' && <span className="nome_turma_aviso">{aviso.turma.nome}</span>}
        <h3>{aviso.titulo}</h3>
        <p>{aviso.conteudo}</p>
        <span className="data_aviso">{new Date(aviso.data_hora).toLocaleDateString('pt-BR')}</span>
      </div>
    ));
  };

  return (
    <>
      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>
      <div className="close" onClick={() => router.back()}>&lt;</div>
      <main id="centro_avisos">
        <h2>Mural de Avisos</h2>
        {/* Mostra o formulário apenas se o usuário for um professor */}
        {usuario && usuario.tipoUsuario === 'Professor' && (
          <FormularioAviso 
            turmas={turmasProfessor} 
            idProfessor={usuario.id_usuario} 
            onAvisoCriado={fetchAvisos}
          />
        )}
        <div className="lista_avisos">
          {renderContent()}
        </div>
      </main>
    </>
  );
}
