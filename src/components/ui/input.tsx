import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Remove ALL browser default styles
        "appearance-none outline-none border-none bg-transparent shadow-none",

        // Basic layout & text styles
        "h-9 w-full min-w-0 rounded-md px-3 py-1 text-base text-white placeholder:text-gray-400",

        // No focus visual effects
        "focus:outline-none focus:ring-0 focus:border-none focus:shadow-none",

        // Disable autofill styles (Chrome)
        "[&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_transparent] [&:-webkit-autofill]:text-fill-color-white",

        className
      )}
      {...props}
    />
  );
}

export { Input };
