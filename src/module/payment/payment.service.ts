// import httpStatus from "http-status";
// import Stripe from "stripe";
// import { prisma } from "../../lib/prisma.js";
// import AppError from "../../utils/appError.js";
// import { stripe } from "../../config/index.js";


// const createCheckoutSession = async (
//   rentalRequestId: string,
//   userId: string
// ) => {
//   const rentalRequest = await prisma.rentalRequest.findUnique({
//     where: {
//       id: rentalRequestId,
//     },
//     include: {
//       property: true,
//     },
//   });

//   if (!rentalRequest) {
//     throw new AppError(
//       httpStatus.NOT_FOUND,
//       "Rental request not found"
//     );
//   }

//   if (rentalRequest.tenantId !== userId) {
//     throw new AppError(
//       httpStatus.FORBIDDEN,
//       "You are not allowed to pay"
//     );
//   }

//   if (rentalRequest.status !== "APPROVED") {
//     throw new AppError(
//       httpStatus.BAD_REQUEST,
//       "Rental request is not approved"
//     );
//   }

//   const session = await stripe.checkout.sessions.create({
//     mode: "payment",

//     payment_method_types: ["card"],

//     line_items: [
//       {
//         quantity: 1,
//         price_data: {
//           currency: "usd",

//           unit_amount: Math.round(rentalRequest.property.rent * 100),

//           product_data: {
//             name: rentalRequest.property.title,
//             description: rentalRequest.property.description,
//           },
//         },
//       },
//     ],

//     metadata: {
//       rentalRequestId: rentalRequest.id,
//     },

//    success_url: "https://renest-client.vercel.app/dashboard/tenant/payments/success",
// cancel_url: "https://renest-client.vercel.app/dashboard/tenant/payments/cancel",
//   });

//   const existingPayment = await prisma.payment.findUnique({
//     where: {
//       rentalRequestId,
//     },
//   });

//   if (!existingPayment) {
//     await prisma.payment.create({
//       data: {
//         rentalRequestId: rentalRequest.id,
//         userId,

//         amount: rentalRequest.property.rent,

//         transactionId: `pending_${Date.now()}`,

//         provider: "STRIPE",

//         status: "PENDING",
//       },
//     });
//   }

//   return {
//     checkoutUrl: session.url,
//   };
// };

// const getMyPayments = async (userId: string) => {
//   return prisma.payment.findMany({
//     where: {
//       userId,
//     },
//     include: {
//       rentalRequest: {
//         include: {
//           property: true,
//         },
//       },
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// };

// const getPaymentById = async (id: string) => {
//   const payment = await prisma.payment.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       rentalRequest: {
//         include: {
//           property: true,
//         },
//       },
//     },
//   });

//   if (!payment) {
//     throw new AppError(
//       httpStatus.NOT_FOUND,
//       "Payment not found"
//     );
//   }

//   return payment;
// };

// const handleStripeWebhook = async (
//   event: Stripe.Event
// ) => {
//   if (event.type !== "checkout.session.completed") {
//     return;
//   }

//   const session = event.data.object as Stripe.Checkout.Session;

//   const rentalRequestId =
//     session.metadata?.rentalRequestId;

//   if (!rentalRequestId) {
//     throw new Error("Rental request id missing");
//   }

//   const transactionId =
//     session.payment_intent?.toString() || session.id;

//   await prisma.payment.update({
//     where: {
//       rentalRequestId,
//     },
//     data: {
//       transactionId,
//       status: "COMPLETED",
//       paidAt: new Date(),
//     },
//   });

//   return true;
// };

// export const PaymentService = {
//   createCheckoutSession,
//   getMyPayments,
//   getPaymentById,
//   handleStripeWebhook,
// };




import httpStatus from "http-status";
import Stripe from "stripe";
import { prisma } from "../../lib/prisma.js";
import AppError from "../../utils/appError.js";
import config, { stripe } from "../../config/index.js";


const createCheckoutSession = async (
  rentalRequestId: string,
  userId: string
) => {

  const rentalRequest =
    await prisma.rentalRequest.findUnique({

      where:{
        id:rentalRequestId,
      },

      include:{
        property:true,
      },

    });



  if(!rentalRequest){

    throw new AppError(
      httpStatus.NOT_FOUND,
      "Rental request not found"
    );

  }



  if(rentalRequest.tenantId !== userId){

    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to pay"
    );

  }



  if(rentalRequest.status !== "APPROVED"){

    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Rental request is not approved"
    );

  }



  // Create Payment First

  let payment =
    await prisma.payment.findUnique({

      where:{
        rentalRequestId,
      },

    });



  if(!payment){

    payment =
    await prisma.payment.create({

      data:{

        rentalRequestId:
        rentalRequest.id,


        userId,


        amount:
        rentalRequest.property.rent,


        transactionId:
        `pending_${Date.now()}`,


        provider:
        "STRIPE",


        status:
        "PENDING",

      },

    });

  }





  // Create Stripe Checkout Session


  const session =
  await stripe.checkout.sessions.create({

    mode:"payment",


    payment_method_types:[
      "card",
    ],


    line_items:[

      {

        quantity:1,


        price_data:{

          currency:"bdt",


          unit_amount:
          Math.round(
            rentalRequest.property.rent * 100
          ),


          product_data:{

            name:
            rentalRequest.property.title,


            description:
            rentalRequest.property.description,

          },

        },

      },

    ],



    metadata:{

      rentalRequestId:
      rentalRequest.id,


      paymentId:
      payment.id,

    },



    success_url:
    "https://renest-client.vercel.app/dashboard/tenant/payments/success",



    cancel_url:
    "https://renest-client.vercel.app/dashboard/tenant/payments/cancel",

  });





  return {

    checkoutUrl:
    session.url,

  };

};






const getMyPayments = async(
  userId:string
)=>{


  return prisma.payment.findMany({

    where:{
      userId,
    },


    include:{

      rentalRequest:{

        include:{

          property:true,

        },

      },

    },


    orderBy:{

      createdAt:"desc",

    },


  });


};








const getPaymentById = async(
 id:string
)=>{


 const payment =
 await prisma.payment.findUnique({

  where:{
    id,
  },


  include:{

    rentalRequest:{

      include:{

        property:true,

      },

    },

  },

 });



 if(!payment){

  throw new AppError(
    httpStatus.NOT_FOUND,
    "Payment not found"
  );

 }



 return payment;


};









const handleStripeWebhook = async(
 event:Stripe.Event
)=>{
  console.log("EVENT:", event.type);

 if(
  event.type !== "checkout.session.completed"
 ){

  return;

 }



 const session =
 event.data.object as Stripe.Checkout.Session;



 const rentalRequestId =
 session.metadata?.rentalRequestId;



 if(!rentalRequestId){

  throw new Error(
    "Rental request id missing"
  );

 }




 const transactionId =
 session.payment_intent?.toString()
 ||
 session.id;




 await prisma.payment.updateMany({

  where:{

    rentalRequestId,

  },


  data:{

    transactionId,


    status:
    "COMPLETED",


    paidAt:
    new Date(),

  },

 });



 return true;


};






export const PaymentService = {

 createCheckoutSession,

 getMyPayments,

 getPaymentById,

 handleStripeWebhook,

};









