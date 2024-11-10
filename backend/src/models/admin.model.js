import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const collegeAdminSchema = new Schema(
    {
        name: {
            first: {
                type: String,
                required: [true, "first name is required"],
                trim: true,
                match: [/^[A-Za-z]+$/, "only english alphabate"],
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
                match: [/^[A-Za-z]+$/, "only english alphabate"],
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
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "not valid email"]
        },
        password: {
            type: String,
            required: [true, "password field is required"],
            minlength: 6,
            select: false
        },
        refreshToken: {
            type: String,
            select: false
        }
    },
    { timestamps: true }
);

collegeAdminSchema.pre('save', async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

collegeAdminSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

collegeAdminSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email
        },
        process.env.ADMIN_ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ADMIN_ACCESS_TOKEN_EXPIRY
        }
    )
}

collegeAdminSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.ADMIN_REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.ADMIN_REFRESH_TOKEN_EXPIRY
        }
    )
}


export const CollegeAdmin = model('CollegeAdmin', collegeAdminSchema);
