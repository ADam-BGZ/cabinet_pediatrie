import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const BASE_PATH = process.env.GITHUB_ACTIONS === "true" ? "/cabinet_pediatrie" : ""

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
