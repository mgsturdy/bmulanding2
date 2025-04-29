"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function DownloadCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="download" className="py-20">
      <div 
        ref={ref}
        className={cn(
          "container mx-auto px-4 text-center sm:px-6 lg:px-8 transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Upgrade Your Intercom?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-light-gray">
          Download Buzz Me Up today and experience the future of building access. No hardware changes required.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="#download" className="hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/AppStore-logo-1.png"
              alt="Download on App Store"
              width={200}
              height={60}
              className="h-[60px] w-auto"
            />
          </Link>
          <Button
            variant="outline"
            className="border-convenience-blue text-convenience-blue hover:bg-convenience-blue hover:text-white rounded-full transition-colors duration-300"
          >
            30-Day Free Trial
          </Button>
        </div>
        <p className="mt-6 text-sm text-light-gray">
          Works with any phone-based intercom system. Available for iOS devices. Android coming soon.
        </p>
      </div>
    </section>
  );
}