# Admin authentication plan (prepared)

This project is prepared to add secure admin authentication with the following approach:

1. Add NextAuth/Auth.js with Prisma adapter.
2. Use role-based access (`ADMIN`, `STAFF`) in DB.
3. Protect `/admin` routes with server-side checks (do not rely only on proxy).
4. Add CSRF protection to all mutating admin endpoints.
5. Enforce secure cookies, short session TTL, and login rate limits.
