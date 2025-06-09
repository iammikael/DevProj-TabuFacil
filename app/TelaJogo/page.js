'use client';

import { useEffect, useState, useReducer } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

//TESTE BRANCH RAFA

const TOTAL_QUESTOES = 10; // Alterado de 10 para 25
const NUMEROS_DA_TABUADA = Array.from({ length: 10  }, (_, i) => i + 1); // Gera um array de 1 a 25

// Função auxiliar para embaralhar o array
function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// A função de estado inicial
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
  };
}

// A função reducer que gerencia as ações do jogo
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
          isCorrect: isCorrect,
        },
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

// O componente React
export default function TelaJogo() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, dispatch] = useReducer(gameReducer, createInitialState());
  const [isMounted, setIsMounted] = useState(false);
  const [resposta, setResposta] = useState('');

  // Efeitos (lógica) permanecem os mesmos...
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

  function handleEnviar(e) {
    e.preventDefault();
    if (resposta.trim() === '' || state.feedback.show) return;
    dispatch({ type: 'ENVIAR_RESPOSTA', payload: resposta });
  }

  const tempoFormatado = `${String(Math.floor(state.tempo / 60)).padStart(2, '0')}:${String(state.tempo % 60).padStart(2, '0')}`;

  if (!isMounted) {
    return null;
  }

  // O JSX (bloco de renderização) permanece o mesmo
  return (
    <div>
      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>
      <div className="close" onClick={() => router.back()}>x</div>

      <div className="right">
        {state.questaoAtual} de {TOTAL_QUESTOES} ⏱️<br/>
        {tempoFormatado}
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
            <div style={{ fontSize:'30px'}}>
            <h2>Fim do jogo!</h2>
            <p>Você acertou {state.acertos} de {TOTAL_QUESTOES}</p>
            <p>Tempo total: {tempoFormatado}</p>
            </div>
            <div className="botao" onClick={() => router.push('/ModoJogo')}>
              Voltar ao início
            </div>
          </div>
        )}
      </div>
    </div>
  );
}