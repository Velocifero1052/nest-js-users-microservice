import { Controller } from '@nestjs/common';
import { CreateUserDto} from './dtos/create-user.dto';
import { EventPattern, MessagePattern, Payload} from '@nestjs/microservices';

@Controller()
export class UsersMicroserviceController {
  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    console.log('Message received in controller: ');
    console.log(data);
    console.log('--------------------------------');
    return data;
  }

  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data: any) {
    console.log('payment created in users microservice event data: -');
    console.log(data);
    console.log('-----------------------------');
  }
}
