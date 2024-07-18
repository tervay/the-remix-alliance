import firstIcon from "app/assets/images/first_icon.svg";
import { cn } from "~/lib/utils";

export default function Banner({
  title,
  description,
}: {
  title?: string;
  description?: string;
}): JSX.Element {
  return (
    <div
      className={cn(
        "bg-banner",
        "text-white",
        "inline-block",
        "h-[170px]",
        "w-[140px]",
        "leading-[1.2]",
        "mb-[40px]",
        "p-2",
        "relative",
        "text-center",
        "align-top",
        "whitespace-normal",
        "after:content-['']",
        "after:absolute",
        "after:block",
        "after:border-[70px]",
        "after:border-solid",
        "after:border-banner",
        "after:border-t-[5px]",
        "after:border-b-transparent",
        "after:border-b-[20px]",
        "after:top-[100%]",
        "after:left-0",
        "drop-shadow-banner",
        "after:drop-shadow-banner",
        "self-center",
      )}
    >
      <img
        className={cn("my-[10px]", "w-[75px]", "max-h-[45px]", "mx-auto")}
        src={firstIcon}
        alt={description}
      />
      <div
        className={cn(
          "w-full",
          "h-[35px]",
          "font-bold",
          "mx-0",
          "my-[3px]",
          "table",
          "text-sm",
        )}
      >
        <span
          className={cn("align-middle", "italic", "uppercase", "table-cell")}
        >
          {title ?? ""}
        </span>
      </div>
      <div className={cn("h-[50px]", "w-full", "table")}>
        <span
          className={cn(
            "align-middle",
            "max-w-[calc(140px-2*8px)]",
            "text-ellipsis",
            "overflow-hidden",
            "text-xs",
            "leading-[130%]",
            "uppercase",
            "table-cell",
          )}
        >
          {description ?? ""}
        </span>
      </div>
    </div>
  );
}
