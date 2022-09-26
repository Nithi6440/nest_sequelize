import { Injectable, Inject } from '@nestjs/common';
// import { Users } from '../../core/models/users.js';
import { CreateUserDto } from './dto/create-user.dto';
// import { USER_REPOSITORY } from '../../core/constants';
import { User } from 'src/core/models/users.model';

@Injectable()
export class UsersService {

    constructor(@Inject('USERS_REPOSITORY') private readonly usersRepository: typeof User) { }

    // async create(user: CreateUserDto): Promise<User> {
    //     return await this.userRepository.create<Users>(user);
    // }

    // async findOneById(id: number): Promise<User> {
    //     return await this.userRepository.findOne<Users>({ where: { id } });
    // }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.findAll<User>();
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
