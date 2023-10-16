import {UserDocument, UserModel, userModel} from "@src/models/user-model";

export class UsersRepository {
    constructor() {
    }

    public static async createUser(data: Partial<UserModel>): Promise<UserDocument | null> {
        return userModel.create(data);
    }

    public static async getUser(data: Partial<UserModel>): Promise<UserDocument | null> {
        return userModel.findOne(data).exec();
    }

    public static async updateUser(user: Partial<UserModel>, data: Partial<UserModel>): Promise<UserModel | null> {
        return userModel.findOneAndUpdate(user, data, {new: true}).exec();
    }

    public static async deleteUser(user: Partial<UserModel>): Promise<UserModel | null> {
        return userModel.findOneAndDelete(user).exec();
    }
}