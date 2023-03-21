import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

type MonacoType = Document

export interface MonacoFiles {
    [filename: string] : MonacoFileProps
}

interface MonacoFileProps {
    name: string,
    language: string,
    value: string
}

export type InformationDocument = Information & Document

interface fullObject {
    full: MonacoFiles
}



@Schema()
export class Data {
    @Prop()
    name: string;

    @Prop()
    language: string;

    @Prop()
    value: string
}

@Schema()
export class Information { 

    @Prop({type: Data})
    filename: Data;

    // @Prop()
    // value: string;


}

export const InformationSchema = SchemaFactory.createForClass(Information) 