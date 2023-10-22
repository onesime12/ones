import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsEmpty,
} from 'class-validator';
import { Category } from '../schemas/book.schema';
import { User } from '../../auth/scheamas/user.schema';

export class createBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(Category, { message: 'Please the correct category.' })
  readonly category: Category;

  @IsEmpty({ message: 'You cannot pass user id.' })
  readonly user: User;
}
