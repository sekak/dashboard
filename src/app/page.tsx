import { AreaChart } from "@/components/AreaChart";
import CardList from "@/components/CardList";
import { Chart } from "@/components/Chart";
import { ChartPieDonutText } from "@/components/PieChart";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2"><Chart /></div>
        <div className="bg-primary-foreground p-4 rounded-lg "><CardList title={'popular_content'} /></div>
        <div className="bg-primary-foreground p-4 rounded-lg "><ChartPieDonutText /></div>
        <div className="bg-primary-foreground p-4 rounded-lg "><TodoList /></div>
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2"><AreaChart/></div>
        <div className="bg-primary-foreground p-4 rounded-lg "><CardList title={'latest_transactions'} /></div>
    </div>
  );
}
