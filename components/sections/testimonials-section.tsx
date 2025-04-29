"use client";

import { useRef, useEffect, useState } from "react";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
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
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">What Our Users Say</h2>
        <div ref={ref} className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                {
                  "transition-delay-100": index === 0,
                  "transition-delay-300": index === 1,
                  "transition-delay-500": index === 2,
                }
              )}
            >
              <TestimonialCard
                text={testimonial.text}
                author={testimonial.author}
                location={testimonial.location}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}