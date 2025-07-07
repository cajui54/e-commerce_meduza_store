'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}
const ProductImages = ({ name, imageUrls }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };
  return (
    <div className="flex flex-col lg:w-[600px]">
      <div
        className={`flex h-[300px] w-full items-center justify-center bg-accent`}
      >
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          sizes="100vw"
        />
      </div>

      <div className={`mt-8 grid grid-cols-4 gap-4 px-5`}>
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex h-[80px] items-center justify-center rounded-lg bg-accent ${imageUrl === currentImage && 'border-2 border-solid border-primary'}`}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              className="h-[100px] w-auto max-w-[80%] object-contain"
              sizes="100vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
