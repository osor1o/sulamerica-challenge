import { User } from "@/Types/User";
// import { publicRequest } from "@/Utils/Request";
import { changeUser, clearUser } from "@/Store/Actions/User";
import { changeToken, clearToken } from "@/Store/Actions/Auth";
import { store } from "@/Store";

export type LoginDto = {
  email: string;
  name: string;
};

export type LoginResponse = {
  user: User;
  token: string;
};

export const login = async (loginDto: LoginDto) => {
  // const { data } = await publicRequest.post<LoginResponse>("/login", loginDto);
  const data = {
    user: {
      _id: "900150983cd24fb0d6963f7d28e17f72",
      ...loginDto,
    },
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  };

  store.dispatch(changeToken(data.token));
  store.dispatch(changeUser(data.user));
  return data;
};

export const logout = () => {
  store.dispatch(clearToken());
  store.dispatch(clearUser());
};
