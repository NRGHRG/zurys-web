import { env } from "@/lib/env";

export function isAllowedOrigin(origin: string | null) {
  if (!origin) return false;

  const allowedOrigins = [env.NEXT_PUBLIC_APP_URL];
  return allowedOrigins.includes(origin);
}
