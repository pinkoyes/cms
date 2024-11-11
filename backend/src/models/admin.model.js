import { Schema, model } from "mongoose";
import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";

const collegeAdminSchema = new Schema(
    {
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
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
            minlength: 5
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
        role: {
            type: String,
            enum: ['college-admin', 'depertment-head', 'register', 'adminssion-cell', 'faculty-member'],
            required: true,
        },
        permission: {
            type: [String],
            enum: ['dashboard', 'manage-students', 'manage-courses', 'manage-depertment', 'manage-faculty', 'view-reports'],
            default: ['dashboard']
        },
        refreshToken: {
            type: String
        }
    }, 
    { timestamps: true }
);

collegeAdminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

collegeAdminSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

collegeAdminSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

collegeAdminSchema.methods.generateRefreshToken = function () {
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

export const CollegeAdmin = model('CollegeAdmin', collegeAdminSchema);