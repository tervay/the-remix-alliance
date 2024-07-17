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
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import type { EventCopRs } from "~/api/tba";

interface Datapoint {
  teamKey: string;
  value: number;
}

export default function CoprBarChart({
  coprs,
}: {
  coprs: EventCopRs;
}): JSX.Element {
  const [selectedCopr, setSelectedCopr] = useState("totalPoints");
  const [data, setData] = useState<Datapoint[]>([]);

  useEffect(() => {
    const x: Datapoint[] = Object.entries(coprs[selectedCopr])
      .map(([k, v]) => ({
        teamKey: k.substring(3),
        value: v,
      }))
      .sort((a, b) => b.value - a.value);

    setData(x);
  }, [selectedCopr, coprs]);

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <CardTitle>Component OPRs</CardTitle>
            </div>
            <Select value={selectedCopr} onValueChange={setSelectedCopr}>
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
              value: { label: selectedCopr, color: "hsl(var(--primary))" },
              label: {
                color: "hsl(var(--primary))",
              },
            }}
          >
            <BarChart data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="teamKey"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip
                cursor={true}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={8} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
