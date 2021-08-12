import { AuthReducerTypes, AuthReducerAction } from "@/Store/Reducers/Auth";

export const changeToken = (token: string): AuthReducerAction => {
  return { type: AuthReducerTypes.CHANGE_TOKEN, payload: token };
};

export const clearToken = (): AuthReducerAction => {
  return { type: AuthReducerTypes.CLEAR_TOKEN };
};
