import { prisma } from "../../lib/prisma";


const createReview = async (
  payload:any,
  tenantId:string
)=>{

  const review = await prisma.review.create({

    data:{
      propertyId: payload.propertyId,
      tenantId,
      rating: payload.rating,
      comment: payload.comment
    }

  });


  return review;

};



const getPropertyReviews = async(
  propertyId:string
)=>{

  return prisma.review.findMany({

    where:{
      propertyId
    },

    include:{
      tenant:{
        select:{
          name:true,
          profileImage:true
        }
      }
    },

    orderBy:{
      createdAt:"desc"
    }

  });

};



export const ReviewService={
 createReview,
 getPropertyReviews
};