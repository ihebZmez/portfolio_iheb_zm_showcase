"use client";

import { cn } from "@/lib/utils";

export const BentoGridPersonel = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Image container with proper sizing and positioning */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {img && (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={img}
              alt={typeof title === "string" ? title : "Bento grid image"}
              className={cn(
                "w-full h-full object-contain object-center",
                imgClassName
              )}
              loading="lazy"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        )}
        {spareImg && (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <img
              src={spareImg}
              alt="spare image"
              className={cn(
                "w-full h-full object-contain object-center opacity-0 group-hover/bento:opacity-100 transition-opacity duration-200",
                "absolute inset-0"
              )}
              loading="lazy"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        )}
      </div>

      {/* Content overlay with responsive positioning */}
      <div
        className={cn(
          "relative z-10 p-4 sm:p-6 md:p-8 flex flex-col h-full justify-end",
          titleClassName
        )}
      >
        <div className="flex flex-col gap-2 sm:gap-3 max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
          <div className="font-sans font-bold text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {title}
          </div>
          {description && (
            <div className="font-sans font-normal text-neutral-300 text-xs sm:text-sm md:text-base">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};