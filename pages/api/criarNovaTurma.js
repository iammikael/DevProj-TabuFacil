import { prisma } from "../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: "Não autorizado" });
  }

  const { nome } = req.body;
  const email = session.user.email;

  try {
    const professor = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!professor || professor.tipo_usuario !== "Professor") {
      return res.status(403).json({ error: "Apenas professores podem criar turmas." });
    }

    const novaTurma = await prisma.turma.create({
      data: {
        nome,
        id_professor: professor.id,
      },
    });

    return res.status(201).json(novaTurma);
  } catch (error) {
    console.error("Erro ao criar turma:", error);
    return res.status(500).json({ erro: "Erro ao criar turma", detalhes: error.message });
  }
}