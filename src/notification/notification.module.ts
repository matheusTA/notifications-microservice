import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NotificationController } from './notification.controller';

@Module({
  controllers: [NotificationController],
  providers: [PrismaService],
})
export class NotificationModule {}
