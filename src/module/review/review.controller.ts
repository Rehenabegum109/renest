import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { ReviewService } from "./review.service.js";


const createReview = catchAsync(
async(req,res)=>{


const result =
await ReviewService.createReview(
 req.body,
 req.user.id
);


sendResponse(res,{
 success:true,
 statusCode:201,
 message:"Review created",
 data:result
});


});


const getPropertyReviews =
catchAsync(async(req,res)=>{

  const { propertyId } = req.params;

  if(!propertyId){
    return res.status(400).json({
      success:false,
      message:"Property ID is required"
    });
  }

const result =
await ReviewService.getPropertyReviews(
 propertyId
);


sendResponse(res,{
 success:true,
 statusCode:200,
 message:"Reviews fetched",
 data:result
});


});


export const ReviewController={
 createReview,
 getPropertyReviews
};