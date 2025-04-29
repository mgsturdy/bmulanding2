"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useRef, useEffect, useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SecuritySection() {
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

  const securityFeatures = [
    "See who's there with voice transcription",
    "Block suspicious callers automatically",
    "Review access history for your apartment",
    "Get alerts for unexpected visitors",
  ];

  return (
    <section id="security" className="bg-security-navy/90 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Enhanced Security for Peace of Mind
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-light-gray">
            Know exactly who's at your door before letting them in
          </p>

          <div ref={ref} className="mt-16 rounded-2xl bg-dark-gray/50 p-6 md:p-8 backdrop-blur-sm border border-white/10 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
              <div 
                className={cn(
                  "md:w-1/2 transition-all duration-700 transform",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                )}
              >
                <h3 className="text-xl font-bold text-accessibility-yellow">Security Example</h3>
                <p className="mt-2 text-extra-light-gray">When someone buzzes your apartment:</p>
                <ul className="mt-4 space-y-3">
                  {securityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icons.Check className="h-5 w-5 shrink-0 text-convenience-blue" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div 
                className={cn(
                  "mt-6 md:mt-0 md:w-1/2 transition-all duration-700 transform",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                )}
              >
                <div className="rounded-xl bg-security-navy/80 p-4 shadow-lg backdrop-blur-sm border border-white/10 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3">
                    <Image
                      src={SITE_CONFIG.logo}
                      alt="Buzz Me Up Logo"
                      width={24}
                      height={24}
                      className="rounded-md"
                    />
                    <p className="font-medium">Suspicious Activity Detected</p>
                  </div>
                  <p className="mt-2 text-sm text-light-gray">
                    "Hi, I'm here to check your water meter" - Unknown Caller
                  </p>
                  <div className="mt-3 rounded-md bg-red-900/20 p-3 text-sm text-red-300 border border-red-500/20">
                    <p className="font-medium">Security Alert:</p>
                    <p>No utility visits scheduled. Visitor not on approved list.</p>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="outline" className="border-dark-gray rounded-full">
                      Verify Identity
                    </Button>
                    <Button size="sm" className="bg-red-500 hover:bg-red-600 rounded-full">
                      Block Caller
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}