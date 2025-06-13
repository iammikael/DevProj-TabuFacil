'use client';

import { useEffect, useState, useReducer } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';


const TOTAL_QUESTOES = 10; 
const NUMEROS_DA_TABUADA = Array.from({ length: 10 }, (_, i) => i + 1); 


function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}


function createInitialState() {
  return {
    questaoAtual: 1,
    numero1: 2,
    numero2: 1,
    acertos: 0,
    feedback: { show: false, message: '', isCorrect: false },
    fimDoJogo: false,
    tempo: 0,
    questoes: [],
    respostas: [],
  };
}

function gameReducer(state, action) {
  switch (action.type) {
    case 'INICIAR_JOGO': {
      const questoesEmbaralhadas = shuffleArray(NUMEROS_DA_TABUADA);
      return {
        ...createInitialState(),
        numero1: action.payload,
        questoes: questoesEmbaralhadas,
        numero2: questoesEmbaralhadas[0],
      };
    }
    case 'ENVIAR_RESPOSTA': {
      const respostaUsuario = parseInt(action.payload, 10);
      const respostaCorreta = state.numero1 * state.numero2;
      const isCorrect = respostaUsuario === respostaCorreta;
      return {
        ...state,
        acertos: isCorrect ? state.acertos + 1 : state.acertos,
        feedback: {
          show: true,
          message: isCorrect ? 'Resposta correta!' : 'Resposta errada!',
          isCorrect,
        },
      respostas: [
        ...state.respostas,
        {
          primeiro_numero: state.numero1,
          segundo_numero: state.numero2,
          resultado: state.numero1 * state.numero2,
          resposta_aluno: respostaUsuario,
          },
        ],
      };
    }
    case 'PROXIMA_QUESTAO': {
      if (state.questaoAtual >= TOTAL_QUESTOES) {
        return { ...state, fimDoJogo: true };
      }
      const proximaQuestaoIndex = state.questaoAtual;
      return {
        ...state,
        questaoAtual: state.questaoAtual + 1,
        numero2: state.questoes[proximaQuestaoIndex],
        feedback: { show: false, message: '', isCorrect: false },
      };
    }
    case 'TICK_TEMPO': {
      if (state.fimDoJogo) return state;
      return { ...state, tempo: state.tempo + 1 };
    }
    default:
      throw new Error('Ação do reducer desconhecida.');
  }
}

export default function TelaJogo() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, dispatch] = useReducer(gameReducer, createInitialState());
  const [isMounted, setIsMounted] = useState(false);
  const [resposta, setResposta] = useState('');
  const [comentario, setComentario] = useState('');
  const [idTreinamento, setIdTreinamento] = useState(null);

  useEffect(() => {
    setIsMounted(true);
    const param = searchParams.get('tabuada') || '2';
    const tabuadaNum = param === 'aleatorio' ? Math.floor(Math.random() * 9) + 1 : parseInt(param, 10);
    dispatch({ type: 'INICIAR_JOGO', payload: tabuadaNum });
  }, [searchParams]);

  useEffect(() => {
    let timer;
    if (!state.fimDoJogo) {
      timer = setInterval(() => dispatch({ type: 'TICK_TEMPO' }), 1000);
    }
    return () => { if (timer) clearInterval(timer) };
  }, [state.fimDoJogo]);

  useEffect(() => {
    if (!state.feedback.show) return;
    const timeout = setTimeout(() => {
      dispatch({ type: 'PROXIMA_QUESTAO' });
      setResposta('');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [state.feedback]);

  useEffect(() => {
  if (state.fimDoJogo && state.respostas.length === TOTAL_QUESTOES) {
    
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (!usuario) {
      console.error("Dados do usuário não encontrados.");
      return;
    }
    
    const dadosParaSalvar = {
      id_aluno: usuario.id_usuario,     
      id_turma: usuario.id_turma,
      id_professor: usuario.id_professor, 
      acertos: state.acertos,
      total_questoes: TOTAL_QUESTOES,
      respostas: state.respostas,
    };


      console.log("--- DEBUG: Objeto sendo enviado para o back-end ---");
      console.log(dadosParaSalvar);
     

    fetch('/api/salvarTreinamentos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosParaSalvar),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Treinamento salvo com sucesso!', data);
        setIdTreinamento(data.id); 
      })
      .catch(err => {
        console.error('Erro ao salvar treinamento:', err);
      });
  }
}, [state.fimDoJogo]);

const enviarComentario = async () => {
  console.log("Enviando comentário:", comentario, "ID:", idTreinamento);
  
  if (!comentario.trim() || !idTreinamento) {
    console.warn("Comentário ou ID do treinamento ausente.");
    return router.push('/home');
  }

  await fetch('/api/comentario', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id_treinamento: idTreinamento,
      comentario_aluno: comentario,
    }),
  });

  router.push('/home');
};

  function handleEnviar(e) {
    e.preventDefault();
    if (resposta.trim() === '' || state.feedback.show) return;
    dispatch({ type: 'ENVIAR_RESPOSTA', payload: resposta });
  }

  const tempoFormatado = `${String(Math.floor(state.tempo / 60)).padStart(2, '0')}:${String(state.tempo % 60).padStart(2, '0')}`;

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>
      <div className="close" onClick={() => router.back()}>x</div>

      <div className="right">
        {state.questaoAtual} de {TOTAL_QUESTOES}<br/>
        ⏱️ {tempoFormatado}
      </div>

      <div id="centro">
        {!state.fimDoJogo ? (
          <form onSubmit={handleEnviar}>
            
            {/* Div que alinha os elementos do jogo na horizontal */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div className="numero">{state.numero1}</div>
              <h1>x</h1>
              <div className="numero">{state.numero2}</div>
              <h1>=</h1>
              <input
                type="text"
                maxLength={3}
                value={resposta}
                onChange={(e) => /^\d*$/.test(e.target.value) && setResposta(e.target.value)}
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="off"
                autoFocus
                disabled={state.feedback.show}
              />
              <button type="submit" className="botao" disabled={state.feedback.show}>
                Enviar
              </button>
            </div>

            <div style={{ fontSize:'30px',marginTop: '1.5rem', height: '2rem', textAlign: 'center' }}>
              {state.feedback.show && (
                <div className={`feedback ${state.feedback.isCorrect ? 'correto' : 'errado'}`}>
                  {state.feedback.message}
                </div>
              )}
            </div>

          </form>
        ) : (
        <div className="fim-jogo" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '30px' }}>
            <h2>Fim do jogo!</h2>
            <p>Você acertou {state.acertos} de {TOTAL_QUESTOES} | Tempo total: {tempoFormatado}</p>
          </div>

          <textarea className="areatexto"
            placeholder="O que você achou do treinamento realizado?"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            rows={4}
            style={{ width: '100%', marginTop: '5px', fontSize: '16px', padding: '10px', border: '1px solid #ccc' }}
          ></textarea>
            <div className="botao" style={{ marginTop: '10px', width: '100%' }} onClick={enviarComentario}>
              Voltar ao início
            </div>
        </div>
        )}
      </div>
    </div>
  );
}