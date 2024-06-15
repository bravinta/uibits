import { cn } from "@/utils/cn";
import { getInitials } from "@/utils/getInitials";
import { HTMLAttributes } from "react";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  picture?: string;
  fallback: string;
}

export const Avatar = (props: AvatarProps) => {
  const initials = getInitials(props.fallback);

  return (
    <div
      {...props}
      className={cn(
        "bg-neutral-200 h-10 w-10 rounded-full flex items-center justify-center overflow-hidden relative",
        props.className
      )}
    >
      {/* Picture */}
      {props.picture && (
        <img
          draggable={false}
          className="absolute top-0 left-0 w-full h-full aspect-square object-cover"
          src={props.picture}
        />
      )}

      {/* Fallback */}
      <p className="uppercase">{initials}</p>
    </div>
  );
};
