import { Nav } from "@/types/Nav";

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
