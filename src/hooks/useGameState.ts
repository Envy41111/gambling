import { useState } from 'react';
import { UserState } from '../types/game';

const INITIAL_STATE: UserState = {
  coins: 1000, // Starting coins
  entries: {},
};

export function useGameState() {
  const [gameState, setGameState] = useState<UserState>(INITIAL_STATE);

  const enterSweepstake = (prizeId: string, cost: number) => {
    if (gameState.coins >= cost) {
      setGameState(prev => ({
        coins: prev.coins - cost,
        entries: {
          ...prev.entries,
          [prizeId]: (prev.entries[prizeId] || 0) + 1
        }
      }));
      return true;
    }
    return false;
  };

  return {
    gameState,
    enterSweepstake
  };
}