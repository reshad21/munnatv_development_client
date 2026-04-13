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
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/shared/common/ImageUpload";
import { uploadImageToCloudinary } from "@/utils/cloudinaryUpload";
import { showSuccessToast, showErrorToast } from "@/utils/toastMessage";
import { useRouter } from "next/navigation";
import { updateProject } from "@/services/projects";

type TTechStack = {
  name: string;
  icon?: string;
  slogan: string;
};

type UpdateProjectFormProps = {
  categories: TCategory[];
  project: any;
};

type FormValues = {
  name: string;
  description: string;
  liveUrl?: string;
  demoUrl?: string;
  startDate?: string;
  endDate?: string;
  author: string;
  categoryId: string;
  thumbnail?: string;
  features: { name: string }[];
  techStacks: TTechStack[];
};

const UpdateProjectForm = ({ categories, project }: UpdateProjectFormProps) => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: project?.name || "",
      description: project?.description || "",
      liveUrl: project?.liveUrl || "",
      demoUrl: project?.demoUrl || "",
      startDate: project?.startDate
        ? new Date(project.startDate).toISOString().split("T")[0]
        : "",
      endDate: project?.endDate
        ? new Date(project.endDate).toISOString().split("T")[0]
        : "",
      author: project?.author || "",
      categoryId: project?.categoryId || "",
      thumbnail: project?.thumbnail || "",
      features:
        project?.projectFeatures?.map((f: any) => ({ name: f.name })) || [],
      techStacks:
        project?.projectTechStacks?.map((t: any) => ({
          name: t.name,
          icon: t.icon || "",
          slogan: t.slogan,
        })) || [],
    },
  });

  const {
    control,
    handleSubmit,
    // watch,
    // setValue,
  } = form;

  const { fields: featureFields, append: appendFeature, remove: removeFeature } =
    useFieldArray({
      control,
      name: "features",
    });

  const {
    fields: techStackFields,
    append: appendTechStack,
    remove: removeTechStack,
  } = useFieldArray({
    control,
    name: "techStacks",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsUploading(true);
      let thumbnailUrl = data.thumbnail;

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
        projectFeatures: {
          set: [],
          create: data.features.map((f) => ({ name: f.name })),
        },
        projectTechStacks: {
          set: [],
          create: data.techStacks.map((t) => ({
            name: t.name,
            icon: t.icon || null,
            slogan: t.slogan,
          })),
        },
      };

      const response = await updateProject(project.id, projectData);
      if (response.statusCode === 200) {
        showSuccessToast(response.message || "Project updated successfully!");
        router.push("/dashboard/projects");
      } else {
        showErrorToast(response.message || "Failed to update project.");
      }
    } catch (error) {
      console.error("Error updating project:", error);
      showErrorToast("Failed to update project. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 mt-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800">Update Project</h2>

        {/* Project Name */}
        <FormField
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
            control={control}
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
            control={control}
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
          control={control}
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
          control={control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
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
          control={control}
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
            {featureFields.map((item, index) => (
              <div key={item.id} className="flex gap-2">
                <Input
                  {...form.register(`features.${index}.name` as const)}
                  placeholder="Feature name"
                />
                <Button type="button" variant="destructive" onClick={() => removeFeature(index)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button type="button" onClick={() => appendFeature({ name: "" })}>
              + Add Feature
            </Button>
          </div>
        </div>

        {/* Tech Stacks */}
        <div>
          <FormLabel>Project Tech Stacks</FormLabel>
          <div className="space-y-4">
            {techStackFields.map((item, index) => (
              <div key={item.id} className="grid grid-cols-3 gap-2">
                <Input
                  placeholder="Name"
                  {...form.register(`techStacks.${index}.name` as const)}
                />
                <Input
                  placeholder="Icon URL"
                  {...form.register(`techStacks.${index}.icon` as const)}
                />
                <Input
                  placeholder="Slogan"
                  {...form.register(`techStacks.${index}.slogan` as const)}
                />
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => removeTechStack(index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              onClick={() => appendTechStack({ name: "", icon: "", slogan: "" })}
            >
              + Add Tech Stack
            </Button>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6">
          <Button type="submit" disabled={isUploading} className="w-full">
            {isUploading ? "Updating..." : "Update Project"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateProjectForm;
