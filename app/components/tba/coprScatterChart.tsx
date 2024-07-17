import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Label,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from "recharts";
import type { EventCopRs } from "~/api/tba";

interface Datapoint {
  teamKey: string;
  valueX: number;
  valueY: number;
}

export default function CoprScatterChart({
  coprs,
}: {
  coprs: EventCopRs;
}) {
  const [selectedXCopr, setSelectedXCopr] = useState(
    "Total Teleop Game Pieces",
  );
  const [selectedYCopr, setSelectedYCopr] = useState("Total Auto Game Pieces");
  const [data, setData] = useState<Datapoint[]>([
    { teamKey: "604", valueX: 2, valueY: 3 },
    { teamKey: "2713", valueX: 4, valueY: 5 },
  ]);

  useEffect(() => {
    const data: Datapoint[] = Object.keys(coprs[selectedXCopr])
      .map((tk) => ({
        teamKey: tk,
        valueX: coprs[selectedXCopr][tk],
        valueY: coprs[selectedYCopr][tk],
      }))
      .sort((a, b) => a.valueX - b.valueX);

    setData(data);
  }, [selectedXCopr, selectedYCopr, coprs]);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>Component OPRs</CardTitle>
          </div>
          <Select value={selectedXCopr} onValueChange={setSelectedXCopr}>
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>COPRs</SelectLabel>
                {Object.keys(coprs).map((k) => (
                  <SelectItem value={k} key={k}>
                    {k}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={selectedYCopr} onValueChange={setSelectedYCopr}>
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>COPRs</SelectLabel>
                {Object.keys(coprs).map((k) => (
                  <SelectItem value={k} key={k}>
                    {k}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            // teamKey: { color: "hsl(var(--primary))" },
            valueX: { label: selectedXCopr, color: "hsl(var(--primary))" },
            valueY: { label: selectedYCopr, color: "hsl(var(--primary))" },
            label: {
              color: "hsl(var(--primary))",
            },
          }}
        >
          <ScatterChart
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="valueX"
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
              type="number"
              label={selectedXCopr}
              //   tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis dataKey="valueY" axisLine={false} tickLine={false}>
              <Label value={selectedYCopr} angle={-90} />
            </YAxis>
            {/* <ChartTooltip content={<CstmTooltip />} /> */}
            <ChartTooltip
              content={<ChartTooltipContent labelKey="teamKey" />}
            />
            <Scatter fill="hsl(var(--primary))" />
          </ScatterChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
