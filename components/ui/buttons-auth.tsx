'use client';
import React from 'react';
import { Button } from './button';
import { LogInIcon, LogOutIcon } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';

const ButtonsAuth = () => {
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };
  return (
    <div>
      {status === 'unauthenticated' && (
        <Button
          onClick={handleLoginClick}
          variant="outline"
          className="w-full justify-start gap-6"
        >
          <LogInIcon />
          Fazer Login com Google
        </Button>
      )}

      {status === 'authenticated' && (
        <Button
          onClick={handleLogoutClick}
          variant="outline"
          className="w-full justify-start gap-6"
        >
          <LogOutIcon />
          Fazer Logout
        </Button>
      )}
    </div>
  );
};

export default ButtonsAuth;
