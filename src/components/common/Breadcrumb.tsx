// src/components/common/Breadcrumb.tsx
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-gray-500">
      {items.map((item, i) => (
        <span key={`${i}-${item.label}`} className="flex items-center gap-2">
          {i > 0 && <span className="text-gray-300">›</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-black transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-black" aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
