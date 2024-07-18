export default function InlineIcon({
  children,
}: { children: React.ReactNode[] }) {
  return (
    <div className="[&>*:first-child]:inline [&>*:first-child]:mr-[0.25em] [&>*:first-child]:h-[1em] [&>*:first-child]:w-[1em]">
      {children[0]}
      <span className="align-text-top">{children.slice(1)}</span>
    </div>
  );
}
