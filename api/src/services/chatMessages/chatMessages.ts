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

interface CreateChatMessageArgs {
  input: Prisma.ChatMessageCreateInput
}

export const createChatMessage = ({ input }: CreateChatMessageArgs) => {
  return db.chatMessage.create({
    data: input,
  })
}

interface UpdateChatMessageArgs extends Prisma.ChatMessageWhereUniqueInput {
  input: Prisma.ChatMessageUpdateInput
}

export const updateChatMessage = ({ id, input }: UpdateChatMessageArgs) => {
  return db.chatMessage.update({
    data: input,
    where: { id },
  })
}

export const deleteChatMessage = ({
  id,
}: Prisma.ChatMessageWhereUniqueInput) => {
  return db.chatMessage.delete({
    where: { id },
  })
}

export const ChatMessage = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof chatMessage>>) =>
    db.chatMessage.findUnique({ where: { id: root.id } }).user(),
  chat: (_obj, { root }: ResolverArgs<ReturnType<typeof chatMessage>>) =>
    db.chatMessage.findUnique({ where: { id: root.id } }).chat(),
}
