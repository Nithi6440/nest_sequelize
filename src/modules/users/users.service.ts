import {
  Injectable,
  Inject,
  NotFoundException,
  HttpCode,
  InternalServerErrorException
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

  async create(user: CreateUserDto): Promise<User> {
    return await this.userRepository.create<Users>(user)
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<Users>({ where: { id } })
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>()
  }

  async update(id: number, body: UpdateUserDto) {
    const check = await this.userRepository.findOne<Users>({ where: { id } })
    if (!check) throw new NotFoundException('This user is not found')

    const result = this.userRepository.update<Users>(body, { where: { id } })
    if (!result) throw new InternalServerErrorException('Internal server error')
    return { statusCode: 200, message: 'Updated Successfully' }
  }

  async delete(id: number) {
    const user = await this.findOneById(id)
    if (!user) throw new NotFoundException('This user is not found.')

    const result = await this.userRepository.destroy({ where: { id } })
    if (!result) throw new InternalServerErrorException('Internal Server Error')

    return { statusCode: 200, message: 'Deleted Successfully' }
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
