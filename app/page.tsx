import { ProfileHeader } from "@/components/profile-header"
import { LinkCard } from "@/components/link-card"
import { SocialFooter } from "@/components/social-footer"
import {
  WhatsAppIcon,
  InstagramIcon,
  EmailIcon,
  YouTubeIcon,
  TikTokIcon,
  GlobeIcon,
  SpotifyIcon,
} from "@/components/social-icons"

const links = [
  {
    href: "https://wa.me/5511999999999",
    icon: <WhatsAppIcon className="h-5 w-5" />,
    label: "WhatsApp",
    description: "Fale comigo diretamente",
  },
  {
    href: "https://instagram.com",
    icon: <InstagramIcon className="h-5 w-5" />,
    label: "Instagram",
    description: "@anacarolina",
  },
  {
    href: "mailto:contato@anacarolina.com",
    icon: <EmailIcon className="h-5 w-5" />,
    label: "E-mail",
    description: "contato@anacarolina.com",
  },
  {
    href: "https://youtube.com",
    icon: <YouTubeIcon className="h-5 w-5" />,
    label: "YouTube",
    description: "Meu canal de videos",
  },
  {
    href: "https://tiktok.com",
    icon: <TikTokIcon className="h-5 w-5" />,
    label: "TikTok",
    description: "Conteudo rapido e divertido",
  },
  {
    href: "https://spotify.com",
    icon: <SpotifyIcon className="h-5 w-5" />,
    label: "Spotify",
    description: "Minhas playlists favoritas",
  },
  {
    href: "https://meusite.com",
    icon: <GlobeIcon className="h-5 w-5" />,
    label: "Meu Site",
    description: "Portfolio e projetos",
  },
]

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start px-4 py-12 sm:py-16">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, hsl(168 70% 50%) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-md flex-col gap-8">
        <ProfileHeader />

        <nav className="flex flex-col gap-3" aria-label="Links de contato e redes sociais">
          {links.map((link, index) => (
            <LinkCard
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
              description={link.description}
              delay={200 + index * 80}
            />
          ))}
        </nav>

        <SocialFooter />
      </div>
    </main>
  )
}
