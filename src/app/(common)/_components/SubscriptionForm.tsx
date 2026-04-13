"use client";

import { addSubscriber } from "@/services/subscription";
import { showErrorToast, showSuccessToast } from "@/utils/toastMessage";
import { useTransition } from "react";

const SubscriptionForm = () => {
  const [isPending, startTransition] = useTransition();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    startTransition(async () => {
      e.preventDefault();
      const email = e.currentTarget.email.value;

      const response = await addSubscriber(email);

      if (response.statusCode === 201) {
        showSuccessToast(response.message || "Subscription successful!");
      } else {
        showErrorToast(
          response.message || "Failed to subscribe. Please try again."
        );
        console.log("Subscription error:", response);
      }
    });
  };
  return (
    <form
      onSubmit={onSubmit}
      className="mt-5 flex items-center justify-between border-2 p-2 border-white rounded-full"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="outline-0 px-5 text-lg text-white bg-transparent placeholder:text-white/60 w-full"
        required
        name="email"
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-main py-3 px-0 rounded-full font-semibold w-full hover:bg-main/80 transition duration-300 cursor-pointer text-lg flex items-center justify-center"
      >
        {isPending ? "Subscribing..." : "Subscribe Now"}
      </button>
    </form>
  );
};

export default SubscriptionForm;
