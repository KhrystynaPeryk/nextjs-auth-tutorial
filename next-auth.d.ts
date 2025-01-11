import NextAuth, { DefaultSession } from "next-auth"
import { UserRole } from "@prisma/client"

export type ExtendedUser = DefaultSession["user"] & {
    // here we are adding a new custom field for a session: role
    role: UserRole;
    isOAuth: boolean;
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser
    }
}