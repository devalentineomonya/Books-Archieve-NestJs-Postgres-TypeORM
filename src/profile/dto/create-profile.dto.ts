import { IsString, IsDateString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
user_id:string

  @IsString()
  bio: string;

  @IsString()
  avatar: string;

  @IsDateString()
  dateOfBirth: Date;
}
