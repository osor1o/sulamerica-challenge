import { privateRequest } from "@/Utils/Request";

export enum AuthReducerTypes {
  CHANGE_TOKEN = "CHANGE_TOKEN",
  CLEAR_TOKEN = "CLEAR_TOKEN",
}

export type AuthReducerAction = {
  type: AuthReducerTypes;
  payload?: any;
};

export type AuthReducerState = {
  token?: string;
};

const INITIAL_STATE: AuthReducerState = {};

export const AuthReducer = (
  state: AuthReducerState = INITIAL_STATE,
  action: AuthReducerAction
): AuthReducerState => {
  switch (action.type) {
    case AuthReducerTypes.CHANGE_TOKEN:
      const token = action.payload;
      privateRequest.defaults.headers.common.Authorization = `Bearer ${token}`;
      return { token };
    case AuthReducerTypes.CLEAR_TOKEN:
      delete privateRequest.defaults.headers.common.Authorization;
      return INITIAL_STATE;
    default:
      return state;
  }
};
