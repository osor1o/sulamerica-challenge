import { User } from "@/Types/User";

export enum UserReducerTypes {
  CHANGE_USER = "CHANGE_USER",
  CLEAR_USER = "CLEAR_USER",
}

export type UserReducerState = User | null;

export type UserReducerAction = {
  type: UserReducerTypes;
  payload?: UserReducerState;
};

const INITIAL_STATE: UserReducerState = null;

export const UserReducer = (
  state: UserReducerState = INITIAL_STATE,
  action: UserReducerAction
): UserReducerState => {
  switch (action.type) {
    case UserReducerTypes.CHANGE_USER:
      if (!state) {
        return action.payload || null;
      }
      return { ...state, ...action.payload };
    case UserReducerTypes.CLEAR_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
