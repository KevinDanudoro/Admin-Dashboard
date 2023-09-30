import { create } from "zustand";

export enum SidebarNav {
  REPORT,
  WORKSPACES,
  SETTINGS,
}

type Store = {
  currentNav: SidebarNav;
  setSideNav: (nav: SidebarNav) => void;
};

export const useSidebarStore = create<Store>()((set) => ({
  currentNav: SidebarNav.REPORT,
  setSideNav: (nav) => set(() => ({ currentNav: nav })),
}));
