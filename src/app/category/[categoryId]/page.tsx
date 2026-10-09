import CategoryProductView from "@/components/category/CategoryProductView";
import { Product } from "@/types/Product";

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

const CategoryProducts = async ({ params }: CategoryPageProps) => {
  const { categoryId } = await params;

  try {
    const [catRes, productsRes] = await Promise.all([
      fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${categoryId}`, {
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`,
        {
          next: { revalidate: 3600 },
        }
      ),
    ]);

    const catData = catRes.ok ? await catRes.json() : null;
    const products: Product[] = productsRes.ok ? await productsRes.json() : [];

    const categoryInfo =
      catData && catData.nameBn
        ? {
            nameBn: catData.nameBn,
            icon: catData.icon || "🛒",
            count: products.length,
          }
        : products.length > 0
        ? {
            nameBn: products[0].categoryNameBn,
            icon: products[0].categoryIcon || "🛒",
            count: products.length,
          }
        : null;

    return (
      <CategoryProductView
        initialProducts={products}
        categoryInfo={categoryInfo}
      />
    );
  } catch (error) {
    return (
      <CategoryProductView initialProducts={[]} categoryInfo={null} />
    );
  }
};

export default CategoryProducts;
