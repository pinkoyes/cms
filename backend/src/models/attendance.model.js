import { Schema, model } from "mongoose";

const attendanceSchema = new Schema(
    {
        studentId: {
            type: Schema.Types.ObjectId,
            ref: 'Student'
        },
        department: {
            type: Schema.Types.ObjectId,
            ref: 'Department'
        },
        branch: {
            type: Schema.Types.ObjectId,
            ref: 'Branch'
        },
        course: {
            type: Schema.Types.ObjectId,
            ref: 'Course'
        },
        date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ['Present', 'Absent', 'Late', 'Excused'],
            required: true
        },
        remark: {
            type: String,
            default: ''
        }
    }, { timestamps: true }
);

export const Attendance = model('Attendance', attendanceSchema);
