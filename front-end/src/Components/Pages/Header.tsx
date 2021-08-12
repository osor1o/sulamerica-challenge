import { FC } from "react";
import { useAppSelector } from "@/Store";
import { Header as HeaderMolecule } from "@/Components/Molecules/Header";
import { logout } from "@/Services/Auth.service";

export const Header: FC = () => {
  const user = useAppSelector((state) => state.user);

  const onLogout = () => {
    logout();
  };

  return <HeaderMolecule user={user} onLogout={onLogout} />;
};
