"use server";

import { loginFormSchema, registerFormSchema } from "@/lib/schemas";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { hashSync } from "bcrypt-ts-edge";
import prisma from "@/db";
import { formatError } from "@/lib/utils";

export async function login(prevState: unknown, formData: FormData) {
  try {
    const user = loginFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    await signIn("credentials", user);

    return { success: true, message: "Login successful" };
  } catch (error) {
    if (isRedirectError(error)) throw error;

    return { success: false, message: "Invalid credentials" };
  }
}

export async function register(prevState: unknown, formData: FormData) {
  try {
    const userData = registerFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    const plainTextPassword = userData.password;
    userData.password = hashSync(userData.password, 10);

    await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      },
    });

    await signIn("credentials", {
      email: userData.email,
      password: plainTextPassword,
    });

    return { success: true, message: "Registration successful" };
  } catch (error) {
    if (isRedirectError(error)) throw error;

    return { success: false, message: formatError(error) };
  }
}

export async function logout() {
  await signOut();
}
