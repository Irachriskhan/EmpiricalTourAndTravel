import ToursKPI from "../components/ToursKPI";
import ToursGridChart from "../components/ToursGridChart";
import TouristProfilePieChart from "../components/TouristProfilePieChart";
// import PopularProducts from '../components/PopularHospital'
import RecentDoners from "../components/RecentTours";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <ToursKPI />
      <div className="flex flex-row gap-4 w-full">
        <ToursGridChart />
        <TouristProfilePieChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentDoners />
        {/* <PopularProducts /> */}
      </div>
    </div>
  );
}
