import express from "express";
import { PaymentController } from "./payment.controller";
import { auth } from "../../middleware/auth";


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
 "/webhook",
 PaymentController.stripeWebhook
);







export const PaymentRoutes = router;