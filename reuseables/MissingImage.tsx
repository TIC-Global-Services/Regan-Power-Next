import React from "react";

interface MissingImageProps {
  label?: string;
  className?: string;
  aspect?: string;
}

const MissingImage: React.FC<MissingImageProps> = ({
  label = "Add image in Strapi",
  className = "",
  aspect = "aspect-video",
}) => {
  return (
    <div
      className={`${aspect} ${className} flex flex-col items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 text-gray-500 text-sm rounded`}
    >
      <svg
        className="w-8 h-8 mb-2 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="font-medium">{label}</span>
    </div>
  );
};

export default MissingImage;
