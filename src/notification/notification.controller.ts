import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './dto/create-notification-body';

@Controller('notification')
export class NotificationController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, category, content } = body;

    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId: recipientId,
      },
    });
  }
}
