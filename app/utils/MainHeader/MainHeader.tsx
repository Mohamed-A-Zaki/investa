export type MainHeaderProps = {
  children: React.ReactNode;
};
export default function MainHeader({ children }: MainHeaderProps) {
  return <h2 className="text-4xl font-semibold">{children}</h2>;
}
