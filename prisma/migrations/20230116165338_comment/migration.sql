/*
  Warnings:

  - A unique constraint covering the columns `[postID]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postID` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "postID" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Comment_postID_key" ON "Comment"("postID");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
