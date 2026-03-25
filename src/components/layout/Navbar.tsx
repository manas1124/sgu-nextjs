// src/components/layout/Navbar.tsx
// Server Component — NavIcons (Client) inject vào
import Link from 'next/link';
import { NAV_LINKS, SITE_NAME } from '@/constants';
import NavIcons from './NavIcons';
import MiniCart from '@/components/cart/MiniCart';

export default function Navbar() {
  return (
    <>
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center h-16 gap-10">
            {/* Nav links — trái */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.slice(0, 2).map(link => (
                <li key={link.href}>
                  <Link href={link.href}
                        className="text-sm text-gray-600 hover:text-black
                                   transition-colors uppercase tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Logo — giữa */}
            <Link href="/"
                  className="font-serif text-2xl font-black tracking-tighter mx-auto">
              {SITE_NAME}
            </Link>

            {/* Nav links — phải */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.slice(2).map(link => (
                <li key={link.href}>
                  <Link href={link.href}
                        className="text-sm text-gray-600 hover:text-black
                                   transition-colors uppercase tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Icons — Client Component */}
            <NavIcons />
          </div>
        </div>
      </nav>

      {/* MiniCart drawer */}
      <MiniCart />
    </>
  );
}
