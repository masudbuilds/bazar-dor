import { Nav } from "@/types/Nav";
import { Product } from "@/types/Product";

const BASE_URL_1 = "https://api.abcz.workers.dev/api/bazardor";
const BASE_URL_2 = "https://api.api-store.workers.dev/api/bazardor";

// ১ নম্বর API ট্রাই করবে, সমস্যা হলে ২ নম্বর API থেকে ডেটা আনবে
const fetchApi = async (endpoint: string) => {
  try {
    const res1 = await fetch(`${BASE_URL_1}${endpoint}`, {
      next: { revalidate: 3600 },
    });
    if (res1.ok) return await res1.json();
  } catch {}

  try {
    const res2 = await fetch(`${BASE_URL_2}${endpoint}`, {
      next: { revalidate: 3600 },
    });
    if (res2.ok) return await res2.json();
  } catch {}

  return null;
};

export const navData = async (): Promise<Nav[]> => {
  return (await fetchApi("/categories")) || [];
};

export const productData = async (): Promise<Product[]> => {
  return (await fetchApi("/products")) || [];
};

export const categoryData = async (categoryId: string) => {
  return await fetchApi(`/categories/${categoryId}`);
};

export const categoryProducts = async (
  categoryId: string
): Promise<Product[]> => {
  return (await fetchApi(`/products?category=${categoryId}`)) || [];
};

export const singleProduct = async (
  productId: string
): Promise<Product | null> => {
  return await fetchApi(`/products/${productId}`);
};
