import {Document, model, Schema} from "mongoose";

export interface UserModel {
    nickname: string;
    telegram_id: number;
    count: number;

    [key: string]: any
}

export interface UserDocument extends UserModel, Document {
}

const userSchema = new Schema<UserDocument>({
    nickname: {
        type: String,
        required: true
    },
    telegram_id: {
        type: Number,
        required: true,
    },
    count: {
        type: Number,
        required: false,
        default: 0
    },
});

export const userModel = model<UserDocument>('User', userSchema);