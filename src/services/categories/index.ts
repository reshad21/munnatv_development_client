"use server";

import { apiRequest } from "@/lib/apiRequest";
import { revalidatePath } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createCategory = async (payload: FieldValues) => {
  const response = await apiRequest("categories", {
    method: "POST",
    body: JSON.stringify(payload),
    authRequired: true,
  });

  revalidatePath("/dashboard/categories");

  return await response;
};

export const getAllCategories = async () => {
  const response = await apiRequest("categories");

  return await response;
};

export const getCategoryById = async (id: string) => {
  const response = await apiRequest(`categories/${id}`, {
    method: "GET",
    authRequired: true,
  });

  return await response;
};

export const updateCategory = async (id: string, payload: FieldValues) => {
  const response = await apiRequest(`categories/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    authRequired: true,
  });

  revalidatePath("/dashboard/categories");

  return await response;
};

export const deleteCategory = async (id: string | undefined) => {
  const response = await apiRequest(`categories/${id}`, {
    method: "DELETE",
    authRequired: true,
  });

  revalidatePath("/dashboard/categories");

  return await response;
};
