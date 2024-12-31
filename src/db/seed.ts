import { PrismaClient } from "@prisma/client";
import sampleData from "@/mock/db/sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
}

main().then(() => {
  console.log("seeded successfully");
});
