"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/shared/common/ImageUpload";
import { uploadImageToCloudinary } from "@/utils/cloudinaryUpload";
import { showSuccessToast, showErrorToast } from "@/utils/toastMessage";
import { createTeams, updateTeam } from "@/services/teams";
import { teamFormSchemaValidation } from "@/validations/team.validation";
import { TTeam } from "@/types/team.types";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface TeamFormProps {
  initialData?: TTeam;
  isEdit?: boolean;
}

const TeamForm = ({ initialData, isEdit = false }: TeamFormProps) => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(teamFormSchemaValidation),
    defaultValues: {
      name: initialData?.name || "",
      position: initialData?.position || "",
      photo: initialData?.photo || "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    startTransition(async () => {
      try {
        let photoUrl = data.photo;

        // Upload image to Cloudinary if a file is selected
        if (selectedFile) {
          showSuccessToast("Uploading image...");
          const uploadResult = await uploadImageToCloudinary(selectedFile);

          if (!uploadResult) {
            showErrorToast("Failed to upload image. Please try again.");
            return;
          }

          photoUrl = uploadResult.secure_url;
          showSuccessToast("Image uploaded successfully!");
        }

        // Prepare final team data
        const teamData = {
          name: data.name,
          position: data.position,
          photo: photoUrl || undefined,
        };

        let response;
        if (isEdit && initialData?.id) {
          response = await updateTeam(initialData.id, teamData);
        } else {
          response = await createTeams(teamData);
        }

        if (response.statusCode === (isEdit ? 200 : 201)) {
          showSuccessToast(response.message || `Team member ${isEdit ? "updated" : "created"} successfully!`);
          form.reset();
          setSelectedFile(null);
          router.push("/dashboard/teams");
        } else {
          showErrorToast(response.message || `Failed to ${isEdit ? "update" : "create"} team member`);
        }
      } catch (error) {
        console.error(`Error ${isEdit ? "updating" : "creating"} team:`, error);
        showErrorToast(`Failed to ${isEdit ? "update" : "create"} team member. Please try again.`);
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link href="/dashboard/teams">
          <Button variant="ghost" className="mb-4 cursor-pointer">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Teams
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">
          {isEdit ? "Edit Team Member" : "Add Team Member"}
        </h1>
        <p className="text-gray-500 mt-2">
          {isEdit ? "Update team member information" : "Add a new team member to your organization"}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Image Upload */}
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Photo</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value}
                      onChange={(url) => field.onChange(url)}
                      onFileSelect={setSelectedFile}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name & Position */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., John Doe"
                        {...field}
                        className="border-gray-300 focus:border-teal-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Position */}
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Full Stack Developer"
                        {...field}
                        className="border-gray-300 focus:border-teal-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={isPending}
                className="bg-teal-600 hover:bg-teal-700 cursor-pointer"
              >
                {isPending
                  ? `${isEdit ? "Updating" : "Creating"}...`
                  : isEdit
                    ? "Update Team Member"
                    : "Create Team Member"}
              </Button>
              <Link href="/dashboard/teams">
                <Button
                  type="button"
                  variant="outline"
                  className="cursor-pointer"
                >
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default TeamForm;
