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
import { loginFormSchemaValidation } from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MoveRight, User } from "lucide-react";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
const Resetfn = () => {
  const form = useForm({
    resolver: zodResolver(loginFormSchemaValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input
                    placeholder="Enter your Email"
                    {...field}
                    className=""
                  />
                </FormControl>
                <User className="absolute size-4 top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input
                    placeholder="Enter your Password"
                    {...field}
                    className=""
                  />
                </FormControl>
                <Mail className="absolute size-4 top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size={"lg"}
            className="group rounded-full border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-colors duration-300 cursor-pointer"
            variant={"outline"}
          >
            Reset-password{" "}
            <MoveRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default Resetfn;
