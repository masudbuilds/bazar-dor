import { Nav } from "@/types/Nav";
import { PriceTacker } from "@/types/PriceTacker";

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

export const priceTrackerData = async (): Promise<PriceTacker[]> => {
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
