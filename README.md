# CommonGround — Inter-Departmental Planning & Resource Sharing

A full-stack prototype for organization-wide projects, shared inventory, scheduling, and approvals.

## Run locally

```bash
npm install
cp .env.example .env
npm run db:push
npm run db:seed
npm run dev
```

Open http://localhost:3000. Demo sign-in: http://localhost:3000/login. Choose an organization admin, department head, or member role. The dashboard opens with the seeded admin experience by default.

## Included

- Dashboard, organization roadmap, project cards/table, resource hub, request approval center, shared calendar, departments, notifications, analytics, and settings.
- Seeded data for IT, HR, Finance, Marketing, Operations, and Administration.
- Demo sign-in with role claims using Auth.js credentials.
- Prisma-backed SQLite local database, seed data, and JSON API routes for resources, projects, and resource requests.
- Request date/quantity validation and overlap detection with alternative resource suggestions.
- Command search with Ctrl/⌘+K, request/project dialogs, approval actions, filters, responsive sidebar, and charts.

## PostgreSQL

SQLite is configured as the no-setup development default. To use PostgreSQL, update the datasource in `prisma/schema.prisma` to `provider = "postgresql"` (the `DATABASE_URL` variable is already used), set a PostgreSQL URL in `.env`, then run `npm run db:push` and `npm run db:seed`.

## Prototype boundaries

Authentication is demo-only and does not enforce production authorization. UI state actions are in-memory; the REST endpoints and Prisma schema provide the persistence foundation. Before production, enforce role checks on every server mutation and add audit/history relations, uploads, and real email/notification delivery.
