import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}
  create(createProfileDto: CreateProfileDto) {
    return this.profileRepository.save(createProfileDto);
  }

  findAll() {
    return this.profileRepository.find();
  }

  findOne(id: string) {
    return this.profileRepository.findOneBy({ id });
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const profile = this.profileRepository.findOneBy({ id });
    if (!!profile)
      throw new NotFoundException('User with the specified id was not found');
    return this.profileRepository.update(id, updateProfileDto).then(() => {
      return this.findOne(id);
    });
  }

  remove(id: string) {
    return this.profileRepository.delete(id).then(() => {
      return { deleted: true };
    });
  }
}
