import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Esta API busca as turmas de um professor específico
export default async function handler(req, res) {
  // Apenas método GET é permitido
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Pega o ID do professor passado como query parameter (ex: /api/turmasAvisos?professorId=1)
  const { professorId } = req.query;

  if (!professorId || isNaN(parseInt(professorId))) {
    return res.status(400).json({ error: 'ID do professor é inválido ou não foi fornecido.' });
  }

  try {
    const turmas = await prisma.turma.findMany({
      where: {
        id_professor: parseInt(professorId),
      },
    });
    res.status(200).json(turmas);
  } catch (error) {
    console.error('Falha ao buscar turmas do professor:', error);
    res.status(500).json({ error: 'Não foi possível buscar as turmas.' });
  }
}
