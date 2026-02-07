"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE_CONFIG, IMAGES } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-warm-beige-dark/30 bg-warm-beige/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image
              src={IMAGES.logo}
              alt={`${SITE_CONFIG.name} - ${SITE_CONFIG.title}`}
              width={64}
              height={64}
              className="mb-4 h-16 w-16 rounded-full object-cover"
            />
            <h3 className="font-semibold text-sage-green">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-gray-600">{SITE_CONFIG.title}</p>
            {SITE_CONFIG.crn && <p className="text-xs text-gray-500">{SITE_CONFIG.crn}</p>}
          </div>

          <nav className="flex flex-col items-center gap-2 md:items-end">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-sage-green"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sage-green hover:underline"
            >
              (11) 95173-1751
            </a>
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-sage-green"
            >
              {SITE_CONFIG.instagram}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-warm-beige-dark/30 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
