import Logo from "@/app/utils/Logo";
import NavLinks from "@/app/utils/NavLinks";
import NavButtons from "@/app/utils/NavButtons";
import NavDropDown from "@/app/utils/NavDropDown";

export default function Header() {
  return (
    <nav className="sticky top-0 shadow py-5 bg-white">
      <div className="container flex items-center justify-between">
        <Logo />
        <NavLinks />
        <NavButtons />
        <NavDropDown />
      </div>
    </nav>
  );
}
