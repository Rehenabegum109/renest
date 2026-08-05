
import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma.js";


const createProperty = async (
  payload: any,
  landlordId: string
) => {

  const property = await prisma.property.create({
    data: {
      title: payload.title,
      description: payload.description,

      address: payload.address,
      city: payload.city,

      rent: payload.rent,

      bedrooms: payload.bedrooms,
      bathrooms: payload.bathrooms,

      image: payload.image,

      landlord: {
        connect: {
          id: landlordId,
        },
      },

      category: {
        connect: {
          id: payload.categoryId,
        },
      },
    },

    include: {
      landlord: true,
      category: true,
    },
  });

  return property;
};



const getAllProperties = async (query: any) => {

  const {
    searchTerm,
    location,
    categoryId,
    isAvailable,
    minPrice,
    maxPrice,
    page = 1,
    limit = 10,
    sortBy = "createdAt",
    sortOrder = "desc",
  } = query;


  const where: Prisma.PropertyWhereInput = {};


  // Search title + address + city
  if (searchTerm) {
    where.OR = [
      {
        title: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
      {
        address: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
      {
        city: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
    ];
  }



  // Filter by location
  if (location) {
    where.OR = [
      {
        address: {
          contains: location,
          mode: "insensitive",
        },
      },
      {
        city: {
          contains: location,
          mode: "insensitive",
        },
      },
    ];
  }



  // Category filter
  if (categoryId) {
    where.categoryId = categoryId;
  }



  // Availability filter
  if (isAvailable !== undefined) {
    where.status =
      isAvailable === "true"
        ? "AVAILABLE"
        : "RENTED";
  }



  // Price filter
  if (minPrice || maxPrice) {

    where.rent = {};

    if (minPrice) {
      where.rent.gte = Number(minPrice);
    }

    if (maxPrice) {
      where.rent.lte = Number(maxPrice);
    }
  }



  const skip =
    (Number(page) - 1) * Number(limit);



  const result = await prisma.property.findMany({

    where,

    skip,

    take: Number(limit),

    orderBy: {
      [sortBy]: sortOrder,
    },

    include: {
      landlord: true,
      category: true,
    },

  });



  const total = await prisma.property.count({
    where,
  });



  return {

    meta: {
      page: Number(page),
      limit: Number(limit),
      total,
    },

    data: result,

  };
};




const getPropertyById = async (id: string) => {
  const property = await prisma.property.findUnique({
    where: {
      id,
    },
    include: {
      landlord: true,
      category: true,
    },
  });

  if (!property) {
    throw new Error("Property not found");
   
  }

  return property;
};





const updateProperty = async (
  id: string,
  payload: any
) => {

  return await prisma.property.update({

    where: {
      id,
    },

    data: payload,

    include: {
      landlord: true,
      category: true,
    },

  });

};





const deleteProperty = async (id: string) => {


  await prisma.review.deleteMany({

    where: {
      propertyId: id,
    },

  });



  await prisma.rentalRequest.deleteMany({

    where: {
      propertyId: id,
    },

  });



  return await prisma.property.delete({

    where: {
      id,
    },

  });

};


const getMyProperties = async (
  landlordId:string
) => {

  return await prisma.property.findMany({

    where:{
      landlordId,
    },

    orderBy:{
      createdAt:"desc",
    },

  });

};

export const PropertyService = {

  createProperty,

  getAllProperties,

  getPropertyById,
  getMyProperties,

  updateProperty,

  deleteProperty,

};