"use client";

import {
  InstagramIcon,
  SpotifyIcon,
  WhatsAppIcon,
  EmailIcon,
} from "@/components/social-icons";
import { assetPath } from "@/lib/utils";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://wa.me/5598991328659",
    icon: WhatsAppIcon,
    label: "WhatsApp",
  },
  {
    href: "https://instagram.com/deborae.fisio/",
    icon: InstagramIcon,
    label: "Instagram",
  },
  { href: "mailto:contato@defisio.com", icon: EmailIcon, label: "Email" },
  // { href: "https://spotify.com", icon: SpotifyIcon, label: "Spotify" },
];

export function SocialFooter() {
  return (
    <footer
      className="flex flex-col items-center gap-6 opacity-0 animate-fade-in-up"
      style={{ animationDelay: "800ms" }}
    >
      <div className="flex items-center gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-secondary hover:scale-110"
          >
            <link.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
      <Image
        src={assetPath("/DE-Reduzida-Typo-Branco.png")}
        alt="Foto de perfil"
        width={250}
        height={250}
        // className="relative rounded-full border-2 border-primary/30 object-cover"
        priority
      />
    </footer>
  );
}
