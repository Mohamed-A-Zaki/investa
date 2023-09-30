import MainButton from "../MainButton";

export default function NavButtons() {
  return (
    <div className="hidden md:block">
      <MainButton className="hover:border-gray-600 mx-2">Get Advice</MainButton>
      <MainButton className="text-white bg-black mx-2">Hire Me</MainButton>
    </div>
  );
}
