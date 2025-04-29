import { DoorOpen, Users, MessageSquareText, Gift, CreditCard, Phone, Star, Check, Menu } from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export const Icons = {
  Logo: ({ className }: { className?: string }) => (
    <Image
      src={SITE_CONFIG.logo}
      alt={SITE_CONFIG.name}
      width={32}
      height={32}
      className={`rounded-md ${className}`}
    />
  ),
  DoorOpen,
  Users,
  MessageSquareText,
  Gift,
  CreditCard,
  Phone,
  Star,
  Check,
  Menu,
};