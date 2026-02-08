"use client"

import type { ReactNode } from "react"
import { ExternalLinkIcon } from "@/components/social-icons"

interface LinkCardProps {
  href: string
  icon: ReactNode
  label: string
  description?: string
  delay?: number
}

export function LinkCard({ href, icon, label, description, delay = 0 }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:bg-secondary hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <span className="block text-base font-semibold text-foreground tracking-tight">
          {label}
        </span>
        {description && (
          <span className="block text-sm text-muted-foreground mt-0.5 truncate">
            {description}
          </span>
        )}
      </div>
      <ExternalLinkIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}
