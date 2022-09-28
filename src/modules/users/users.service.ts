import {
  Injectable,
  Inject,
  NotFoundException,
  HttpCode,
  InternalServerErrorException,
  BadRequestException
} from '@nestjs/common'
import { Users } from '../../core/models/users.js'
import { CreateUserDto } from './dto/create-user.dto'
// import { USER_REPOSITORY } from '../../core/constants';
import { User } from 'src/core/models/users.model'
import { UpdateUserDto } from './dto/update-user.dto.js'

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private readonly userRepository: typeof User
  ) {}

  async create(user: CreateUserDto) {
    try {
      await this.userRepository.create<Users>(user)
      return { statusCode: 200, message: 'Created Successfully' }
    } catch (e) {
      console.log(e)
      throw new InternalServerErrorException('Internal server error')
    }
  }

  async findOneById(id: number): Promise<User> {
    if (!id || id == undefined) throw new BadRequestException("Can't find User")
    try {
      const result = await this.userRepository.findOne<Users>({ where: { id } })
      if (!result) throw new NotFoundException('This user is not found')
      return result
    } catch (e) {
      console.log(e)
      throw new InternalServerErrorException('Internal server error')
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const result = await this.userRepository.findAll<User>()
      return result
    } catch (e) {
      console.log(e)
      throw new InternalServerErrorException('Internal server error')
    }
  }

  async update(id: number, body: UpdateUserDto) {
    if (!id || id == undefined || body) throw new BadRequestException("Can't update User")
    try {
      await this.findOneById(id)
      this.userRepository.update<Users>(body, { where: { id } })
      return { statusCode: 200, message: 'Updated Successfully' }
    } catch (e) {
      console.log(e)
      throw new InternalServerErrorException('Internal server error')
    }
  }

  async delete(id: number) {
    if (!id || id == undefined) throw new BadRequestException("Can't delete User")
    try {
      await this.findOneById(id)
      await this.userRepository.destroy({ where: { id } })

      return { statusCode: 200, message: 'Deleted Successfully' }
    } catch (e) {
      console.log(e)
      throw new InternalServerErrorException('Internal Server Error')
    }
  }
}

// @Injectable()
// export class UsersService {
//   constructor(
//     @Inject('USERS_REPOSITORY')
//     private readonly usersRepository: typeof User
//   ) { }

//   async create(user: CreateUserDto): Promise<User> {
//     return await this.usersRepository.create<User>(user);
//   }

//   async findAll(): Promise<User[]> {
//     return await this.usersRepository.findAll<User>();
//   }

//   async findOne(id:string): Promise<User> {
//     return await this.usersRepository.findOne<User>({ where: { id } });
//   }

//   async update(id:string,body:UpdateUserDto) {
//     return await this.usersRepository.update<User>(body,{where : {id}})
//   }

//   async remove(id:string) {
//     const user = await this.findOne(id);
//     if(!user){
//       throw new NotFoundException('This user is not found.')
//     }
//     return await this.usersRepository.destroy({where : {id}})
//   }
// }
