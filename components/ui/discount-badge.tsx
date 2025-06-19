import { ArrowBigDownIcon } from 'lucide-react';
import React from 'react';
import { Badge, BadgeProps } from './badge';
import { twMerge } from 'tailwind-merge';

const DiscountBadge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <Badge className={twMerge('px-2 py-[2px]', className)} {...props}>
      <ArrowBigDownIcon size={14} />
      {children}%
    </Badge>
  );
};

export default DiscountBadge;
