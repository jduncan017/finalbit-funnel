import { type ReactNode } from "react";
import { type RoundedSize, roundedClasses } from "../shared-styles";

interface CardProps {
  children: ReactNode;
  badge?: string;
  heading?: string;
  description?: string;
  action?: ReactNode;
  rounded?: RoundedSize;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}

export function Card({
  children,
  badge,
  heading,
  description,
  action,
  rounded = "xl",
  as: Tag = "div",
  className = "",
}: CardProps) {
  return (
    <Tag className={`p-6 shadow-sm ${roundedClasses[rounded]} ${className}`}>
      {badge && (
        <div className="bg-primary-100 text-primary-400 mb-3 inline-block rounded-full px-3 py-1 text-sm font-medium">
          {badge}
        </div>
      )}
      {heading && <h3 className="text-lg font-semibold">{heading}</h3>}
      {description && (
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      )}
      {children}
      {action && <div className="mt-4">{action}</div>}
    </Tag>
  );
}
