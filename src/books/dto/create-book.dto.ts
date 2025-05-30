import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateBookDto
{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @MinLength(10)
    @MaxLength(2000)
    description:string

@IsString()

}
