import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { CollegeAdmin } from "../models/admin.model.js";
import { collegeAdminValidator } from "../validators/admin.validator.js";

export const registerAdmin = asyncHandler(async (req, res) => {
    const { error, value } = collegeAdminValidator.validate(req.body);

})