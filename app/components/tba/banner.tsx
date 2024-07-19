import firstIcon from "app/assets/images/first_icon.svg";
import { cn } from "~/lib/utils";
import { Rect, Svg } from "react-native-svg";
import type { Award, Event } from "~/api/tba";
import { getNormalizedName } from "~/lib/api/AwardType";

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

function FIRSTLogoSvg(): JSX.Element {
  return (
    /*
      The FIRST logo SVG is originally 165.16 x 98.84.
      The banner SVG is 300 wide.
      To center the logo, we need to translate it (300 - 165.16) / 2 = 67.42
    */
    <g transform="translate(67.42, 20)">
      <path
        d="M595.828 505.742c21.801 0 42.973-1.992 63.184-5.679l48.078 50.093c-33.621 11.645-71.367 18.172-111.262 18.172-67.836 0-129.418-18.91-175.086-49.707l41.899-39.687c38.742 16.972 84.328 26.808 133.187 26.808"
        style={{
          fill: "#959596",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 98.84)"
      />
      <path
        d="M595.828 568.328c39.895 0 77.641-6.527 111.262-18.172l52.273 54.422c-48.777 19.231-104.414 30.152-163.535 30.152-88.129 0-168.539-24.253-229.91-64.156l54.824-51.953c45.668 30.797 107.25 49.707 175.086 49.707"
        style={{
          fill: "#fff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 98.84)"
      />
      <path
        d="M344.824 355.391c4.395 17.968 12.512 35 23.707 50.75l-21.058 21.304c-4.172-13.09-6.481-26.722-6.481-40.757 0-10.668 1.332-21.114 3.832-31.297M189.215 237.637l-8.84-45.832 87.969 37.871c-5.551 11.679-6.641 26.906-9.848 39.289l-69.281-31.328M127.313 736.086 0 38.906l60.215-4.902 126.062 707.312-58.964-5.23"
        style={{
          fill: "#959596",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 98.84)"
      />
      <path
        d="M555.438 334.891v56.382l-92.473 87.661-41.879 39.687-54.848 51.953L186.07 741.328 59.96 34.004l266.837 117.305c-26.567 23.464-45.395 48.484-59.387 77.968l-86.859-37.257 8.711 45.597 56.285 293.356 4.703 24.621 46.469-46.789 59.801-60.215 25.664-25.891 105.546-90.922-102.453-46.953c26.614-26.57 58.129-49.988 100.625-63.215l127.828 57.395-58.292 55.887"
        style={{
          fill: "#ed1c24",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 98.84)"
      />
      <path
        d="M846.816 355.391c2.481 10.183 3.848 20.629 3.848 31.297 0 31.484-11.516 61.21-31.328 87.019l-30.352-31.422c29.153-24.254 49.856-54.14 57.832-86.894M903.867 57.004l-71.926 69.098c-11.503-7.848-23.796-15.137-36.668-21.825L903.867 0l334.883 348.797-.37 56.48L903.867 57.004M659.844 291.258l-59.239 56.887-45.328 43.277-.16-56.531 63.731-61.211 60.918-58.512c15.476 3.863 30.285 8.719 44.207 14.508l-64.129 61.582"
        style={{
          fill: "#959596",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 98.84)"
      />
      <path
        d="m892.695 606.688-47.675-49.633-52.579-54.793-35.859-37.313-67.93-70.738 28.457-27.316 72.278 75.242 30.222 31.476 55.371 57.645 17.715 18.465 184.145-176.524 28.48 29.574-212.625 203.915"
        style={{
          fill: "#959596",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 98.84)"
      />
      <path
        d="m874.98 531.258-55.371-57.645c19.817-25.812 31.055-55.441 31.055-86.925 0-10.668-1.367-21.114-3.848-31.297-6.464-26.496-20.988-51.036-41.711-72.278-21.199-21.734-48.906-40.039-81.132-53.437-13.922-5.789-28.731-10.645-44.207-14.508-26.27-6.516-54.524-10.109-83.938-10.109-36.238 0-70.66 5.39-101.859 15.109-42.504 13.25-78.949 34.488-105.582 61.082-9.715 9.688-18.106 20.117-25.039 31.121-8.528 13.535-14.832 27.942-18.524 43.02-2.5 10.183-3.832 20.629-3.832 31.297 0 14.035 2.309 27.667 6.481 40.757l-63.586 64.371c-23.289-34.535-36.43-73.449-36.43-114.66 0-10.597.981-21.043 2.664-31.297 4.074-24.921 13.008-48.691 26-70.879 6.516-11.152 14.082-21.894 22.606-32.16 22.371-26.98 51.214-50.691 85.027-69.91 58.707-33.39 132.223-53.312 212.074-53.312 55.871 0 108.606 9.738 155.383 27.011a389.18 389.18 0 0 1 40.84 17.735c30.156 15.273 56.914 33.918 79.238 55.246 37.473 35.789 62.5 79.051 70.242 126.269 1.692 10.254 2.649 20.7 2.649 31.297 0 57.793-25.735 111.149-69.2 154.102"
        style={{
          fill: "#fff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 98.84)"
      />
      <path
        d="m659.543 290.84 63.914-61.387c32.188 13.426 60.129 31.492 81.367 53.242l-87.636 84.149-28.458 27.301 67.571 70.371 35.816 37.324 52.602 54.797 47.683 49.629 212.118-203.649-28.47-29.679-173.784-180.934c-18.301-25.09-42.043-47.356-70.118-66.574l71.415-68.88 334.887 348.763-348.77 334.878-130.625-136.035-52.278-54.433-48.105-50.094-103.395-108.207L659.543 290.84"
        style={{
          fill: "#1c63b7",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 98.84)"
      />
      <path
        d="M364.797 310.633s1.668-2.754 1.859-3.055c5.117-8.137 12.145-15.574 18.797-23.008l104.184 48.145-239.422 222.957-6.527-34.484 187.835-185.973-66.726-24.582"
        style={{
          fill: "#959596",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 98.84)"
      />
      <path
        d="M944.18 377.156c0-10.597-.957-21.043-2.649-31.297-7.742-47.218-32.769-90.48-70.242-126.269-22.324-21.328-49.082-39.973-79.238-55.246a389.18 389.18 0 0 0-40.84-17.735c-46.777-17.273-99.512-27.011-155.383-27.011-79.851 0-153.367 19.922-212.074 53.312-33.813 19.219-62.656 42.93-85.027 69.91-8.524 10.266-16.09 21.008-22.606 32.16-12.992 22.188-21.926 45.958-26 70.879-1.683 10.254-2.664 20.7-2.664 31.297 0 3.34.258 6.629.418 9.914-.031.176-.098.434-.113.598-1.699-10.27-.305-62.531-.305-73.117 0-16.809 2.246-33.203 6.398-49.113 3.243-12.422 7.688-24.481 13.235-36.161 13.988-29.484 34.969-56.504 61.547-79.992 63.941-56.387 159.894-92.281 267.191-92.281 74.453 0 143.391 17.32 200.012 46.726 12.859 6.688 25.098 13.985 36.582 21.836 28.074 19.207 51.844 41.77 70.144 66.856 26.536 36.308 41.614 77.918 41.614 122.129 0 9.316.8 53.515-.098 71.058-.156 2.407.098-5.406.098-8.453"
        style={{
          fill: "#959596",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 98.84)"
      />
    </g>
  );
}

function SvgText({
  children,
  ...props
}: {
  children: string | string[] | undefined;
  fontSize?: string;
  y?: string;
  fontWeight?: string;
  fontStyle?: string;
}): JSX.Element {
  return (
    <text
      {...props}
      fill="white"
      x="50%"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {children}
    </text>
  );
}

export function AwardBanner({
  award,
  event,
  height,
}: {
  award: Award;
  event: Event;
  height?: number | string | undefined;
}): JSX.Element {
  return (
    <SvgBanner
      height={height}
      title={getNormalizedName(award.award_type, event.event_type, event.year)}
      description={`${event.year} ${event.name}`}
    />
  );
}

export function SvgBanner({
  title,
  description,
  height,
}: {
  title?: string;
  description?: string;
  height?: number | string | undefined;
}): JSX.Element {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 300 500"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Banner</title>
      <rect x="0" y="0" width="100%" height="100%" fill="rgb(15, 75, 203)" />
      <FIRSTLogoSvg />

      <SvgText fontSize="200%" fontWeight="600" y="30%" fontStyle="italic">
        FIRST®
      </SvgText>
      <SvgText fontSize="200%" fontWeight="500" y="35%">
        ROBOTICS
      </SvgText>
      <SvgText fontSize="200%" fontWeight="500" y="40%">
        COMPETITION
      </SvgText>

      {/* <SvgText fontSize="200%" fontWeight="600" y="55%">
        {title?.toUpperCase()}
      </SvgText> */}

      {/* <SvgText fontSize="200%" fontWeight="400" y="80%">
        {description?.toUpperCase()}
      </SvgText> */}

      <foreignObject x="0%" y="55%" height="500" width="300">
        <p
          style={{
            color: "white",
            textTransform: "uppercase",
            fontWeight: 600,
            textWrap: "wrap",
            textAlign: "center",
            fontSize: "200%",
            lineHeight: "1em",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
          }}
        >
          {title?.toUpperCase()}
        </p>
      </foreignObject>

      <foreignObject x="0%" y="80%" height="500" width="300">
        <p
          style={{
            color: "white",
            textTransform: "uppercase",
            fontWeight: 450,
            textWrap: "wrap",
            textAlign: "center",
            fontSize: "155%",
            lineHeight: "1em",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
          }}
        >
          {description?.toUpperCase()}
        </p>
      </foreignObject>
    </svg>
  );
}
