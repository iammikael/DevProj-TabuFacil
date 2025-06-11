import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { alunoId, professorId } = req.query;

  try {
    let whereClause = {};

    // Define a cláusula de busca baseada no tipo de usuário
    if (alunoId) {
      whereClause = { id_aluno: parseInt(alunoId) };
    } else if (professorId) {
      whereClause = { id_professor: parseInt(professorId) };
    } else {
      return res.status(400).json({ error: 'ID do aluno ou professor é obrigatório.' });
    }

    const treinamentos = await prisma.treinamento.findMany({
      where: whereClause,
      // Inclui os dados relacionados do aluno e da turma na resposta
      include: {
        aluno: { // Busca o nome do aluno relacionado
          select: { nome: true },
        },
        turma: { // Busca o nome da turma relacionada
          select: { nome: true },
        },
      },
      orderBy: {
        data_hora: 'desc', // Ordena do mais recente para o mais antigo
      },
    });

    res.status(200).json(treinamentos);

  } catch (error) {
    console.error("Erro ao buscar treinamentos:", error);
    res.status(500).json({ error: 'Erro interno ao buscar treinamentos.' });
  }
}
