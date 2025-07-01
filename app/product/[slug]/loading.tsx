import { LoaderPinwheel } from 'lucide-react';
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <p className="flex items-center justify-center gap-4">
        <LoaderPinwheel className="animate-spin text-2xl" /> Carregando ...
      </p>
    </div>
  );
};

export default LoadingPage;
