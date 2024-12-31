import ProductList from "@/components/custom/product/product-list";
import { getLatestProducts } from "@/actions/products";

export default async function Home() {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="New Arrivals" />
    </>
  );
}
