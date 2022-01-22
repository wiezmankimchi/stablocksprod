/*
  Warnings:

  - You are about to drop the column `userTypes` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "userTypes";

-- DropEnum
DROP TYPE "UserType";

-- CreateTable
CREATE TABLE "Role" (
    "userId" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "employee" BOOLEAN NOT NULL DEFAULT false,
    "external" BOOLEAN NOT NULL DEFAULT true,
    "departmentAdmin" BOOLEAN NOT NULL DEFAULT false,
    "hrAdmin" BOOLEAN NOT NULL DEFAULT false,
    "hr" BOOLEAN NOT NULL DEFAULT false,
    "recruitingAdmin" BOOLEAN NOT NULL DEFAULT false,
    "recruiting" BOOLEAN NOT NULL DEFAULT false,
    "crmAdmin" BOOLEAN NOT NULL DEFAULT false,
    "crm" BOOLEAN NOT NULL DEFAULT false,
    "marketingAdmin" BOOLEAN NOT NULL DEFAULT false,
    "marketing" BOOLEAN NOT NULL DEFAULT false,
    "salesAdmin" BOOLEAN NOT NULL DEFAULT false,
    "sales" BOOLEAN NOT NULL DEFAULT false,
    "helpdeskAdmin" BOOLEAN NOT NULL DEFAULT false,
    "helpdesk" BOOLEAN NOT NULL DEFAULT false,
    "projectsAdmin" BOOLEAN NOT NULL DEFAULT false,
    "projects" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_userId_key" ON "Role"("userId");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
