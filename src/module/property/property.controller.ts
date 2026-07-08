import { Request, Response } from "express";
import { PropertyService } from "./property.service";

const createProperty = async (
  req: any,
  res: Response
) => {

  const result = await PropertyService.createProperty(
    req.body,
    req.user.id
  );

  res.status(201).json({
    success: true,
    message: "Property created successfully",
    data: result
  });

};

export const PropertyController = {
  createProperty
};