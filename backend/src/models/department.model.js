import { Schema, model } from "mongoose";

const departmentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        collegeId: {
            type: Schema.Types.ObjectId,
            ref: 'College'
        },
        dep_Head: {
            type: String,
            required: true
        }
    }, { timestamps: true }
);

export const Department = model('Department', departmentSchema);
