
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../lib/prisma"; 
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
        const user = await prisma.usuario.findUnique({ 
          where: {
            nome: credentials.nome,
          },
        });

        if (user && user.senha === credentials.senha) { 
          return {
            id: user.id,
            nome: user.nome,
            tipo_usuario: user.tipo_usuario,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.nome = user.nome;
        token.tipo_usuario = user.tipo_usuario;
      }
      return token;
    },
    async session({ session, token }) {
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
    strategy: "jwt", 
  },
  secret: process.env.NEXTAUTH_SECRET,
};
