import { prisma } from "../../lib/prisma.js";


const createCategory = async (payload: {
  name: string;
  description?: string;
}) => {

  const category = await prisma.category.create({
    data: payload,
  });

  return category;
};


const getAllCategories = async () => {

  const categories = await prisma.category.findMany({
    include: {
      properties: true,
    },
  });

  return categories;
};


const getSingleCategory = async (id: string) => {

  const category = await prisma.category.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      properties: true,
    },
  });

  return category;
};


const updateCategory = async (
  id: string,
  payload: {
    name?: string;
    description?: string;
  }
) => {

  const category = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
  });

  return category;
};


const deleteCategory = async (id: string) => {

  const category = await prisma.category.delete({
    where: {
      id,
    },
  });

  return category;
};


export const CategoryService = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};