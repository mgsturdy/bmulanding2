"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-security-navy to-brand-black opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(28,112,232,0.15),transparent_50%)]"></div>
      
      <div 
        className={cn(
          "container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8 transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Upgrade Your Intercom</span>
            <span className="block text-convenience-blue">Without Changing Hardware</span>
          </h1>
          <p className="mt-6 text-xl text-extra-light-gray md:text-2xl">
            Turn your outdated building intercom into a smart system. No landlord permission needed.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#download">
              <Image
                src="/images/AppStore-logo-1.png"
                alt="Download on App Store"
                width={200}
                height={60}
                className="h-[60px] w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <Button
              variant="outline"
              className="border-convenience-blue text-convenience-blue hover:bg-convenience-blue hover:text-white rounded-full transition-colors duration-300"
            >
              30-Day Free Trial
            </Button>
          </div>
        </div>
      </div>
      
      <div 
        className={cn(
          "container relative z-10 mx-auto mt-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="mx-auto flex max-w-4xl justify-center">
          <div className="relative w-[280px] md:w-[320px]">
            <div className="rounded-[2.5rem] bg-security-navy/80 p-4 shadow-2xl backdrop-blur-sm border border-white/10 animate-float">
              <Image
                src="/images/screenshot1.png"
                alt="Buzz Me Up App Screenshot"
                width={300}
                height={600}
                className="rounded-[2rem]"
              />
            </div>
            <div className="absolute -right-20 top-1/4 rounded-2xl bg-security-navy/80 p-3 shadow-lg backdrop-blur-sm border border-white/10 animate-pulse-glow">
              <div className="rounded-xl bg-dark-gray/90 p-3">
                <Image
                  src={SITE_CONFIG.logo}
                  alt="Buzz Me Up Logo"
                  width={24}
                  height={24}
                  className="rounded-md"
                />
                <p className="mt-2 text-sm font-medium">Delivery person at door</p>
                <p className="text-xs text-extra-light-gray">"I have a package for apartment 3B"</p>
                <div className="mt-2 flex gap-2">
                  <Button
                    size="sm"
                    className="bg-convenience-blue text-white hover:bg-convenience-blue/90 rounded-full"
                  >
                    Buzz In
                  </Button>
                  <Button size="sm" variant="outline" className="border-dark-gray rounded-full">
                    Ignore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}