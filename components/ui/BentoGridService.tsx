import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { cn } from "@/lib/utils";

export const BentoGridService = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mx-auto auto-rows-fr",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridServiceItem = ({
  className,
  id,
  title,
  description,
  titleClassName,
  headingLevel,
  metaDescription,
  onClick,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  titleClassName?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  metaDescription?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.1] group/bento hover:shadow-xl hover:border-white/[0.3] transition-all duration-300 shadow-input dark:shadow-none flex flex-col h-full min-h-[280px] cursor-pointer",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(135deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
      onClick={onClick}
    >
      <div className="flex flex-col h-full p-6 lg:p-8">
        {/* Title section - Top */}
        <div className="flex-1 flex flex-col justify-start mb-4">
          {headingLevel ? (
            React.createElement(
              headingLevel,
              {
                className: `font-sans text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-4`,
                ...(metaDescription && {
                  "data-meta-description": metaDescription,
                }),
              },
              title
            )
          ) : (
            <div className="font-sans text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
              {title}
            </div>
          )}
        </div>

        {/* Description section - Bottom */}
        <div className="flex-1 flex flex-col justify-end">
          <div className="font-sans font-light text-sm md:text-base text-gray-300 leading-relaxed mb-6">
            {description}
          </div>

          {/* Arrow icon */}
          <div className="flex justify-end">
            <div className="group-hover/bento:translate-x-1 transition-transform duration-300">
              <IoArrowForward className="text-white/60 group-hover/bento:text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
