import Image from "next/image";
import { IconBadge, MiniList } from "@/components/ui/Card";
import type { Product } from "@/data/productsData";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card productCard">
      <div className="cardImage">
        <Image src={product.image} alt={product.imageAlt} width={640} height={480} />
      </div>
      <IconBadge icon={product.icon} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <MiniList items={product.bullets} />
    </article>
  );
}
