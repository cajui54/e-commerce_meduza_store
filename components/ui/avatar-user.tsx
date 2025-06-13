'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { useSession } from 'next-auth/react';

const AvatarUser = () => {
  const { status, data } = useSession();

  return (
    <>
      {status === 'authenticated' && data?.user && (
        <div className="my-4 flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src={data.user.image || 'https://github.com/shadcn.png'}
            />
            <AvatarFallback>{data.user.name}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{data.user.name}</p>
            <p className="text-xs opacity-75">Boas compras</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AvatarUser;
