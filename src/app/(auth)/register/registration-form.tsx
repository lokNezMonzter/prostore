"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { registrationDefaultValues } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { register } from "@/actions/user.actions";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";

export default function RegistrationForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [data, action] = useActionState(register, {
    success: false,
    message: "",
  });

  function RegisterButton() {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Registering User..." : "Register"}
      </Button>
    );
  }

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={registrationDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
            required
            autoComplete="email"
            defaultValue={registrationDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={registrationDefaultValues.password}
          />
        </div>
        <div>
          <Label htmlFor="password">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            autoComplete="confirmPassword"
            defaultValue={registrationDefaultValues.password}
          />
        </div>
        <div>
          <RegisterButton />
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" target="_self" className="link underline">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}
