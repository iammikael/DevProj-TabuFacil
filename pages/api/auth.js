
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../lib/prisma"; // <<<< VERIFIQUE ESTE CAMINHO para o seu prisma client
import NextAuth from "next-auth";
import { getServerSession } from "next-auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        nome: { label: "Nome", type: "text" },
        senha: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.nome || !credentials.senha) {
          return null;
        }
        // IMPORTANTE: Implemente HASH DE SENHAS aqui em um projeto real!
        // Nunca compare senhas em texto plano em produção.
        const user = await prisma.usuario.findUnique({ // Use findUnique se email for @unique
          where: {
            nome: credentials.nome,
          },
        });

        if (user && user.senha === credentials.senha) { // Compare com a senha do banco (idealmente hasheada)
          // Retorne apenas os dados que você quer que o callback 'jwt' receba
          return {
            id: user.id,
            nome: user.nome,
            tipo_usuario: user.tipo_usuario,
            // não retorne a senha!
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // O objeto 'user' só está presente no login inicial.
      // Persista os dados desejados no token.
      if (user) {
        token.id = user.id;
        token.nome = user.nome;
        token.tipo_usuario = user.tipo_usuario;
      }
      return token;
    },
    async session({ session, token }) {
      // Adicione os dados do token ao objeto session.user
      // Assim, eles estarão disponíveis no frontend e no backend via getServerSession
      if (session.user) {
        session.user.id = token.id;
        session.user.nome = token.nome;
        session.user.tipo_usuario = token.tipo_usuario;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt", // Necessário para que o callback jwt seja usado
  },
  secret: process.env.NEXTAUTH_SECRET, // Defina uma NEXTAUTH_SECRET no seu .env
};
