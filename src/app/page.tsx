import { AreaChart } from "@/components/AreaChart";
import { Chart } from "@/components/Chart";
import { ChartPieDonutText } from "@/components/PieChart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-col-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div className="bg-primary-foreground p-4 rounded-2xl col-span-2">
          <Chart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-2xl "></div>
        <div className="bg-primary-foreground p-4 rounded-2xl "><ChartPieDonutText/></div>
        <div className="bg-primary-foreground p-4 rounded-2xl "></div>
        <div className="bg-primary-foreground p-4 rounded-2xl col-span-2"><AreaChart/></div>
        <div className="bg-primary-foreground p-4 rounded-2xl "></div>
    </div>
  );
}
