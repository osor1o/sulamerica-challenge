import { User } from "@/Types/User";

export type HeaderProps = {
  user?: User | null;
  onLogout?: () => any;
};
