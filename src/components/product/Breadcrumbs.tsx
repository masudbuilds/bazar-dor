import Link from "next/link";

interface BreadcrumbsProps {
  categorySlug: string;
  categoryNameBn: string;
  productNameBn: string;
}

const Breadcrumbs = ({
  categorySlug,
  categoryNameBn,
  productNameBn,
}: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center gap-2 text-xs text-gray-500 py-3">
      <Link href="/" className="hover:text-green-700 transition-colors">
        হোম
      </Link>
      <span>&gt;</span>
      <Link
        href={`/category/${categorySlug}`}
        className="hover:text-green-700 transition-colors"
      >
        {categoryNameBn}
      </Link>
      <span>&gt;</span>
      <span className="text-gray-900 font-medium">{productNameBn}</span>
    </nav>
  );
};

export default Breadcrumbs;
