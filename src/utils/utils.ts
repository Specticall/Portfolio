import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (date: Date) => {
  const hours = date.getUTCHours() + 7; // Adjust for GMT+7
  const minutes = date.getUTCMinutes();
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} GMT+7`;
  return formattedTime;
};
