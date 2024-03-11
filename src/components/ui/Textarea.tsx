import cn from "@/utils/cn";
import * as React from "react";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea className={cn("threeD-input", className)} ref={ref} {...props} />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
