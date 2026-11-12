import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Skill } from './skill.entity';
import { Experience } from './experience.entity';
import { Project } from './project.entity';


@ObjectType() // 👈 ОБЯЗАТЕЛЬНО
export class Profile {
  @Field(() => Int) // 👈 у КАЖДОГО поля
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  githubUrl?: string;

  @Field({ nullable: true })
  linkedinUrl?: string;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experiences: Experience[];

  @Field(() => [Project])
  projects: Project[];
}