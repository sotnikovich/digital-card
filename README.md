# Digital Card — Backend

**Live demo:** https://digital-card-3hsp.onrender.com/graphql (Apollo Sandbox)

**Source code:** https://github.com/sotnikovich/digital-card

> ⚠️ **Про бесплатный тариф Render:** сервис «засыпает» после 15 минут неактивности.
> Первый запрос после пробуждения может занять 30–60 секунд — это нормальное поведение
> free-плана, а не ошибка приложения. Просто подождите и обновите страницу Sandbox.

Backend-приложение «цифровая визитка» на NestJS + GraphQL + Prisma + PostgreSQL.
Предоставляет GraphQL API для получения информации о специалисте: профиль, навыки, опыт работы, проекты.

## Стек
- **NestJS 11** (TypeScript)
- **GraphQL** (code-first, Apollo Server 5 + Apollo Sandbox)
- **Prisma 7** (с драйвером `@prisma/adapter-pg`)
- **PostgreSQL 15**
- **Docker / docker-compose**

## Запуск

### Локально через Docker
```bash
docker-compose up --build