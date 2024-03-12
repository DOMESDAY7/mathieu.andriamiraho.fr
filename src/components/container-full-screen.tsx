import React from "react";

const ContainerFullScreen = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
    return (
        <section ref={ref} {...props} className={`h-svh ${className}`}>
            {children}
        </section>
    );
});
ContainerFullScreen.displayName = "ContainerFullScreen";

export default ContainerFullScreen;
