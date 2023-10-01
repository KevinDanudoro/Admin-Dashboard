import { create } from "zustand";

interface xxs {
  type: string;
  value: string;
}

type Store = {
  filter: xxs[];
  setFilter: (newFilter: xxs) => void;
};

export const useSelectFilterOverview = create<Store>()((set) => ({
  filter: [],
  setFilter: (newFilter) =>
    set((state) => {
      const filtered = state.filter.filter(
        (val) => val.type !== newFilter.type
      );

      return { filter: [...filtered, newFilter] };
    }),
}));
