import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";
import prisma from "@/db";
import Credentials from "@auth/core/providers/credentials";

export const config = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) throw new Error("Invalid credentials.");
        // Find user in database
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });
        if (!user) throw new Error("Invalid credentials.");

        // Match password
        const isMatch = compareSync(
          credentials.password as string,
          user.password,
        );
        if (!isMatch) throw new Error("Invalid credentials.");

        return user;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user, trigger, token }: any) => {
      // Set the user id from the token
      session.user.id = token.sub;

      // If there is an update, set the user name
      if (trigger === "update") {
        session.user.name = user.name;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config);
