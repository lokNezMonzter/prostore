import { PrismaClient } from "@prisma/client";
import sampleData from "@/mock/db/sample-data";

async function main() {
  const prisma = new PrismaClient();

  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });
}

main().then(() => {
  console.log("seeded successfully");
});
