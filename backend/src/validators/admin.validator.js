import { object, string, minLength, maxLength, pattern, literal, union, optional, email, value } from "valibot";

export const collegeAdminSchema = object({
    firstName: string([
        pattern(/^[A-Za-z]+$/, "Enter a valid first name"),
        minLength(3),
        maxLength(19)
    ]),

    lastName: string([
        pattern(/^[A-Za-z]+$/, "Enter a valid first name"),
        minLength(3),
        maxLength(19)
    ]),

    email: string([
        pattern(/^\S+@\S+\.\S+$/, 'Please provide a valid email address'),
        minLength(5)
    ]).transform(value => value.toLowerCase().trim()),

    phoneNumber: string([
        pattern(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/, 'Please provide a valid phone number'),
    ]).transform(value => value.trim()),

    password: string([
        minLength(6)
    ]).transform(value => value.trim()),
    
    role: union([
        literal('college-admin'),
        literal('departement-head'),
        literal('register'),
        literal('admission-cell'),
        literal('faculty-member')
    ])
});