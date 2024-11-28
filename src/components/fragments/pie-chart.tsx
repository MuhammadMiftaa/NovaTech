"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "teknologifinansial", visitors: 275, fill: "#e13670" }, // Biru untuk teknologifinansial
  { browser: "ecommerce", visitors: 200, fill: "#e78c2f" }, // Oranye untuk ecommerce
  { browser: "pendidikan", visitors: 287, fill: "#2662da" }, // Oranye tua untuk pendidikan
  { browser: "kesehatan", visitors: 173, fill: "#2eb789" }, // Biru untuk kesehatan
  { browser: "lainnya", visitors: 190, fill: "#ae57da" }, // Abu-abu untuk lainnya
];

const chartConfig = {
  visitors: {
    label: "Customers",
  },
  teknologifinansial: {
    label: "Teknologi Finansial",
    color: "#e13670",
  },
  ecommerce: {
    label: "E-Commerce",
    color: "#e78c2f",
  },
  pendidikan: {
    label: "Pendidikan",
    color: "#2662da",
  },
  kesehatan: {
    label: "Kesehatan",
    color: "#2eb789",
  },
  lainnya: {
    label: "Lainnya",
    color: "#ae57da",
  },
} satisfies ChartConfig;

export function Chart1() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Statistik Klien</CardTitle>
        <CardDescription>Januari - Juni 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Customers
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Meningkat 5,2% bulan ini <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Menampilkan total klien selama 6 bulan terakhir
        </div>
      </CardFooter>
    </Card>
  );
}
