"use server";

import { apiRequest } from "@/lib/apiRequest";
import { TCustomJwtPayload } from "@/types/auth.types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const loggedUser = async () => {
  const cookie = await cookies();
  const accessToken = cookie.get("accessToken")?.value;

  let decoded: TCustomJwtPayload | null = null;

  if (accessToken) {
    decoded = jwtDecode<TCustomJwtPayload>(accessToken);
  }

  return decoded;
};

export const login = async (data: FieldValues) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();

    if (result.statusCode === 200) {
      const cookie = await cookies();

      cookie.set("accessToken", result.data.accessToken, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // expires in 1 day
      });
      cookie.set("refreshToken", result.data.refreshToken, {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      });
    }

    return result;
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login failed. Please try again.");
  }
};

export const logout = async () => {
  try {
    const cookie = await cookies();
    cookie.delete("accessToken");
    cookie.delete("refreshToken");
  } catch (error) {
    console.error("Logout error:", error);
    throw new Error("Logout failed. Please try again.");
  }
};

export const getAdminDetails = async () => {
  const response = await apiRequest(`auth/me`, {
    authRequired: true,
    method: "GET",
  });

  return response.data;
};
