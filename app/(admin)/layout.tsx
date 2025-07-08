import React, { ReactNode } from 'react';
import '../globals.css';
import AuthProvider from '../providers/auth';
import Sidebar from './dashboard/_components/sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="flex h-full flex-col">
        <AuthProvider>
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </AuthProvider>
      </div>
    </div>
  );
}
