import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  
  if (req.method === 'GET') {
    const { professorId } = req.query;
    if (!professorId) {
      return res.status(400).json({ error: 'ID do professor é obrigatório.' });
    }

    try {
      const turmas = await prisma.turma.findMany({
        where: { id_professor: parseInt(professorId) },
      });

      const turmasComMedia = await Promise.all(
        turmas.map(async (turma) => {
          const agregacao = await prisma.treinamento.aggregate({
            where: { id_turma: turma.id },
            _avg: { media_acertos: true },
          });
          return {
            ...turma,
            media_turma: (agregacao._avg.media_acertos || 0) * 10, 
          };
        })
      );

      return res.status(200).json(turmasComMedia);
    } catch (error) {
      console.error("Erro ao buscar turmas:", error);
      return res.status(500).json({ error: 'Erro interno ao buscar turmas.' });
    }
  }


  if (req.method === 'POST') {
    try {
      const { nome, id_professor } = req.body;
      if (!nome || !id_professor) {
        return res.status(400).json({ error: 'Nome da turma e ID do professor são obrigatórios.' });
      }

      const novaTurma = await prisma.turma.create({
        data: {
          nome,
          id_professor: parseInt(id_professor),
          media_turma: 0, 
        },
      });

      return res.status(201).json(novaTurma);
    } catch (error) {
      console.error("Erro ao criar turma:", error);
      return res.status(500).json({ error: 'Erro interno ao criar turma.' });
    }
  }

  return res.status(405).json({ error: `Método ${req.method} não permitido` });
}
