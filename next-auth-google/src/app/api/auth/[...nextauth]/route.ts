import { UserInterface } from "@/models/user";
import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    // 📌 Credentials (Email & Password) Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };

          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/v1/login_with_password`,
            {
              email,
              password,
            }
          );

          if (response.data) {
            return response.data.data; // Expecting a user object with an access_token
          }
          return null;
        } catch (error) {
          throw new Error("Invalid email or password.");
        }
      },
    }),

    // 📌 Google OAuth Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.user = user;
      }
      if (account?.provider === "google") {
        token.access_token = account.access_token;
      }
      return token;
    },

    async session({ session, token }) {
      session.token = token.access_token as string;
      session.user = token.user as UserInterface;
      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 90 * 24 * 60 * 60, // 90 days
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
