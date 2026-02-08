"use client"

import {
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
  YouTubeIcon,
  SpotifyIcon,
} from "@/components/social-icons"

const socialLinks = [
  { href: "https://instagram.com", icon: InstagramIcon, label: "Instagram" },
  { href: "https://twitter.com", icon: TwitterIcon, label: "X / Twitter" },
  { href: "https://linkedin.com", icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://youtube.com", icon: YouTubeIcon, label: "YouTube" },
  { href: "https://spotify.com", icon: SpotifyIcon, label: "Spotify" },
]

export function SocialFooter() {
  return (
    <footer className="flex flex-col items-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
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
      <p className="text-xs text-muted-foreground/60 font-mono">
        &copy; {new Date().getFullYear()} &middot; Feito com carinho
      </p>
    </footer>
  )
}
