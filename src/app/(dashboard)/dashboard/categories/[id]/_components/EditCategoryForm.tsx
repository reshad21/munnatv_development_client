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
import { updateCategory } from "@/services/categories";
import { TCategory } from "@/types/category.types";
import { showErrorToast, showSuccessToast } from "@/utils/toastMessage";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const EditCategoryForm = ({ category }: { category: TCategory }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm({
    defaultValues: {
      name: category?.name || "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    startTransition(async () => {
      const response = await updateCategory(category.id, data);

      console.log(response, "Response from updateCategory");

      if (response.statusCode === 200) {
        showSuccessToast(response.message);
        router.push("/dashboard/categories");
      } else {
        console.log(response.message, "Error updating category");
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

          <div className="flex gap-4 mt-6">
            <Button
              type="submit"
              className="cursor-pointer flex-1"
              disabled={isPending}
            >
              {isPending ? "Updating..." : "Update Category"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer flex-1"
              onClick={() => router.push("/dashboard/categories")}
              disabled={isPending}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditCategoryForm;
