import React from 'react';
import { Trophy, Users } from 'lucide-react';
import { Prize } from '../types/game';

interface PrizeCardProps {
  prize: Prize;
  onEnter: () => void;
  userEntries: number;
  disabled: boolean;
}

export function PrizeCard({ prize, onEnter, userEntries, disabled }: PrizeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
      <img 
        src={prize.image} 
        alt={prize.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{prize.name}</h3>
        <p className="mt-2 text-gray-600">{prize.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">{prize.entries} entries</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-bold text-yellow-500">{prize.cost} coins</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">
            Your entries: <span className="font-bold">{userEntries || 0}</span>
          </p>
          <button
            onClick={onEnter}
            disabled={disabled}
            className={`w-full py-2 px-4 rounded-md text-white font-semibold
              ${disabled 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-yellow-500 hover:bg-yellow-600'}`}
          >
            Enter Sweepstake
          </button>
        </div>
      </div>
    </div>
  );
}