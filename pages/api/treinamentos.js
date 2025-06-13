import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { alunoId, professorId } = req.query;

  try {
    let whereClause = {};

    if (alunoId) {
      whereClause = { id_aluno: parseInt(alunoId) };
    } else if (professorId) {
      whereClause = { id_professor: parseInt(professorId) };
    } else {
      return res.status(400).json({ error: 'ID do aluno ou professor é obrigatório.' });
    }

    const treinamentos = await prisma.treinamento.findMany({
      where: whereClause,
      include: {
        aluno: { 
          select: { nome: true },
        },
        turma: { 
          select: { nome: true },
        },
      },
      orderBy: {
        data_hora: 'desc',
      },
    });

    res.status(200).json(treinamentos);

  } catch (error) {
    console.error("Erro ao buscar treinamentos:", error);
    res.status(500).json({ error: 'Erro interno ao buscar treinamentos.' });
  }
}
