import { Module } from "@nestjs/common";
import {MongooseModule} from '@nestjs/mongoose';
import mongoose from "mongoose";
import { Information, InformationSchema } from "./infromation.schema";
import { InformationController } from "./information.controller";
import { InformationService } from "./information.service";


@Module({
    imports: [MongooseModule.forFeature([{name: Information.name, schema: InformationSchema}])],
    controllers: [InformationController],
    providers: [InformationService]
})

export class InformationModule { }