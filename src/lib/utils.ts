import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Custom Easing Curve ---
export const premiumEase = [0.76, 0, 0.24, 1] as const;
