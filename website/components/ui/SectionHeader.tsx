import type { ReactNode } from "react";

type SectionHeaderProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={className.trim()}>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
