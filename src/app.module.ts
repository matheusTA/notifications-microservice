import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [NotificationModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
