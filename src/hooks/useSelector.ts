import {
  useSelector as useSelectorRedux,
  TypedUseSelectorHook,
} from "react-redux";

type DashboardState = {
  completedStage: boolean;
  formVisible: boolean;
  currentStage: number;
};

export type RootState = {
  dashboard: DashboardState;
};

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
