import React from 'react';
import { TrendingUp, Coins, History } from 'lucide-react';
import { useCrashGame } from '../hooks/useCrashGame';

export function CrashGame() {
  const {
    gameState,
    betAmount,
    setBetAmount,
    autoCashout,
    setAutoCashout,
    placeBet,
    cashout
  } = useCrashGame();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Crash Game</h1>
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
            <Coins className="h-6 w-6 text-yellow-500" />
            <span className="font-bold">{gameState.coins}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Display */}
          <div className="lg:col-span-2 bg-gray-800 rounded-lg p-8">
            <div className="h-96 flex items-center justify-center">
              <div className={`text-7xl font-bold ${gameState.crashed ? 'text-red-500' : 'text-green-500'}`}>
                {gameState.crashed ? 'CRASHED' : `${gameState.multiplier.toFixed(2)}x`}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Bet Amount</label>
                <input
                  type="number"
                  value={betAmount}
                  onChange={(e) => setBetAmount(Number(e.target.value))}
                  className="w-full bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={gameState.isPlaying}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Auto Cashout (optional)</label>
                <input
                  type="number"
                  value={autoCashout}
                  onChange={(e) => setAutoCashout(Number(e.target.value))}
                  className="w-full bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={gameState.isPlaying}
                  step="0.1"
                />
              </div>

              <div className="space-y-4">
                {!gameState.isPlaying ? (
                  <button
                    onClick={() => placeBet(betAmount)}
                    disabled={betAmount <= 0 || betAmount > gameState.coins}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Place Bet
                  </button>
                ) : (
                  <button
                    onClick={cashout}
                    disabled={gameState.crashed}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cash Out ({(betAmount * gameState.multiplier).toFixed(0)} coins)
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Game History */}
        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <History className="h-5 w-5" />
            Recent Games
          </h2>
          <div className="flex gap-4 overflow-x-auto">
            {gameState.gameHistory.map((round, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-4 py-2 rounded ${
                  round.crashPoint < 2 ? 'bg-red-500/20' : 'bg-green-500/20'
                }`}
              >
                {round.crashPoint.toFixed(2)}x
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}