import Link from "next/link";
import { UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/actions/user.actions";

export default async function UserButton() {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href="/login">
          <UserIcon /> Login
        </Link>
      </Button>
    );
  }

  const initial = session.user?.name?.charAt(0).toUpperCase() ?? "U";

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-gray-200"
            >
              {initial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="text-sm font-medium leading-none">
              {session.user?.name}
            </div>
            <div className="text-sm text-muted-foreground leading-none py-0.5">
              {session.user?.email}
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem className="p-0 mb-1">
            <form action={logout} className="w-full">
              <Button
                className="w-full py-4 px-2 h-4 justify-start"
                variant="ghost"
              >
                Logout
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
