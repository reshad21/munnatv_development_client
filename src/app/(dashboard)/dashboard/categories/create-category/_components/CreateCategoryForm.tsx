"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createCategory } from "@/services/categories";
import { showErrorToast, showSuccessToast } from "@/utils/toastMessage";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const CreateCategoryForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    startTransition(async () => {
      const response = await createCategory(data);

      console.log(response, "Response from createCategory");

      if (response.statusCode === 201) {
        showSuccessToast(response.message);
        form.reset();
        router.push("/dashboard/categories");
      } else {
        console.log(response.message, "Error creating category");
        showErrorToast(response.message);
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-gray-50 rounded-lg shadow-md mt-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="Enter category name"
                      {...field}
                      className="pl-11 h-12 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-teal-500 transition-colors"
                      type="text"
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-red-500 text-sm mt-1" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="mt-6 cursor-pointer "
            disabled={isPending}
          >
            {isPending ? "Creating..." : "Create Category"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCategoryForm;
