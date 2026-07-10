import express from "express";
import { ReviewController } from "./review.controller";
import { auth } from "../../middleware/auth";


const router = express.Router();


router.post(
 "/",
 auth("TENANT"),
 ReviewController.createReview
);


router.get(
 "/:propertyId",
 ReviewController.getPropertyReviews
);



export const ReviewRoutes = router;