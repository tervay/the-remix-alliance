export default function InlineIcon({
  children,
}: { children: React.ReactNode[] }) {
  return (
    <div className="[&>*:first-child]:inline">
      {children[0]}&nbsp;
      <span className="align-text-top">{children.slice(1)}</span>
    </div>
  );
}
