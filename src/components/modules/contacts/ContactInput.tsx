"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactFormSchemaValidation } from "@/validations/contact.validation";
import { Captions, LoaderCircle, Mail, MoveRight, User } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useTransition } from "react";
import { createContact } from "@/services/contacts";
import { showSuccessToast } from "@/utils/toastMessage";

export function ContactInput() {
  const [isPending, startTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(contactFormSchemaValidation),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    startTransition(async () => {
      const response = await createContact(data as FieldValues);
      console.log(response);

      if (response.statusCode === 201) {
        form.reset();
        showSuccessToast(response.message);
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  placeholder="Full name"
                  {...field}
                  className="border-0 border-b-2 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0 shadow-none"
                />
              </FormControl>
              <User className="absolute size-4 top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  placeholder="Email address"
                  {...field}
                  className="border-0 border-b-2 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0 shadow-none"
                />
              </FormControl>
              <Mail className="absolute size-4 top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  placeholder="Subject"
                  {...field}
                  className="border-0 border-b-2 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0 shadow-none"
                />
              </FormControl>
              <Captions className="absolute size-4 top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Type your message here..."
                  className="resize-none h-24"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size={"lg"}
          disabled={isPending}
          className="group rounded-full border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-colors duration-300 cursor-pointer"
          variant={"outline"}
        >
          {isPending ? "Sending..." : "Send Now"}
          {isPending ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <MoveRight className="group-hover:translate-x-1 transition-transform duration-300" />
          )}
        </Button>
      </form>
    </Form>
  );
}
