import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Adiciona o basePath dinamicamente a um caminho de asset
 * Funciona tanto em desenvolvimento (sem basePath) quanto em produção (com basePath)
 */
export function assetPath(path: string): string {
  // Em desenvolvimento, o basePath normalmente não é usado
  // Em produção/build, o basePath é adicionado automaticamente pelo Next.js
  // Mas para casos específicos onde precisamos construir URLs manualmente:

  // Se o path já começar com http:// ou https://, retorna como está
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Garante que o path comece com /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Verifica se existe basePath nas variáveis de ambiente ou configuração
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

  return `${basePath}${normalizedPath}`;
}
