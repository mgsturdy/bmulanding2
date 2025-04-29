import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-security-navy/50 bg-brand-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={SITE_CONFIG.logo}
                alt={`${SITE_CONFIG.name} Logo`}
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="mt-2 text-sm text-light-gray">
              {SITE_CONFIG.description}
            </p>
          </div>
          
          <div>
            <h3 className="font-medium">Product</h3>
            <ul className="mt-4 space-y-2 text-sm text-light-gray">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-convenience-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium">Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-light-gray">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-convenience-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm text-light-gray">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-convenience-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-security-navy/50 pt-8 text-center text-sm text-light-gray">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}