"use client";

import Image from "next/image";
import { useState } from "react";
import { FaImage } from "react-icons/fa6";

const ImagePreview = ({ imageUrls = [] }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="md:w-1/2">
      <div className="mb-4 w-full h-96 bg-white rounded-xl shadow-md flex items-center justify-center p-2 dark:bg-gray-700">
        {imageUrls.length == 0 ? (
          <FaImage className="text-gray-300 h-34 w-auto" />
        ) : (
          <Image
            src={imageUrls[index]}
            alt=""
            height={600}
            width={800}
            className="h-full w-auto object-contain"
          />
        )}
      </div>
      <div className="flex items-center justify-center gap-4">
        {imageUrls?.map((url, i) => (
          <Image
            key={i}
            src={url}
            alt=""
            height={200}
            width={200}
            className={`w-16 h-16 object-cover p-1 border-2 bg-gray-100 rounded-lg ${
              i == index ? "border-primary" : "border-gray-200"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagePreview;
