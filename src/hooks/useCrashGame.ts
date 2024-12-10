import { useState, useEffect, useCallback } from 'react';
import { GameState, GameRound } from '../types/game';

const INITIAL_STATE: GameState = {
  coins: 1000,
  isPlaying: false,
  currentBet: 0,
  multiplier: 1.00,
  crashed: false,
  gameHistory: [],
};

export function useCrashGame() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [betAmount, setBetAmount] = useState<number>(0);
  const [autoCashout, setAutoCashout] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const generateCrashPoint = () => {
    // Simplified crash point generation with better distribution
    const random = Math.random();
    return Math.max(1.00, Math.floor((100 / (random * 0.99 + 0.01)) * 100) / 100);
  };

  const startNewRound = useCallback(() => {
    if (intervalId) clearInterval(intervalId);
    
    const crashPoint = generateCrashPoint();
    let currentMultiplier = 1.00;
    
    const id = window.setInterval(() => {
      currentMultiplier += 0.01;
      
      if (currentMultiplier >= crashPoint) {
        clearInterval(id);
        setGameState(prev => ({
          ...prev,
          crashed: true,
          isPlaying: false,
          multiplier: crashPoint,
          gameHistory: [...prev.gameHistory, {
            crashPoint: Number(crashPoint.toFixed(2)),
            timestamp: Date.now()
          }].slice(-10)
        }));
        return;
      }

      setGameState(prev => ({
        ...prev,
        multiplier: Number(currentMultiplier.toFixed(2))
      }));
    }, 50); // Fixed 50ms interval for smooth animation

    setIntervalId(id);
  }, []);

  const placeBet = (amount: number) => {
    if (amount <= 0 || amount > gameState.coins || gameState.isPlaying) return false;
    
    setGameState(prev => ({
      ...prev,
      coins: prev.coins - amount,
      currentBet: amount,
      isPlaying: true,
      multiplier: 1.00,
      crashed: false
    }));
    
    startNewRound();
    return true;
  };

  const cashout = () => {
    if (!gameState.isPlaying || gameState.crashed) return false;
    
    const winnings = Math.floor(gameState.currentBet * gameState.multiplier);
    setGameState(prev => ({
      ...prev,
      coins: prev.coins + winnings,
      isPlaying: false,
      currentBet: 0
    }));
    
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    
    return true;
  };

  useEffect(() => {
    if (autoCashout > 0 && gameState.isPlaying && gameState.multiplier >= autoCashout) {
      cashout();
    }
  }, [gameState.multiplier, autoCashout]);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return {
    gameState,
    betAmount,
    setBetAmount,
    autoCashout,
    setAutoCashout,
    placeBet,
    cashout
  };
}