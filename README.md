# Chorus

[![CI](https://github.com/Sharukhh69/Project-Chorus/actions/workflows/ci.yml/badge.svg)](https://github.com/Sharukhh69/Project-Chorus/actions/workflows/ci.yml)

A collaborative monorepo application.

## Structure

- `apps/api`: Fastify API backend
- `apps/web`: Frontend application
- `packages/shared`: Shared types and utilities
- `infra`: Local services (PostgreSQL, Redis via Docker Compose)

## Getting Started

### 1. Prerequisites
- Node.js (v22+)
- pnpm (v11+)
- Docker & Docker Compose

### 2. Local Infrastructure
```bash
docker compose -f infra/docker-compose.yml up -d
```

### 3. API Service
```bash
# Setup environment
cp apps/api/.env.example apps/api/.env

# Run development server
pnpm --filter api dev

# Run tests
pnpm --filter api test

# Typecheck
pnpm --filter api typecheck
```
