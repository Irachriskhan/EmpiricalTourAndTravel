import DashboardStatsGrid from "../components/DashboardStatsGrid";
import TransactionChart from "../components/TouristeChart";
import TouristeProfilePieChart from "../components/TouristeProfilePieChart";
// import PopularProducts from '../components/PopularHospital'
import RecentDoners from "../components/RecentTours";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <TouristeProfilePieChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentDoners />
        {/* <PopularProducts /> */}
      </div>
    </div>
  );
}
