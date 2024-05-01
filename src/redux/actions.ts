import { types } from "./types";

type ActionPayload = boolean | number;

function createAction(type: string, payload?: ActionPayload) {
  return {
    type,
    payload,
  };
}

export function showForm() {
  return createAction(types.SET_FORM_VISIBLE, true);
}

export function hideForm() {
  return createAction(types.SET_FORM_HIDE, false);
}

export function setCompletedStage(value: boolean) {
  return createAction(types.SET_COMPLETED_STAGE, value);
}

export function setCurrentStage(value: number) {
  return createAction(types.SET_CURRENT_STAGE, value);
}

export function reset() {
  return createAction(types.RESET);
}
