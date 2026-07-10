import express from "express";
import { ReviewController } from "./review.controller";
import { auth } from "../../middleware/auth";
import { ReviewValidation } from "./review.validation";
import { validateRequest } from "../../middleware/validateRequest";


const router = express.Router();


router.post(
  "/",
  auth("TENANT"),
  validateRequest(ReviewValidation.createReviewValidation),
  ReviewController.createReview
);

router.get(
 "/:propertyId",
 ReviewController.getPropertyReviews
);



export const ReviewRoutes = router;