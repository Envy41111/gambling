import React from 'react';
import { PrizeCard } from './PrizeCard';
import { prizes } from '../data/prizes';
import { UserState } from '../types/game';

interface PrizeGridProps {
  gameState: UserState;
  onEnterSweepstake: (prizeId: string, cost: number) => boolean;
}

export function PrizeGrid({ gameState, onEnterSweepstake }: PrizeGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prizes.map((prize) => (
          <PrizeCard
            key={prize.id}
            prize={prize}
            onEnter={() => onEnterSweepstake(prize.id, prize.cost)}
            userEntries={gameState.entries[prize.id] || 0}
            disabled={gameState.coins < prize.cost}
          />
        ))}
      </div>
    </div>
  );
}