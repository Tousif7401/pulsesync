-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "commit_message" TEXT NOT NULL,
    "commit_id" TEXT,
    "commit_url" TEXT,
    "author_name" TEXT,
    "author_email" TEXT,
    "repository" VARCHAR(255),
    "commit_type" VARCHAR(50),
    "linkedin_post" TEXT,
    "twitter_post" TEXT,
    "instagram_post" TEXT,
    "hashtags" TEXT[],
    "generated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_published" BOOLEAN NOT NULL DEFAULT false,
    "platform_published" TEXT[],

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
