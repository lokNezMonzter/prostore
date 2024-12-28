"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {theme === "system" && <SunMoon />}
          {theme === "dark" && <MoonIcon />}
          {theme === "light" && <SunIcon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          checked={theme === "system"}
          onChange={() => setTheme("system")}
        >
          System
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={theme === "dark"}
          onChange={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={theme === "light"}
          onChange={() => setTheme("light")}
        >
          Light 
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
