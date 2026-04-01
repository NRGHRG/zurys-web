# Zurys Web — Premium Coffee & Pastry Experience

Sitio profesional para **Zurys** (cafetería y pastelería premium en Maipú), construido con:

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Prisma ORM
- PostgreSQL

## Concepto y objetivo

Este proyecto está diseñado para posicionar a Zurys como una marca gastronómica:

- cálida
- premium
- moderna
- confiable

con foco en conversión (pedidos/reservas/contacto), experiencia visual cuidada y base escalable para administración.

## Mapa de páginas

- `/` Inicio
- `/nosotros`
- `/carta`
- `/tortas-pasteleria`
- `/cafeteria`
- `/promociones`
- `/pedidos-reservas`
- `/contacto`
- `/preguntas-frecuentes`
- `/admin` (estructura base)

## Funcionalidades implementadas

- Hero premium con CTAs clave
- Catálogo de productos con:
  - categorías
  - buscador
  - filtros
  - destacados
- Sección de reseñas
- Ubicación con mapa embebido
- Horarios visibles
- CTA flotante de WhatsApp
- Newsletter visual (estructura)
- Formularios de contacto y reservas conectados a API

## Seguridad aplicada

- Headers de seguridad en `next.config.ts` (CSP, HSTS, etc.)
- Hardening de request en `proxy.ts` (request-id + bloqueo TRACE/TRACK)
- Validación estricta con Zod en frontend/backend
- Sanitización de inputs antes de persistir
- Verificación de origen en endpoints de mutación (`Origin` allowlist)
- Manejo controlado de errores en APIs
- Variables de entorno validadas con Zod

## SEO técnico

- Metadata global optimizada (es_CL + Open Graph)
- `robots.ts`
- `sitemap.ts`
- Arquitectura de rutas limpia para indexación

## Estructura de carpetas

```text
src/
├─ app/
│  ├─ api/
│  │  ├─ contact/route.ts
│  │  └─ reservations/route.ts
│  ├─ admin/
│  ├─ cafeteria/
│  ├─ carta/
│  ├─ contacto/
│  ├─ nosotros/
│  ├─ pedidos-reservas/
│  ├─ promociones/
│  ├─ preguntas-frecuentes/
│  ├─ tortas-pasteleria/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ catalog/
│  ├─ conversion/
│  ├─ forms/
│  ├─ layout/
│  ├─ sections/
│  └─ ui/
├─ config/
├─ lib/
│  ├─ auth/
│  ├─ data/
│  ├─ security/
│  └─ validations/
```

## Configuración de entorno

1. Copiar variables:

```bash
copy .env.example .env
```

2. Configurar valores:

- `DATABASE_URL`
- `NEXT_PUBLIC_APP_URL` (ej. `http://localhost:3000`)

## Comandos

```bash
npm install
npm run prisma:generate
npm run dev
```

Calidad:

```bash
npm run lint
npm run typecheck
```

Prisma:

```bash
npm run prisma:migrate
npm run prisma:studio
```

## Próximos pasos recomendados

1. Integrar autenticación admin (Auth.js + Prisma adapter + roles).
2. Implementar CRUD real en `/admin` (productos, reservas, mensajes).
3. Conectar catálogo y contenido a base de datos (reemplazar seed local).
4. Añadir rate limiting y anti-bot (captcha/honeypot) en formularios.
