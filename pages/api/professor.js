// /pages/api/turmas/professor.ts
import { prisma } from "../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || session.user.tipo_usuario !== "Professor") {
    return res.status(401).json({ error: "Não autorizado" });
  }

  const professorId = session.user.id;

  const turmas = await prisma.turma.findMany({
    where: {
      id_professor: professorId,
    },
    include: {
      // alunos da turma via relação manual
      aluno_turma: {
        include: {
          usuario: true,
        },
      },
    },
  });

  // Adaptar estrutura para facilitar uso no front-end
  const resposta = turmas.map((turma) => ({
    id: turma.id,
    nome: turma.nome,
    alunos: turma.aluno_turma.map((rel) => rel.usuario),
  }));

  res.status(200).json(resposta);
}