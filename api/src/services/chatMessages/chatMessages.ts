import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const chatMessages = () => {
  return db.chatMessage.findMany()
}

export const chatMessage = ({ id }: Prisma.ChatMessageWhereUniqueInput) => {
  return db.chatMessage.findUnique({
    where: { id },
  })
}

export const ChatMessage = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof chatMessage>>) =>
    db.chatMessage.findUnique({ where: { id: root.id } }).user(),
}
