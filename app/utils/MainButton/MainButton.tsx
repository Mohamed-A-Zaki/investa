export type MainButtonProps = {
  children: React.ReactNode;
  className?: string;
};
export default function MainButton({ children, className }: MainButtonProps) {
  return (
    <button
      className={`border p-2 rounded-lg transition duration-500 ${className}`}
    >
      {children}
    </button>
  );
}
