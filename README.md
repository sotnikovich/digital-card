# Digital Card — Backend

Backend-приложение «цифровая визитка» на NestJS + GraphQL + Prisma + PostgreSQL.
Предоставляет GraphQL API для получения информации о специалисте: профиль, навыки, опыт работы, проекты.

## Стек
- **NestJS 11** (TypeScript)
- **GraphQL** (code-first, Apollo Server 5 + Apollo Sandbox)
- **Prisma 7** (с драйвером `@prisma/adapter-pg`)
- **PostgreSQL 15**
- **Docker / docker-compose**

## Запуск

```bash
docker-compose up --build