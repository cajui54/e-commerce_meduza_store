import Image, { ImageProps } from 'next/image';
import React from 'react';

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      alt={alt}
      width={0}
      height={0}
      className="h-auto w-full px-5 lg:w-[600px]"
      sizes="100vw"
      {...props}
    />
  );
};

export default PromoBanner;
