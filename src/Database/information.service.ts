import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Information, InformationDocument, MonacoFiles } from "./infromation.schema";
import { Model } from "mongoose";


@Injectable()
export class InformationService {

    constructor(@InjectModel(Information.name) private informationModel: Model<InformationDocument>) { }

    async createNew(infoObject: MonacoFiles): Promise<Information>{

        // return await this.informationModel.create(infoObject);
        return await this.informationModel.create({value: 'string'})

    }

    async GetOne(id: string): Promise<Information> {


        return;

    }


}

