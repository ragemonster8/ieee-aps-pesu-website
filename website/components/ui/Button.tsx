import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  className?: string;
  children: ReactNode;
};

export default function Button({ href, className = "", children }: ButtonProps) {
  const classes = className.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
