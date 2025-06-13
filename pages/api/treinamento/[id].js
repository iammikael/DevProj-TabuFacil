import { prisma } from '../../../lib/prisma'; 

export default async function handler(req, res) {
  const { id } = req.query;
  const treinamentoId = parseInt(id);

  if (isNaN(treinamentoId)) {
    return res.status(400).json({ error: 'ID do treinamento inválido.' });
  }

  if (req.method === 'GET') {
    try {
      const treinamento = await prisma.treinamento.findUnique({
        where: { id: treinamentoId },
        include: {
          aluno: { select: { nome: true } },
          respostas_tabuada: true,
          comentarios: { orderBy: { data_hora: 'desc' } },
        },
      });

      if (!treinamento) {
        return res.status(404).json({ error: 'Treinamento não encontrado.' });
      }

      if (treinamento.comentarios[0] && treinamento.comentarios[0].comentario_aluno) {
          treinamento.comentarios[0].comentario_aluno = Buffer.from(treinamento.comentarios[0].comentario_aluno).toString('utf-8');
      }

      return res.status(200).json(treinamento);
    } catch (error) {
      console.error("Erro ao buscar detalhes do treinamento:", error);
      return res.status(500).json({ error: 'Erro interno no servidor.' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const { obsProfessor, nota } = req.body;

      const treinamentoAtualizado = await prisma.treinamento.update({
        where: { id: treinamentoId },
        data: { avaliacao_prof: nota },
      });

      await prisma.comentario.updateMany({
        where: { id_treinamento: treinamentoId },
        data: { comentario_professor: obsProfessor },
      });

      return res.status(200).json(treinamentoAtualizado);
    } catch (error) {
      console.error("Erro ao atualizar treinamento:", error);
      return res.status(500).json({ error: 'Erro interno no servidor.' });
    }
  }

  return res.status(405).json({ error: `Método ${req.method} não permitido` });
}
