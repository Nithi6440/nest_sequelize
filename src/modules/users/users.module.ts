import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { usersProviders } from './user.providers'
import { UsersController } from './users.controller'
import { DatabaseModule } from 'src/core/database/database.module'

@Module({
  imports:[DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
  // exports: [UsersService]
})
export class UsersModule {}
