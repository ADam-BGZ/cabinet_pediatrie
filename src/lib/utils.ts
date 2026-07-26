import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const BASE_PATH = process.env.GITHUB_ACTIONS === "true" ? "/dentiste-t-touan" : ""

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
