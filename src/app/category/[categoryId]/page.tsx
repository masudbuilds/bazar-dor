import CategoryProductView from "@/components/category/CategoryProductView";
import { Product } from "@/types/Product";
import { categoryData, categoryProducts } from "@/utils/api";

export const instant = false;

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

const CategoryProducts = async ({ params }: CategoryPageProps) => {
  const { categoryId } = await params;

  let products: Product[] = [];
  let categoryInfo = null;

  try {
    const [catData, prods] = await Promise.all([
      categoryData(categoryId),
      categoryProducts(categoryId),
    ]);

    products = prods || [];

    categoryInfo =
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
  } catch (error) {
    console.error("Failed to fetch category data:", error);
    products = [];
    categoryInfo = null;
  }

  return (
    <CategoryProductView
      initialProducts={products}
      categoryInfo={categoryInfo}
    />
  );
};

export default CategoryProducts;
