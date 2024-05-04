import mongoose from "mongoose";
export interface Userinterface {
    username: string;
    fullname: string;
    email: string;
    password: string;
    profileImg: string;
};
export interface UserDocument extends Userinterface , mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema<UserDocument>({
    username: {type: String, required: true, unique: true},
    fullname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profileImg: {type: String, default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"}

},{timestamps: true});

export const UserModel: mongoose.Model<UserDocument> = mongoose?.models?.User || mongoose.model("User", userSchema);