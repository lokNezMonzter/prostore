import ProductCard from "@/components/custom/product/product-card";

export default function ProductList({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) {
  const buffer = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {buffer.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {buffer.map((item: any) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
