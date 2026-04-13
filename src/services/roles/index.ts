"use server";

import { apiRequest } from "@/lib/apiRequest";
import { revalidatePath } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createRole = async (payload: FieldValues) => {
  const response = await apiRequest("roles", {
    method: "POST",
    body: JSON.stringify(payload),
    authRequired: true,
  });

  revalidatePath("/dashboard/roles");

  return await response;
};
