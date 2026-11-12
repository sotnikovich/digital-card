import { Query, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entities';


@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile, { nullable: true, name: 'profile' }) // 👈 ОБЯЗАТЕЛЬНО
  getProfile() {
    return this.profileService.getProfile();
  }
}