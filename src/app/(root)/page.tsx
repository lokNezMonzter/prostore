import ProductList from "@/components/custom/product/product-list";
import sampleData from "@/mock/db/sample-data";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  await delay(2000);
  return (
    <>
      <ProductList data={sampleData.products} title="New Arrivals" />
    </>
  );
}
