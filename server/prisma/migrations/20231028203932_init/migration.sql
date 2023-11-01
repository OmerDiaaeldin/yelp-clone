-- CreateTable
CREATE TABLE "restaurants" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "location" VARCHAR(50) NOT NULL,
    "price_range" INTEGER NOT NULL,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("id")
);
