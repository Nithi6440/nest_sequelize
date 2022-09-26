import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';

@Module({
  imports: [UsersModule,ConfigModule.forRoot({ isGlobal: true}), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     UsersModule,
//     DatabaseModule
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule { }
