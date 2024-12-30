"use server";

import { prisma } from "@/db";
import { jsonParser } from "@/lib/utils";

// get all the latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return jsonParser(data);
}

// get a single product
export async function getProductBySlug(slug: string) {
  return prisma.product.findFirst({
    where: { slug: slug },
  });
}
