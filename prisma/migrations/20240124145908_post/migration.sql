/*
  Warnings:

  - You are about to alter the column `title` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - You are about to alter the column `text` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(256)`.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "picUrl" TEXT,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(150),
ALTER COLUMN "text" SET DATA TYPE VARCHAR(256);
