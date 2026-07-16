import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children?: ReactNode;
}

export default function Container({
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
