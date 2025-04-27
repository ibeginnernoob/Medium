-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firebaseID" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_firebaseID_key" ON "User"("firebaseID");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
