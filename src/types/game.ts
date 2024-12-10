export interface GameState {
  coins: number;
  isPlaying: boolean;
  currentBet: number;
  multiplier: number;
  crashed: boolean;
  gameHistory: GameRound[];
}

export interface GameRound {
  crashPoint: number;
  timestamp: number;
}

export interface Prize {
  id: string;
  name: string;
  description: string;
  cost: number;
  image: string;
  entries: number;
}

export interface UserState {
  coins: number;
  entries: Record<string, number>;
}