import { AuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import { prismaClient } from './prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
