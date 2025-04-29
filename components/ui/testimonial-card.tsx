import Image from "next/image";
import { Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface TestimonialCardProps {
  text: string;
  author: string;
  location: string;
  rating: number;
}

export function TestimonialCard({ text, author, location, rating }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl bg-security-navy/80 p-6 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center gap-1 text-accessibility-yellow">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-light-gray flex-grow">{text}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-dark-gray flex items-center justify-center">
          <Image
            src={SITE_CONFIG.logo}
            alt={SITE_CONFIG.name}
            width={20}
            height={20}
            className="rounded-sm opacity-50"
          />
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-extra-light-gray">{location}</p>
        </div>
      </div>
    </div>
  );
}