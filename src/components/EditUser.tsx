"use client";
import { Button } from "@/components/ui/button";
import * as zod from "zod";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = zod.object({
  username: zod
    .string()
    .min(2, "Username must be at least 2 characters long")
    .max(32, "Username must be at most 32 characters long"),
  email: zod.string().email("Invalid email address"),
  phone: zod
    .string()
    .min(10, "Phone number must be at least 10 characters long")
    .max(15, "Phone number must be at most 15 characters long")
    .optional(),
  location: zod
    .string()
    .max(100, "Location must be at most 100 characters long")
    .optional(),
  role: zod.enum(["user", "admin"], { message: "Role is required" }),
});

export function EditUser() {
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Ahmed Med",
      email: "ahmed@example.com",
      phone: "(123) 456-7890",
      location: "City, Country",
      role: "admin",
    },
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size="sm">
          Edit
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form className="space-y-8 px-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="JohnDoe@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display phone number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="City, Country" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display location.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>This is your user role.</FormDescription>
                  <FormMessage />
                </FormItem>

              )} />
            <Button type="submit">Save changes</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
