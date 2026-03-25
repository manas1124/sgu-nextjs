// src/components/layout/Footer.tsx
// Server Component
import Link from 'next/link';
import { SITE_NAME, FOOTER_LINKS } from '@/constants';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-12 pb-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/"
                  className="font-serif text-xl font-black tracking-tighter">
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href}
                          className="text-sm text-gray-500 hover:text-black transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-5 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            Copyright © 2022 {SITE_NAME}. All Rights Reserved.
          </p>
          {/* Footer nav links */}
          <div className="flex flex-wrap gap-4">
            {['Home','Shop','Products','Pages'].map(l => (
              <Link key={l} href="/"
                    className="text-xs text-gray-500 hover:text-black transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
