"use client";

import Image from "next/image";
import { DoorOpen, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function Step({ icon, title, description, index }: StepProps) {
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
    <div 
      ref={ref}
      className={cn(
        "flex flex-col items-center text-center transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        { "transition-delay-100": index === 0 },
        { "transition-delay-300": index === 1 },
        { "transition-delay-500": index === 2 }
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-convenience-blue/90 text-white shadow-lg shadow-convenience-blue/20 hover:scale-105 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-light-gray">{description}</p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-security-navy/90 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-light-gray">
          Three simple steps to upgrade your intercom experience
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Step
            icon={<Phone className="h-8 w-8" />}
            title="Get Your Number"
            description="Sign up and receive a custom phone number for your building's intercom"
            index={0}
          />
          <Step
            icon={<Image src={SITE_CONFIG.logo} alt="Buzz Me Up Logo" width={32} height={32} className="rounded-md" />}
            title="Connect Your Buzzer"
            description="Assign your new number to your building buzzer - no hardware changes needed"
            index={1}
          />
          <Step
            icon={<DoorOpen className="h-8 w-8" />}
            title="Manage Access"
            description="Control who gets in through the app with notifications and remote access"
            index={2}
          />
        </div>
      </div>
    </section>
  );
}