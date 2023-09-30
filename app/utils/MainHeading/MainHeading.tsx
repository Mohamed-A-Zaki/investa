export type MainHeadingProps = {
  children: React.ReactNode;
};
export default function MainHeading(props: MainHeadingProps) {
  return <h2 className="text-2xl font-bold">{props.children}</h2>;
}
