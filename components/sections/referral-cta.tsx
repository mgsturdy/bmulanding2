"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ReferralCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="referral" className="bg-security-navy/90 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={cn(
            "mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-black to-security-navy p-8 text-center md:p-12 border border-white/5 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-convenience-blue/20 animate-pulse-glow">
            <Icons.Logo className="h-8 w-8" />
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">Join Our Invite-Only Program</h2>
          <p className="mx-auto mt-4 max-w-xl text-light-gray">
            Get exclusive discounts when you refer friends to Buzz Me Up. Enter your email to join our referral
            program.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-dark-gray/50 border-dark-gray text-white placeholder:text-light-gray rounded-full focus:border-convenience-blue transition-colors duration-300"
              required
            />
            <Button 
              type="submit"
              className={cn(
                "bg-convenience-blue text-white hover:bg-convenience-blue/90 rounded-full transition-all duration-300",
                isSubmitting ? "opacity-70 cursor-wait" : "",
                isSuccess ? "bg-green-500 hover:bg-green-600" : ""
              )}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : isSuccess ? "Joined!" : "Join Now"}
            </Button>
          </form>
          <p className="mt-4 text-xs text-extra-light-gray">
            We'll send you an invite code to share with friends. Each successful referral earns you and your friend
            a free month.
          </p>
        </div>
      </div>
    </section>
  );
}