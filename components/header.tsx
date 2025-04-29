"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { SITE_CONFIG, NAVIGATION_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-40 w-full border-b border-security-navy/50 backdrop-blur transition-all duration-300",
        isScrolled ? "bg-brand-black/95 shadow-md" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={SITE_CONFIG.logo}
            alt={`${SITE_CONFIG.name} Logo`}
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
        </div>
        
        <nav className="hidden md:flex gap-6">
          {NAVIGATION_LINKS.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium hover:text-convenience-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="hidden sm:flex bg-convenience-blue text-white hover:bg-convenience-blue/90 rounded-full">
            Download App
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icons.Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-brand-black/95 border-b border-security-navy/50 shadow-lg backdrop-blur animate-in slide-in-from-top">
          <div className="container py-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="block py-2 text-sm font-medium hover:text-convenience-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="mt-4 w-full bg-convenience-blue text-white hover:bg-convenience-blue/90 rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download App
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}