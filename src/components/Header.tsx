import React from 'react';
import { Coins } from 'lucide-react';

interface HeaderProps {
  coins: number;
}

export function Header({ coins }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Golden Sweepstakes</h1>
        <div className="flex items-center gap-2 bg-yellow-600 px-4 py-2 rounded-full">
          <Coins className="h-6 w-6" />
          <span className="font-bold">{coins}</span>
        </div>
      </div>
    </header>
  );
}