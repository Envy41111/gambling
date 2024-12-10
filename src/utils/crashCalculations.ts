export const calculateGrowthRate = (currentMultiplier: number): number => {
  // Base rate starts very slow
  const baseRate = 0.005;
  
  // Different growth phases based on multiplier ranges
  if (currentMultiplier <= 2) {
    // Very slow and steady growth from 1x to 2x
    return baseRate;
  } else if (currentMultiplier <= 10) {
    // Gradual increase from 2x to 10x
    const progress = (currentMultiplier - 2) / 8; // normalized progress from 0 to 1
    return baseRate + (progress * 0.015);
  } else {
    // Faster growth after 10x
    return baseRate + 0.015 + (Math.pow(currentMultiplier - 10, 1.1) * 0.002);
  }
};