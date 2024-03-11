import cn from "@/utils/cn";
import * as React from "react";

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn("threeD-input", className)}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export { Input };
