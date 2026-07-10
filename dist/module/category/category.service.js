import { prisma } from "../../lib/prisma.js";
const createCategory = async (payload) => {
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
const getSingleCategory = async (id) => {
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
const updateCategory = async (id, payload) => {
    const category = await prisma.category.update({
        where: {
            id,
        },
        data: payload,
    });
    return category;
};
const deleteCategory = async (id) => {
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
//# sourceMappingURL=category.service.js.map