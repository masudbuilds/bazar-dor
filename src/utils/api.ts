import { Nav } from "@/types/Nav";
import { Product } from "@/types/Product";

export const navData = async (): Promise<Nav[]> => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data;
};

export const productData = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data;
};
