export type MainParagraphProps = {
  children: React.ReactNode;
  className?: string;
};
export default function MainParagraph({
  className = "",
  children,
}: MainParagraphProps) {
  return <p className={`text-gray-600 text-xl ${className}`}>{children}</p>;
}
