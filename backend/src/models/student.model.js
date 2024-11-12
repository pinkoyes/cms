import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const studentSchema = new Schema(
    {
        // basic information

        firstName: {
            type: String,
            required: true,
            trim: true,
            match: [/^[A-Za-z]+$/, "enter valid first name"],
            minlength: 3,
            maxlength: 19
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            match: [/^[A-Za-z]+$/, "enter valid last name"],
            minlength: 3,
            maxlength: 19
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
        },
        phoneNumber: {
            type: String,
            required: true,
            match: [/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/, 'Please provide a valid phone number'],
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 6,
            select: false
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: [true, "gender is required field"],
            trim: true
        },
        nationality: {
            type: String,
            required: [true, "nationality is required field"],
            trim: true
        },

        // Address Information

        address: {
            type: Schema.Types.ObjectId,
            ref: 'Address'
        },
        
        // Academic Information

        college: {
            type: Schema.Types.ObjectId,
            ref: 'College',
            required: true
        },
        studentId: {
            type: String,
            required: true,
            unique: true
        },
        rollNumber: {
            type: String,
            required: true,
            unique: true,
        },
        enrollmentDate: {
            type: Date,
            default: Date.now,
        },
        department: {
            type: Schema.Types.ObjectId,
            ref: 'Department'
        },
        course: {
            type: Schema.Types.ObjectId,
            ref: 'Course'
        },
        branch: {
            type: Schema.Types.ObjectId,
            ref: 'Branch'
        },
        cgpa: {
            type: Number,
            min: 0,
            max: 10,
            default: 0,
        },
        totalBackLogs: {
            type: Number,
            default: 0
        },
        backlogsCleared: {
            type: Number,
            default: 0
        },

        // Enrollment Status

        status: {
            type: String,
            enum: ['Active', 'Graduated', 'Suspended', 'Dropped Out', 'Expelled'],
            default: 'Active',
        },

        // Additional Information

        isInternational: {
            type: Boolean,
            default: false
        },
        profilePicture: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
            select: false
        }
    }, 
    { timestamps: true }
);

studentSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

studentSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, thsi.password);
}

studentSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            role: "student"
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

studentSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const Student = model('Student', studentSchema);
