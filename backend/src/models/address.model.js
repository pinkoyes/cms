import { Schema, model } from "mongoose";

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
    }, { timestamps: true }
);

export const Address = model('Address', addressSchema);
