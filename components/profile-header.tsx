"use client"

import Image from "next/image"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center opacity-0 animate-fade-in-up">
      <div className="relative mb-6">
        <div className="absolute -inset-1 rounded-full bg-primary/20 blur-md" />
        <Image
          src="/avatar.jpg"
          alt="Foto de perfil"
          width={120}
          height={120}
          className="relative rounded-full border-2 border-primary/30 object-cover"
          priority
        />
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
        Ana Carolina
      </h1>
      <p className="mt-1 font-mono text-sm text-primary">
        @anacarolina
      </p>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
        Criadora de conteudo, designer e apaixonada por tecnologia. Conecte-se comigo!
      </p>
    </div>
  )
}
