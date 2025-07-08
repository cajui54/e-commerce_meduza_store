import React, { ReactNode } from 'react';
import { Badge } from './ui/badge';

const BadgeTitleRadius = ({ children }: { children: ReactNode }) => {
  return (
    <Badge
      variant={'outline'}
      className="w-fit gap-1 border-2 border-gray-400 px-3 py-[0.375rem] text-base uppercase"
    >
      {children}
    </Badge>
  );
};

export default BadgeTitleRadius;
