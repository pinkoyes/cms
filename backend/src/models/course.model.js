import { Schema, model } from "mongoose";

const courseSchema = new Schema(
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
        credits: {
            type: String,
            required: true,
        },
        department: {
            type: Schema.Types.ObjectId,
            ref: 'Department'
        },
        collegeId: {
            type: Schema.Types.ObjectId,
            ref: 'College'
        },
        course_year: {
            type: Number,
            default: 1,
            required: true
        }
    }, { timestamps: true }
);

export const Course = model('Course', courseSchema);
