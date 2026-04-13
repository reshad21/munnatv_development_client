/* eslint-disable @typescript-eslint/no-explicit-any */
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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/shared/common/ImageUpload";
import { uploadImageToCloudinary } from "@/utils/cloudinaryUpload";
import { showSuccessToast, showErrorToast } from "@/utils/toastMessage";
import { useRouter } from "next/navigation";
import { createProject } from "@/services/projects";

const CreateProjectForm = ({ categories }: { categories: TCategory[] }) => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [features, setFeatures] = useState<string[]>([]);
  const [techStacks, setTechStacks] = useState<
    { name: string; icon?: string; slogan: string }[]
  >([]);

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      liveUrl: "",
      demoUrl: "",
      startDate: "",
      endDate: "",
      author: "",
      categoryId: "",
      thumbnail: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsUploading(true);

      let thumbnailUrl = data.thumbnail;

      // Handle file upload
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

      // Prepare request payload
      const projectData: any = {
        name: data.name,
        description: data.description,
        liveUrl: data.liveUrl || null,
        demoUrl: data.demoUrl || null,
        startDate: data.startDate ? new Date(data.startDate) : null,
        endDate: data.endDate ? new Date(data.endDate) : null,
        author: data.author,
        categoryId: data.categoryId,
        thumbnail: thumbnailUrl,
      };

      // Only add features if not empty
      if (features.length > 0) {
        projectData.projectFeatures = {
          create: features.map((f) => ({ name: f })),
        };
      }

      // Only add tech stacks if not empty
      if (techStacks.length > 0) {
        projectData.projectTechStacks = {
          create: techStacks.map((t) => ({
            name: t.name,
            icon: t.icon || null,
            slogan: t.slogan,
          })),
        };
      }

      const response = await createProject(projectData);

      if (response.statusCode === 201) {
        showSuccessToast(response.message || "Project created successfully!");
        form.reset();
        setSelectedFile(null);
        setFeatures([]);
        setTechStacks([]);
        router.push("/dashboard/projects");
      } else {
        showErrorToast(response.message || "Failed to create project.");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      showErrorToast("Failed to create project. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 mt-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800">Create New Project</h2>

        {/* Project Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter project name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Project description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Live URL */}
        <FormField
          control={form.control}
          name="liveUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Live URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Demo URL */}
        <FormField
          control={form.control}
          name="demoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Demo URL</FormLabel>
              <FormControl>
                <Input placeholder="https://demo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Author */}
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Author name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category */}
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories?.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Thumbnail */}
        <FormField
          control={form.control}
          name="thumbnail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail</FormLabel>
              <FormControl>
                <ImageUpload
                  value={field.value}
                  onChange={field.onChange}
                  onFileSelect={setSelectedFile}
                  disabled={isUploading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Features */}
        <div>
          <FormLabel>Project Features</FormLabel>
          <div className="space-y-2">
            {features.map((f, i) => (
              <div key={i} className="flex gap-2">
                <Input
                  value={f}
                  onChange={(e) =>
                    setFeatures((prev) =>
                      prev.map((item, idx) =>
                        idx === i ? e.target.value : item
                      )
                    )
                  }
                />
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() =>
                    setFeatures((prev) => prev.filter((_, idx) => idx !== i))
                  }
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              onClick={() => setFeatures((prev) => [...prev, ""])}
            >
              + Add Feature
            </Button>
          </div>
        </div>

        {/* Tech Stacks */}
        <div>
          <FormLabel>Project Tech Stacks</FormLabel>
          <div className="space-y-4">
            {techStacks.map((t, i) => (
              <div key={i} className="grid grid-cols-3 gap-2">
                <Input
                  placeholder="Name"
                  value={t.name}
                  onChange={(e) =>
                    setTechStacks((prev) =>
                      prev.map((item, idx) =>
                        idx === i ? { ...item, name: e.target.value } : item
                      )
                    )
                  }
                />
                <Input
                  placeholder="Icon URL"
                  value={t.icon}
                  onChange={(e) =>
                    setTechStacks((prev) =>
                      prev.map((item, idx) =>
                        idx === i ? { ...item, icon: e.target.value } : item
                      )
                    )
                  }
                />
                <Input
                  placeholder="Slogan"
                  value={t.slogan}
                  onChange={(e) =>
                    setTechStacks((prev) =>
                      prev.map((item, idx) =>
                        idx === i ? { ...item, slogan: e.target.value } : item
                      )
                    )
                  }
                />
              </div>
            ))}
            <Button
              type="button"
              onClick={() =>
                setTechStacks((prev) => [
                  ...prev,
                  { name: "", icon: "", slogan: "" },
                ])
              }
            >
              + Add Tech Stack
            </Button>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6">
          <Button type="submit" disabled={isUploading} className="w-full">
            {isUploading ? "Publishing..." : "Publish Project"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateProjectForm;
