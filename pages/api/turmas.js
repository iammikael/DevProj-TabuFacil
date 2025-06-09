import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth"; // ajuste se necessário
import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  console.log("Sessão:", session?.user?.email);

  try {
    if (req.method === 'GET') {
      // Se NÃO estiver logado, retorna todas as turmas (para cadastro de aluno)
      if (!session) {
        const turmas = await prisma.turma.findMany({
          select: { id: true, nome: true, media_turma: true },
          orderBy: { nome: 'asc' },
        });
        return res.status(200).json(turmas);
      }

      // Se ESTIVER logado, busca o professor e filtra as turmas
      const professor = await prisma.usuario.findUnique({
        where: { nome: session.user.nome },
      });

      if (!professor) {
        return res.status(404).json({ mensagem: "Professor não encontrado" });
      }

      const turmas = await prisma.turma.findMany({
        where: { id_professor: professor.id },
        select: { id: true, nome: true, media_turma: true },
        orderBy: { nome: 'asc' },
      });

      return res.status(200).json(turmas);
    }

    res.status(405).json({ mensagem: "Método não permitido" });
  } catch (error) {
    console.error("Erro ao buscar turmas:", error);
    res.status(500).json({ mensagem: "Erro ao buscar turmas." });
  }
}