import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/app/(auth)/login/login-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
};

export default async function LoginPage(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) {
    console.log(callbackUrl);
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={100}
              height={100}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
