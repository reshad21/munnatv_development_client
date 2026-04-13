"use server";

import { apiRequest } from "@/lib/apiRequest";
import { TQuery } from "@/types/query.type";
import { revalidatePath } from "next/cache";

export const addSubscriber = async (email: string) => {
  const response = await apiRequest("subscribers", {
    method: "POST",
    body: JSON.stringify({ email }),
  });

  revalidatePath("/dashboard/subscriptions");

  return await response;
};

export const getSubscribers = async (query: TQuery[]) => {
  const params = new URLSearchParams();

  if (query && query.length > 0) {
    query.forEach((q) => {
      params.append(q.key, q.value);
    });
  }

  const response = await apiRequest(`subscribers?${params.toString()}`, {
    method: "GET",
    authRequired: true,
  });

  return await response;
};

export const exportSubscriber = async () => {
  const response = await apiRequest("subscribers/export", {
    method: "GET",
    authRequired: true,
  });

  return await response;
};

export const deleteSubscriber = async (id: string) => {
  const response = await apiRequest(`subscribers/${id}`, {
    method: "DELETE",
    authRequired: true,
  });

  revalidatePath("/dashboard/subscriptions");

  return await response;
};
