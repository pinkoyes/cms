import { Schema, model } from "mongoose";

const studentSchema = new Schema(
    {
        name: {
            first: {
                type: String,
                required: [true, "first name is required"],
                trim: true,
                match: [/^[A-Za-z]+$/, "first should be in english alphabate only"],
                minlength: 3,
                maxlength: 19
            },
            middle: {
                type: String,
                trim: true,
                default: null
            },
            last: {
                type: String,
                trim: true,
                required: [true, "last name is required"],
                match: [/^[A-Za-z]+$/, "last should be in english alphabate only"],
                minlength: 3,
                maxlength: 19
            }
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            minlength: 3,
            lowercase: true,
            required: [true, "email field is required"],
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email"]
        },
        password: {
            type: String,
            required: [true, "Password field is required"],
            minlength: 6,
            select: false
        },
        rollNumber: {
            type: String,
            trim: true,
            unique: true,
            required: [true, "Roll Number is required"],
        },
        phoneNumber: [
            {
                
            }
        ]
    },
    { timestamps: true }
)

export const Student = model('Student', studentSchema);
