import express from "express";
import { ReviewController } from "./review.controller.js";
import { auth } from "../../middleware/auth.js";
import { ReviewValidation } from "./review.validation.js";
import { validateRequest } from "../../middleware/validateRequest.js";
const router = express.Router();
router.post("/", auth("TENANT"), validateRequest(ReviewValidation.createReviewValidation), ReviewController.createReview);
router.get("/:propertyId", ReviewController.getPropertyReviews);
export const ReviewRoutes = router;
//# sourceMappingURL=review.route.js.map