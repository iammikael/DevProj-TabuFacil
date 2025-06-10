import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { turmaId } = req.query;

  if (!turmaId || isNaN(parseInt(turmaId))) {
    return res.status(400).json({ error: 'ID da turma é inválido ou não foi fornecido.' });
  }

  try {
    const avisosDb = await prisma.avisos.findMany({
      where: {
        id_turma: parseInt(turmaId),
      },
      orderBy: {
        data_hora: 'desc',
      },
    });

    const avisos = avisosDb.map(aviso => {
      // --- LINHA DA CORREÇÃO DEFINITIVA ---
      // Primeiro, criamos um Buffer a partir do Uint8Array, e DEPOIS convertemos para string.
      const conteudoString = aviso.conteudo ? Buffer.from(aviso.conteudo).toString('utf-8') : '';
      
      return {
        ...aviso,
        conteudo: conteudoString,
      };
    });

    res.status(200).json(avisos);

  } catch (error) {
    console.error('Falha ao buscar avisos:', error);
    res.status(500).json({ error: 'Não foi possível buscar os avisos.' });
  }
}