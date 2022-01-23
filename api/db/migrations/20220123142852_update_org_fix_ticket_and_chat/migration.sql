/*
  Warnings:

  - Added the required column `chatId` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketId` to the `TicketComment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ChatMessage" ADD COLUMN     "chatId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "finance" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "hr" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "marketing" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "sales" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "TicketComment" ADD COLUMN     "ticketId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TicketComment" ADD CONSTRAINT "TicketComment_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
