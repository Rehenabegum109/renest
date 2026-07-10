import express from "express";
import { PaymentController } from "./payment.controller.js";
import { auth } from "../../middleware/auth.js";
import { PaymentValidation } from "./payment.validation.js";
import { validateRequest } from "../../middleware/validateRequest.js";


const router = express.Router();

router.get(
 "/success",
 (req,res)=>{
  res.send("Payment successful");
 }
);



router.get(
 "/cancel",
 (req,res)=>{
  res.send("Payment cancelled");
 }
);

router.post(
  "/create",
  auth("TENANT"),
  validateRequest(PaymentValidation.createPaymentValidation),
  PaymentController.createCheckoutSession
);


router.get(
 "/",
 auth("TENANT"),
 PaymentController.getMyPayments
);



router.get(
 "/:id",
 auth("TENANT"),
 PaymentController.getPaymentById
);



router.post(
 "/confirm",
 PaymentController.stripeWebhook
);







export const PaymentRoutes = router;