import firstIcon from "app/assets/images/first_icon.svg";
import { cn } from "~/lib/utils";
import { Rect, Svg } from "react-native-svg";

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
        "h-[230px]",
        "w-[140px]",
        "leading-[1.2]",
        "mb-[40px]",
        "p-2",
        "relative",
        "text-center",
        "align-top",
        "whitespace-normal",
        // "after:content-['']",
        // "after:absolute",
        // "after:block",
        // "after:border-[70px]",
        // "after:border-solid",
        // "after:border-banner",
        // "after:border-t-[5px]",
        // "after:border-b-transparent",
        // "after:border-b-[20px]",
        // "after:top-[100%]",
        // "after:left-0",
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
        <span className={cn("align-middle", "uppercase", "table-cell", "pt-2")}>
          {/* {title ?? ""} */}
          Banner
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
            "pt-20",
          )}
        >
          {/* {description ?? ""} */}
          Description
        </span>
      </div>
    </div>
  );
}

export function SvgBanner({
  title,
  description,
  height = 10,
}: {
  title?: string;
  description?: string;
  height?: number;
}): JSX.Element {
  const width = (height * 3) / 5;

  const iconAspectRatio = 165.173 / 98.84;
  const iconWidth = width * 0.4;
  const iconHeight = (iconWidth * 1) / iconAspectRatio;

  const iconX = (width - iconWidth) / 2;
  const iconY = 0.4;

  return (
    <svg
      width={`${width}em`}
      height={`${height}em`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Banner</title>
      <rect
        x="0"
        y="0"
        width={`${width}em`}
        height={`${height}em`}
        fill="rgb(15, 75, 203)"
      />
      <image
        href={firstIcon}
        x={`${iconX}em`}
        y={`${iconY}em`}
        width={`${iconWidth}em`}
        height={`${iconHeight}em`}
      />
      <text
        x={`${width / 2}em`}
        y={`${iconY + iconHeight}em`}
        fill="white"
        textAnchor="middle"
        dominantBaseline="hanging"
      >
        <tspan
          x={"50%"}
          dy="0.2em"
          className="italic text-[0.7em] font-extrabold"
        >
          FIRST
        </tspan>
        <tspan x={"50%"} dy={`${1.1}em`} className="text-[0.6em] font-bold">
          ROBOTICS
        </tspan>
        <tspan x={"50%"} dy={`${1.1}em`} className="text-[0.6em] font-bold">
          COMPETITION
        </tspan>
      </text>

      <foreignObject height={"3em"} width={"100%"} x="0" y="4.5em">
        <p
          style={{
            color: "white",
            textTransform: "uppercase",
            fontWeight: 700,
            textAlign: "center",
            fontSize: "0.6em",
            textWrap: "wrap",
            lineHeight: "1.2em",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
          }}
        >
          {title}
        </p>
      </foreignObject>

      <foreignObject height={"3em"} width={"100%"} x="0" y="8em">
        <p
          style={{
            color: "white",
            textTransform: "uppercase",
            fontWeight: 600,
            textAlign: "center",
            fontSize: "0.4em",
            textWrap: "wrap",
            lineHeight: "1.2em",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
          }}
        >
          {description}
        </p>
      </foreignObject>
    </svg>
  );
}
