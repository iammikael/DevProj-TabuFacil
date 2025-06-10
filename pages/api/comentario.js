import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { id_treinamento, comentario_aluno } = req.body;

  try {
    const novoComentario = await prisma.comentario.create({
      data: {
        id_treinamento,
        comentario_aluno: Buffer.from(comentario_aluno, 'utf-8'),
        data_hora: new Date(),
      },
    });

    return res.status(201).json(novoComentario);
  } catch (error) {
    console.error('Erro ao salvar comentário:', error);
    return res.status(500).json({ error: 'Erro interno ao salvar comentário' });
  }
}
