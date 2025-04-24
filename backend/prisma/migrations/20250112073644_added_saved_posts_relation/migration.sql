-- CreateTable
CREATE TABLE "UsersSavedPostsData" (
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UsersSavedPostsData_pkey" PRIMARY KEY ("postId","userId")
);

-- AddForeignKey
ALTER TABLE "UsersSavedPostsData" ADD CONSTRAINT "UsersSavedPostsData_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersSavedPostsData" ADD CONSTRAINT "UsersSavedPostsData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
