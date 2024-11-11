import { Schema, model } from "mongoose";

// Address sub-schema

const addressSchema = new Schema(
    {
        street: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true,
        },
        state: {
            type: String,
            required: true,
            trim: true
        },
        zip: {
            type: String,
            required: true,
            match: [/^\d{5}(-\d{4})?$/, 'Please enter a valid zip code'],
        },
        country: {
            type: String,
            required: true,
            trim: true
        }
    }, { _id: false }
);

const collegeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: [3, "college name must have 3 characters long"],
            maxlength: [150, "college name cannot exceed 150 characters"],
            match: [/^[A-Za-z0-9\s\-,.']+$/, 'Invalid characters in college name']
        },
        establishedYear: {
            type: Number,
            required: true,
            min: [1800, "Established year cannot be before 1800"],
            max: [new Date.getFullYear(), "Established year cannot be in the future"]
        },
        address: {
            type: addressSchema,
            required: true
        },
        website: {
            type: String,
            trim: true,
            required: true,
            match: [/^https?:\/\/[^\s]+$/, 'Please enter a valid URL'],
        },
        phoneNumber: {
            type: [String],
            required: true,
            match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number']
        },
        email: {
            type: [String],
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address']
        },
        logo: {
            type: String,
            trim: true,
            required: true
        },
        ranking: {
            type: Number,
            min: [1, 'Ranking must be a positive number'],
            max: [1000, 'Ranking is too high'],
            required: true,
        },
        
    }
)