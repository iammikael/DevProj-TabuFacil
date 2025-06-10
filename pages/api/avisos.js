import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // --- LÓGICA PARA BUSCAR AVISOS (GET) ---
  if (req.method === 'GET') {
    const { turmaId, professorId } = req.query;

    try {
      let whereClause = {};

      if (turmaId) {
        // Se for um aluno, busca pela turma específica
        whereClause = { id_turma: parseInt(turmaId) };
      } else if (professorId) {
        // Se for um professor, primeiro busca todas as suas turmas
        const turmasDoProfessor = await prisma.turma.findMany({
          where: { id_professor: parseInt(professorId) },
          select: { id: true }, // seleciona apenas os IDs
        });
        const idsDasTurmas = turmasDoProfessor.map(t => t.id);
        
        // Depois, busca avisos que pertencem a qualquer uma dessas turmas
        whereClause = { id_turma: { in: idsDasTurmas } };
      } else {
        return res.status(400).json({ error: 'É necessário fornecer um ID de turma ou de professor.' });
      }

      const avisosDb = await prisma.avisos.findMany({
        where: whereClause,
        orderBy: { data_hora: 'desc' },
        include: { turma: { select: { nome: true } } }, // Inclui o nome da turma no aviso
      });

      const avisos = avisosDb.map(aviso => ({
        ...aviso,
        conteudo: aviso.conteudo ? Buffer.from(aviso.conteudo).toString('utf-8') : '',
      }));

      return res.status(200).json(avisos);
    } catch (error) {
      console.error('Falha ao buscar avisos:', error);
      return res.status(500).json({ error: 'Não foi possível buscar os avisos.' });
    }
  }

  // --- LÓGICA PARA CRIAR AVISOS (POST) ---
  if (req.method === 'POST') {
    try {
      const { titulo, conteudo, id_turma } = req.body;

      if (!titulo || !conteudo || !id_turma) {
        return res.status(400).json({ error: 'Título, conteúdo e turma são obrigatórios.' });
      }

      const novoAviso = await prisma.avisos.create({
        data: {
          titulo: titulo,
          conteudo: Buffer.from(conteudo, 'utf-8'), // Converte o texto para Buffer antes de salvar
          id_turma: parseInt(id_turma),
          data_hora: new Date(),
        },
      });

      return res.status(201).json(novoAviso);
    } catch (error) {
      console.error('Falha ao criar aviso:', error);
      return res.status(500).json({ error: 'Não foi possível criar o aviso.' });
    }
  }

  // Se for qualquer outro método (PUT, DELETE, etc.)
  return res.status(405).json({ error: `Método ${req.method} não permitido` });
}
