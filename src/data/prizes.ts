import { Prize } from '../types/game';

export const prizes: Prize[] = [
  {
    id: '1',
    name: 'Mystery Box',
    description: 'A mysterious box containing valuable treasures!',
    cost: 100,
    image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&q=80',
    entries: 45
  },
  {
    id: '2',
    name: 'Golden Trophy',
    description: 'A prestigious golden trophy for the lucky winner!',
    cost: 250,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
    entries: 28
  },
  {
    id: '3',
    name: 'Treasure Chest',
    description: 'An ancient chest filled with golden coins!',
    cost: 500,
    image: 'https://images.unsplash.com/photo-1633793675529-14c3fbfaba39?auto=format&fit=crop&q=80',
    entries: 12
  }
];