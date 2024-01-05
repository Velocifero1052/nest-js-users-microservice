import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './usersMicroserviceController';

@Module({
  imports: [],
  controllers: [UsersMicroserviceController],
  providers: [],
})
export class UsersModule {}