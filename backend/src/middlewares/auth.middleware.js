import { ApiError } from "../utils/apiError.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { CollegeAdmin } from "../models/admin.model.js";
import { Student } from "../models/student.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) throw new ApiError(401, "Unauthorized request");

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        let user;

        user = decodedToken.role === "admin"
            ? await CollegeAdmin.findById(token, process.env.ACCESS_TOKEN_SECRET)
            : await Student.findById(token, process.env.ACCESS_TOKEN_SECRET);

        if (!user) throw new ApiError(401, "Invalid access token");

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});
