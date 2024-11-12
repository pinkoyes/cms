import { Schema, model } from "mongoose";

const branchSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        department: {
            type: Schema.Types.ObjectId,
            ref: 'Department'
        },
        course: {
            type: Schema.Types.ObjectId,
            ref: 'Course'
        },
        college: {
            type: Schema.Types.ObjectId,
            ref: 'College'
        },
        branch_coordinator: {
            type: String,
            required: true
        }
    }, { timestamps: true }
);

export const Branch = model('Branch', branchSchema);
