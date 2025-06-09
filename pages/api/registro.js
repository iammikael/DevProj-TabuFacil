import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ mensagem: "Método não permitido" });
  }

  const { usuario, email, senha, tipoUsuario, nomeTurma } = req.body;

  if (!usuario || !email || !senha || !tipoUsuario) {
    return res.status(400).json({ mensagem: "Campos obrigatórios não preenchidos." });
  }

  try {
    // Verifica se o usuário ou e-mail já existem
    const usuarioExistente = await prisma.usuario.findFirst({
      where: {
        OR: [{ nome: usuario }, { email: email }],
      },
    });

    if (usuarioExistente) {
      return res.status(400).json({ mensagem: "Usuário ou e-mail já cadastrado." });
    }

    // Cria o usuário
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome: usuario,
        email,
        senha,
        tipo_usuario: tipoUsuario,
      },
    });

    // Se for professor, cria nova turma
    if (tipoUsuario === "Professor") {
      if (!nomeTurma) {
        return res.status(400).json({ mensagem: "Nome da turma é obrigatório para professor." });
      }

      await prisma.turma.create({
        data: {
          nome: nomeTurma,
          id_professor: novoUsuario.id, // não passa o ID manualmente!
        },
      });

    } else if (tipoUsuario === "Aluno") {
  const { idTurma } = req.body;

  if (!idTurma) {
    return res.status(400).json({ mensagem: "ID da turma é obrigatório para aluno." });
  }

  const turmaId = parseInt(idTurma);
  if (isNaN(turmaId)) {
    return res.status(400).json({ mensagem: "ID da turma inválido." });
  }

  const turma = await prisma.turma.findUnique({
    where: { id: turmaId },
  });

  if (!turma) {
    return res.status(400).json({ mensagem: "Turma não encontrada." });
  }

  await prisma.aluno_turma.create({
    data: {
      id_usuario: novoUsuario.id,
      id_turma: turma.id,
    },
  });
    }

    return res.status(201).json(novoUsuario);
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
}