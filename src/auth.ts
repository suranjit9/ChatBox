import NextAuth from "next-auth"
import github from "next-auth/providers/github"
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    github({
      clientId: process.env.NEXT_GITHUB_ID,
      clientSecret: process.env.NEXT_GITHUB_SECRET,
    })
  ],
  secret: process.env.AUTH_SECRET
})