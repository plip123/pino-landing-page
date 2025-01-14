import { type ISectionStorage } from "@/components/Sections/Section.interface";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { IDBStorage } from "./StoreUtils";

/** Zustand Store */

export const useSectionStorage = create<ISectionStorage>()(
  devtools(
    persist(
      immer((set) => ({
        isActive: false,
        setIsActive: () => {
          set((state) => {
            state.isActive = !state.isActive;
          });
        },
      })),
      {
        name: "mobile-menu",
        storage: createJSONStorage(() => IDBStorage),
      },
    ),
  ),
);
