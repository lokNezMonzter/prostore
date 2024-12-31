import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function jsonParser<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatPriceString(price: number): string {
  const [int, float] = price.toString().split(".");
  return float ? `${int}.${float.padEnd(2, "0")}` : `${int}.00`;
}
