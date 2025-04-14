import LocalSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <div className="flex justify-end p-1 lg:p-2 md:bg-clr2 bg-clr3 font-font2 border-b-4 border-black">
      <LocalSwitcher />
    </div>
  );
}
