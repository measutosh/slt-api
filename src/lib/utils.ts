import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// this function will merge classnames from tailwind into a single classname
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
