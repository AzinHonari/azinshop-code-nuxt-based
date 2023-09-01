import { Colors } from "@/data";

export type FilterList = {
  title?: string | Colors | undefined;
  quantity: number;
  selected: boolean;
};

export type FilterRange = {
  from?: number;
  to?: number;
};
