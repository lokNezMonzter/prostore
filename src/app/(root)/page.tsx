import ProductList from "@/components/custom/product/product-list";
import sampleData from "@/mock/db/sample-data";

export default async function Home() {
  return (
    <>
      <ProductList data={sampleData.products} title="New Arrivals" />
    </>
  );
}
