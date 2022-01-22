import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const chats = () => {
  return db.chat.findMany()
}

export const chat = ({ id }: Prisma.ChatWhereUniqueInput) => {
  return db.chat.findUnique({
    where: { id },
  })
}

export const Chat = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof chat>>) =>
    db.chat.findUnique({ where: { id: root.id } }).user(),
  assignee: (_obj, { root }: ResolverArgs<ReturnType<typeof chat>>) =>
    db.chat.findUnique({ where: { id: root.id } }).assignee(),
}
