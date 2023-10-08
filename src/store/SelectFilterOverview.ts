import { create } from "zustand";

interface ISelectFilterOverview {
  type: string;
  value: string;
}

type SelectFilterOverviewStore = {
  filters: ISelectFilterOverview[];
  setFilters: (newFilter: ISelectFilterOverview) => void;
};

export const useSelectFilterOverview = create<SelectFilterOverviewStore>()(
  (set) => ({
    filters: [],
    setFilters: (newFilter) =>
      set((state) => {
        const currentFilters = state.filters;

        for (const i in currentFilters) {
          if (currentFilters[i].type === newFilter.type) {
            currentFilters[i] = newFilter;
            break;
          }
        }

        return { filters: currentFilters };
      }),
  })
);
