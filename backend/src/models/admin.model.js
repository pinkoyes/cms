import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

const adminSchema = new Schema(
    {
        adminName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            match: /^\S+@\S+\.\S+$/,
            unique: true,
            minLength: 5
        },
        phoneNumber: {
            type: String,
            required: true,
            trim: true,
            minLength: 10,
            match: /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
            unique: true,
        },
        hashPassword: {
            type: String,
            required: true,
            trim: true,
            minLength: 6,
        },
    },  { timestamps: true }
);

adminSchema.pre('save', async function (next) {
    if (!this.isModified('hashPassword')) return next();
    this.hashPassword = await bcrypt.hash(this.hashPassword, 10);
    next();
});

adminSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.hashPassword);
}

studentSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            role: "admin"
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

export const Admin = model('Admin', adminSchema);
