import { create } from 'zustand';

interface PlantState {
  scanData: any;
  setScanData: (data: any) => void;
}

export const usePlantStore = create<PlantState>((set) => ({
  scanData: null,
  setScanData: (data) => set({ scanData: data }),
}));