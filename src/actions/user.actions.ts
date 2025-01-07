"use server";

import { loginFormSchema } from "@/lib/schemas";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function login(prevState: unknown, formData: FormData) {
  try {
    const user = loginFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    await signIn("credentials", user);

    return { success: true, message: "login successful" };
  } catch (error) {
    if (isRedirectError(error)) throw error;

    return { success: false, message: "Invalid credentials" };
  }
}

export async function logout() {
  await signOut();
}
