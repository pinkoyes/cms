import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { CollegeAdmin } from "../models/admin.model.js";
import { validate } from "valibot";
import { collegeAdminSchema } from "../validators/admin.validator.js";


export const registerCollegeAdmin = asyncHandler(async (req, res) => {
    const { email, ...restData } = req.body;

    const existedEmail = await CollegeAdmin.findOne({ email });

    if (existedEmail) throw new ApiError(409, "Email already exist");

    const validationResult = validate(collegeAdminSchema, { email, ...restData });

    if (!validationResult.success) {
        const errorMessage = validationResult.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
        }));
        throw new ApiError(400, errorMessage);
    }

    const collegeAdmin = await CollegeAdmin.create({ email, ...restData });

    if (!collegeAdmin) throw new ApiError(500, "Failed to create College Admin. Please try again.")

    return res
        .status(201)
        .json(new ApiResponse(200, collegeAdmin, "College admin created successfully!"))
});
