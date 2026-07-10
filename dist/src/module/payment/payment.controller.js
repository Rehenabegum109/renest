import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { PaymentService } from "./payment.service.js";
import { stripe } from "../../config/index.js";
import config from "../../config/index.js";
const createCheckoutSession = catchAsync(async (req, res) => {
    const result = await PaymentService.createCheckoutSession(req.body.rentalRequestId, req.user.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Checkout session created",
        data: result
    });
});
const getMyPayments = catchAsync(async (req, res) => {
    const result = await PaymentService.getMyPayments(req.user.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payments retrieved",
        data: result
    });
});
const getPaymentById = catchAsync(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Payment ID is required"
        });
    }
    const result = await PaymentService.getPaymentById(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment retrieved",
        data: result
    });
});
const stripeWebhook = async (req, res) => {
    const signature = req.headers["stripe-signature"];
    try {
        const event = stripe.webhooks.constructEvent(req.body, signature, config.stripe_webhook_secret);
        console.log("Stripe Event:", event.type);
        await PaymentService.handleStripeWebhook(event);
        console.log("Webhook Success");
        res.status(200).json({
            received: true,
        });
    }
    catch (error) {
        console.log("Webhook Failed:", error);
        res.status(400).json({
            message: "Webhook error",
            error: error.message,
        });
    }
};
export const PaymentController = {
    createCheckoutSession,
    getMyPayments,
    getPaymentById,
    stripeWebhook
};
//# sourceMappingURL=payment.controller.js.map