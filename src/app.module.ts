import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InformationModule } from './Database/information.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    InformationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
