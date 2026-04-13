"use client";

import { useState } from "react";
import { TCategory } from "@/types/category.types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SelectTrigger } from "@radix-ui/react-select";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/shared/common/ImageUpload";
import { uploadImageToCloudinary } from "@/utils/cloudinaryUpload";
import { showSuccessToast, showErrorToast } from "@/utils/toastMessage";
import { createBlog } from "@/services/blogs";
import { useRouter } from "next/navigation";

const CreateBlogForm = ({ categories }: { categories: TCategory[] }) => {
    const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      thumbnail: "",
      categoryId: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsUploading(true);

      let thumbnailUrl = data.thumbnail;

      // Upload image to Cloudinary if a file is selected
      if (selectedFile) {
        showSuccessToast("Uploading image...");
        const uploadResult = await uploadImageToCloudinary(selectedFile);

        if (!uploadResult) {
          showErrorToast("Failed to upload image. Please try again.");
          setIsUploading(false);
          return;
        }

        thumbnailUrl = uploadResult.secure_url;
        showSuccessToast("Image uploaded successfully!");
      }

      // Prepare final blog data
      const blogData = {
        title: data.title,
        content: data.content,
        thumbnail: thumbnailUrl,
        categoryId: data.categoryId,
      };

      const response = await createBlog(blogData);

      if (response.statusCode === 201) {
        showSuccessToast(response.message || "Blog created successfully!");
        form.reset();
        setSelectedFile(null);
        router.push("/dashboard/blogs");
      } else {
        showErrorToast(response.message || "Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      showErrorToast("Failed to create blog. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const generateCategoryOptions = () => {
    return categories?.map((category) => (
      <SelectItem key={category.id} value={category.id}>
        {category.name}
      </SelectItem>
    ));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 mt-8 space-y-6"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create New Blog
          </h2>
          <p className="text-gray-600">Share your thoughts with the world</p>
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                Blog Title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter an engaging blog title"
                  {...field}
                  className="h-14 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-lg"
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                Blog Content
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your blog content here..."
                  className="resize-none h-64 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-base leading-relaxed"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                Category
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={categories?.length === 0}
              >
                <FormControl>
                  <SelectTrigger className="h-14 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200">
                    <SelectValue placeholder="Choose a category for your blog" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="rounded-xl border-2 border-gray-200">
                  {generateCategoryOptions()}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="thumbnail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                Blog Thumbnail
              </FormLabel>
              <FormControl>
                <ImageUpload
                  value={field.value}
                  onChange={field.onChange}
                  onFileSelect={setSelectedFile}
                  disabled={isUploading}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-6">
          <Button
            type="submit"
            disabled={isUploading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-8 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isUploading ? "Publishing..." : "Publish Blog"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateBlogForm;
