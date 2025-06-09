import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ mensagem: 'Método não permitido' });
  }

  const {
    id_aluno,
    id_turma,
    id_professor,
    acertos,
    total_questoes,
    respostas
  } = req.body;

  if (
    !id_aluno || !id_turma || !id_professor ||
    typeof acertos !== 'number' || typeof total_questoes !== 'number' ||
    !Array.isArray(respostas) || respostas.length !== total_questoes
  ) {
    return res.status(400).json({ mensagem: 'Dados incompletos ou inválidos' });
  }

  try {
    // Cria o registro do treinamento com a média de acertos
    const novoTreinamento = await prisma.treinamento.create({
      data: {
        id_aluno,
        id_turma,
        id_professor,
        media_acertos: acertos / total_questoes,
        data_hora: new Date(),
        avaliacao_prof: null // pode ser atualizado depois
      }
    });

    // Cria as respostas na tabela treinamento_tabuada
    const respostasFormatadas = respostas.map((res) => ({
      primeiro_numero: res.primeiro_numero,
      segundo_numero: res.segundo_numero,
      resultado: res.primeiro_numero * res.segundo_numero,
      resposta_aluno: res.resposta_aluno,
      id_treinamento: novoTreinamento.id
    }));

    await prisma.treinamento_tabuada.createMany({
      data: respostasFormatadas
    });

    return res.status(201).json({ mensagem: 'Treinamento salvo com sucesso', id: novoTreinamento.id });

  } catch (error) {
    console.error('Erro ao salvar treinamento:', error);
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
}
