import clsx from "clsx";
import type { HTMLAttributes, PropsWithChildren } from "react";

type TagProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement> & {
  className?: string;
}>;

export function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      {...props}
      className={clsx(
        "inline-flex items-center rounded-full border border-line/80 bg-paper/85 px-3 py-1 text-xs font-medium text-ink/80",
        className
      )}
    >
      {children}
    </span>
  );
}
