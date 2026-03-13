import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.levelThreshold.createMany({
    data: [
      { level: 1, exp: 0 },
      { level: 2, exp: 50 },
      { level: 3, exp: 50 },
      { level: 4, exp: 70 },
      { level: 5, exp: 90 },
      { level: 6, exp: 120 },
      { level: 7, exp: 150 },
      { level: 8, exp: 190 },
      { level: 9, exp: 230 },
      { level: 10, exp: 300 },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
