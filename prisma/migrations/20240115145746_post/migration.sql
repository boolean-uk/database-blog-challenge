/*
  Warnings:

  - You are about to alter the column `title` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - You are about to alter the column `content` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "pictureUrl" TEXT,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(150),
ALTER COLUMN "content" SET DATA TYPE VARCHAR(150);
