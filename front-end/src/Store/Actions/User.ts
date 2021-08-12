import {
  UserReducerTypes,
  UserReducerState,
  UserReducerAction,
} from "@/Store/Reducers/User";

export const changeUser = (data: UserReducerState): UserReducerAction => {
  return { type: UserReducerTypes.CHANGE_USER, payload: data };
};

export const clearUser = (): UserReducerAction => {
  return { type: UserReducerTypes.CLEAR_USER };
};
