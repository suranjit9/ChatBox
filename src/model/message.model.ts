import mongoose, { PopulatedDoc, Types } from "mongoose";
import { UserDocument } from "./user.model";

export interface messageinterface {
    senderId: Types.ObjectId | PopulatedDoc<UserDocument>;
    receiverId: Types.ObjectId | PopulatedDoc<UserDocument>;
    content: string;
    messageType: "text" | "image";
    open: boolean;
}
export interface messageDocument extends  messageinterface, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const messageSchema = new mongoose.Schema<messageDocument>({
    senderId : {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    receiverId : {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    content : {type: String, required: true},
    messageType : {type: String, required: true, enum: ["text", "image"]},
    open:{type:Boolean, default: false}

},{timestamps: true});