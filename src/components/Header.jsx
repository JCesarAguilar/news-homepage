import { NavBar } from "./NavBar";
import logo from "../assets/images/logo.svg";

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8">
      <img src={logo} alt="Logo" className="w-[48px] md:w-[65px]" />
      <NavBar />
    </header>
  );
};
