import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  const Icon = Icons[icon as keyof typeof Icons];

  return (
    <div 
      className={cn(
        "rounded-2xl bg-security-navy/80 p-6 backdrop-blur-sm border border-white/5 hover:border-convenience-blue/20 transition-all duration-300 hover:shadow-md hover:shadow-convenience-blue/10 group",
        className
      )}
    >
      {icon === "Logo" ? (
        <Icons.Logo className="h-10 w-10 text-convenience-blue" />
      ) : (
        <Icon className={cn(
          "h-10 w-10", 
          icon === "Gift" || icon === "CreditCard" 
            ? "text-accessibility-yellow" 
            : "text-convenience-blue"
        )} />
      )}
      <h3 className="mt-4 text-xl font-bold group-hover:text-convenience-blue transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-2 text-light-gray">{description}</p>
    </div>
  );
}