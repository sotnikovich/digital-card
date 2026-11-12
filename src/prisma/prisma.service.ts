// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // включаем SSL, отключаем проверку сертификата
    });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();

    const count = await this.profile.count();
    if (count === 0) {
      await this.profile.create({
        data: {
          name: 'Максим Сотников',
          description: 'Backend-разработчик',
          githubUrl: 'https://github.com/sotnikovich',
          linkedinUrl:
            'https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D1%81%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-65245b235/',
          skills: {
            create: [
              { name: 'TypeScript' },
              { name: 'Node.js' },
              { name: 'NestJS' },
              { name: 'Prisma' },
              { name: 'GraphQL' },
              { name: 'Docker' },
            ],
          },
          experiences: {
            create: [
              {
                company: 'НПЦ ИРС',
                position: 'Fullstack Developer',
                startDate: new Date('2022-09-19'),
                endDate: null,
                achievements: [
                  'Разбил монолитный сервис на микросервисы',
                  'Внутри рабочего проекта написал свой мессенджер',
                ],
              },
            ],
          },
          projects: {
            create: [
              {
                name: 'Digital Card',
                url: null,
                repoUrl: 'https://github.com/sotnikovich/digital-card',
              },
            ],
          },
        },
      });
      console.log('✅ База данных инициализирована данными визитки');
    }
  }
}
