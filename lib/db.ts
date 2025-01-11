import {PrismaClient} from "@prisma/client"

// below is done only for dev environment
declare global {
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = db
//////